import { useState } from "react"
import supabase from "../lib/supabase"
import chestImg from "../assets/chest.png"
import backImg from "../assets/back.png"
import armImg from "../assets/arm.png"
import legImg from "../assets/leg.png"
import shoulderImg from "../assets/shoulder.png"

const useWorkouts = () => {
    const [listaWorkouts, setListaWorkouts] = useState([])
    const [zonasCorpo, setZonasCorpo] = useState([])
    const [exercicios, setExercicios] = useState([])
    const [especificos, setEspecificos] = useState([])
    const [loading, setLoading] = useState(false)

    const buscarWorkouts = async (userId, exercId = null) => {

        if (!userId || userId === "undefined") {
            console.log("Waiting ID...");
            return;
        }

        setLoading(true);



        let query = supabase
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

        if (exercId) {
            query = query.eq('exercicio_id', exercId)
        }


        const {data, error} = await query



        if (error){
            console.error('Erro ao buscar workouts: ',error)
        } else{
            setListaWorkouts(data)
        }
        
        setLoading(false)
    }

    const buscarZonas = async () => {

        setLoading(true)


        const {data, error} = await supabase
        .from('corpo')
        .select('*')


        if (error){
            console.error('Erro ao buscar zonas: ',error)
        } else{
            setZonasCorpo(data)
        }

        setLoading(false)
    }

    const buscarExercicios = async () => {
        setLoading(true)


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

        setLoading(false)
    }

    const buscarEspecificos = async () => {
        setLoading(true)

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
        let img
        switch(zonaId) {
            case 1: img = chestImg
            break;
            case 2: img = backImg
            break;
            case 3: img = armImg
            break;
            case 4: img = legImg
            break;
            case 5: img = shoulderImg
            break;

        }

        return img
    }

    return {
        buscarWorkouts, listaWorkouts,
        buscarZonas, zonasCorpo,
        buscarExercicios, exercicios,
        buscarEspecificos, especificos,
        chooseImg, loading
    }
}

export default useWorkouts