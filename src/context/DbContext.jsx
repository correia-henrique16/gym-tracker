import { createContext, useState, useEffect } from "react";
import supabase from "../lib/supabase"
import chestImg from "../assets/chest.png"
import backImg from "../assets/back.png"
import armImg from "../assets/arm.png"
import legImg from "../assets/leg.png"
import shoulderImg from "../assets/shoulder.png"
import useUserContext from "../hooks/useUserContext";

export const DbContext = createContext(null)

const DbProvider = ({children}) => {
    const [listaWorkouts, setListaWorkouts] = useState([])
    const [zonasCorpo, setZonasCorpo] = useState([])
    const [exercicios, setExercicios] = useState([])
    const [especificos, setEspecificos] = useState([])
    const [sitios, setSitios] = useState([])
    const [staticLoading, setStaticLoading] = useState(false)
    const [workoutsLoading, setWorkoutsLoading] = useState(false)

    const {userInfo} = useUserContext()

    const {userId} = userInfo()

    useEffect(() => {
        setStaticLoading(true)
        buscarZonas()
        buscarSitios()
        buscarExercicios()
        buscarEspecificos()
        setStaticLoading(false)
    }, [])

    useEffect(() => {
        if (userId){
            setWorkoutsLoading(true)
            buscarWorkouts(userId)
            setWorkoutsLoading(false)
        }
        
    }, [userId])

    const buscarWorkouts = async (userId) => {

        if (!userId || userId === "undefined") {
            console.log("Waiting ID...");
            return;
        }


        const query = supabase
        .from('registos')
        .select(`
            id, peso, reps, data,
            exercicio(
                id, nome_exercicio,
                especifico(
                    id, especifico_nome,
                    corpo(id, nome_zona)
                )
            ),
            sitio(id, nome_sitio)
        `)
        .eq('user_id', userId)


        const {data, error} = await query



        if (error){
            console.error('Erro ao buscar workouts: ',error)
        } else{
            setListaWorkouts(data)
        }
        
    }

    const buscarZonas = async () => {

        const {data, error} = await supabase
        .from('corpo')
        .select('*')


        if (error){
            console.error('Erro ao buscar zonas: ',error)
        } else{
            setZonasCorpo(data)
        }

    }

    const buscarSitios = async () => {
        const {data, error} = await supabase
        .from('sitio')
        .select('*')


        if (error){
            console.error('Erro ao buscar sitios: ',error)
        } else{
            setSitios(data)
        }
    }

    const buscarExercicios = async () => {

        const {data, error} = await supabase
        .from('exercicio')
        .select(`
            id, nome_exercicio,
            especifico(id, especifico_nome,
                corpo(id, nome_zona)
            )
        `)



        if (error) {
            console.error('Erro ao buscar exercicios: ' ,error)
        } else {
            setExercicios(data)
        }
    }

    const buscarEspecificos = async () => {

        const {data, error} = await supabase
        .from('especifico')
        .select(`
            id, especifico_nome,
            corpo(id, nome_zona)
        `)

        if (error) {
            console.error('Erro ao buscar especificos: ', error)
        } else {
            setEspecificos(data)
        }
    }

    const chooseImg = (zonaId) => {
        const imgs = {
            1: chestImg,
            2: backImg,
            3: armImg,
            4: legImg,
            5: shoulderImg
        }
        
        return imgs[zonaId] || null
    }

    const getExerById = (exId) => {
        const exercicio = exercicios.find(exerc => exerc.id == exId)

        if (!exercicio) {
            return{
                exNome: "",
                exEspecificoId: "",
                exEspecificoNome: ""
            }
        }


        return{
            exNome: exercicio.nome_exercicio,
            exEspecificoId: exercicio.especifico?.id,
            exEspecificoNome: exercicio.especifico?.especifico_nome
        }
    }

    const getWorkoutById = (workoutId) => {
        const workout = listaWorkouts.find(w => w.id == workoutId)

        if (!workout) {
            return {
                wktNomeEx: "",
                wktPeso: "",
                wktReps: "",
                wktData: "",
                wktSitio: ""
            }
        }

        return{
            wktNomeEx: workout.exercicio?.nome_exercicio,
            wktPeso: workout.peso,
            wktReps: workout.reps,
            wktData: new Date(workout.data).toLocaleDateString('pt-PT'),
            wktSitio: workout.sitio?.nome_sitio,
            wktSitioId: workout.sitio?.id
        }


    }



    return (
        <DbContext.Provider value={{listaWorkouts, zonasCorpo, sitios, exercicios, especificos,
         chooseImg, staticLoading, workoutsLoading, getExerById, getWorkoutById, buscarWorkouts, setListaWorkouts}}>

            {children}

        </DbContext.Provider>
    )
}

export default DbProvider