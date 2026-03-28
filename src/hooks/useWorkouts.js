import { useLayoutEffect, useState } from "react"
import supabase from "../lib/supabase"

const useWorkouts = (userId) => {
    const [listaWorkouts, setListaWorkouts] = useState([])
    // const [corpo, setCorpo] = useState([])
    const [loading, setLoading] = useState(false)

    const buscarWorkouts = async () => {

        if (!userId || userId === "undefined") {
            console.log("Waiting ID...");
            return;
        }

        setLoading(true);

        const {data, error} = await supabase
            .from('registos')
            .select(`
                id, peso, reps, data,
                exercicio(
                    nome_exercicio,
                    especifico(
                        especifico_nome,
                        corpo(nome_zona)
                    )
                ),
                sitio(nome_sitio)
            `)
            .eq('user_id', userId)


        if (error){
            console.error('Erro ao buscar: ',error)
        } else{
            setListaWorkouts(data)
        }
        
        setLoading(false)
    }

    return {
        buscarWorkouts, loading, listaWorkouts
    }
}

export default useWorkouts