import { useState } from "react"
import useUserContext from "./useUserContext"
import supabase from "../lib/supabase"
import useDbContext from "./useDbContext"


const useWorkouts = () => {
    const [sitioEscolhido, setSitioEscolhido] = useState(1)
    const [peso, setPeso] = useState("")
    const [reps, setReps] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const {userInfo} = useUserContext()
    const {userId} = userInfo()


    const {buscarWorkouts} = useDbContext()

    

    const addWorkout = async (exId) => {
        setSubmitting(true)

        const workout = {
            user_id: userId,
            exercicio_id: exId,
            peso: peso,
            reps: reps,
            data: new Date().toISOString().split('T')[0] ,
            sitio_id: sitioEscolhido
        }

        const {error} = await supabase
        .from('registos')
        .insert(workout)


        if(error){
            console.error('Erro ao adicionar: ', error)
            setSubmitting(false)
            return false
        } else {
            await buscarWorkouts(userId)
            setSubmitting(false)

            setPeso("")
            setReps("")
            setSitioEscolhido(1)

            return true
        }
    }

    const delWorkout = async (wktId) => {
        setSubmitting(true)

        const {error} = await supabase
        .from('registos')
        .delete()
        .eq('id', wktId)
        .eq('user_id', userId)

        if(error){
            console.error('Erro ao remover: ', error)
            setSubmitting(false)
            return false
        } else {
            await buscarWorkouts(userId)
            setSubmitting(false)
            return true
        }
    }

    const editWorkout = async (wktId) => {
        setSubmitting(true)

        const wktUpdate = {
            peso: peso,
            reps: reps,
            sitio_id: sitioEscolhido
        }

        const {error} = await supabase
        .from('registos')
        .update(wktUpdate)
        .eq('id', wktId)
        .eq('user_id', userId)

        if(error){
            console.error('Erro ao editar: ', error)
            setSubmitting(false)
            return false
        } else {
            await buscarWorkouts(userId)
            setSubmitting(false)

            setPeso("")
            setReps("")
            setSitioEscolhido(1)

            return true
        }
    }

    return{addWorkout, delWorkout, editWorkout, sitioEscolhido, setSitioEscolhido, peso, setPeso, reps, setReps, submitting}
}

export default useWorkouts