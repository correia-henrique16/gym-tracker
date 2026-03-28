import LinkBtn from "../../styles/components/LinkBtn"
import { useParams } from "react-router-dom"
import useWorkouts from "../../hooks/useWorkouts"
import { useEffect } from "react"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"

const ShowWorkouts = () => {

    const {uid} = useParams()
    const {buscarWorkouts, loading, listaWorkouts} = useWorkouts(uid)

    useEffect(()=> {
        if (uid) {
            buscarWorkouts()
        }

    }, [])

    console.log(listaWorkouts)

    if (loading) return <p>A carregar...</p>
    
    return (
        <DivCentrada>
            <h1>SHowwww</h1>

            <ButtonVoltar />

            {listaWorkouts.map((workout) => {
                
                const id = workout.id
                const nome_exercicio = workout.exercicio?.nome_exercicio
                const peso = `${workout.peso}kg`
                const reps = `${workout.reps} Reps`
                const dataFormatada = new Date(workout.data).toLocaleDateString('pt-PT')
                const especifico_nome = workout.exercicio?.especifico?.especifico_nome
                const nome_zona = workout.exercicio?.especifico?.corpo?.nome_zona
                
                return (
                    <ul key={id}>
                        <h3>{nome_exercicio}</h3>
                        <li>{peso}</li>
                        <li>{reps}</li>
                        <li>{dataFormatada}</li>
                        <li>{especifico_nome}</li>
                        <li>{nome_zona}</li>
                    </ul>
                )}
            )}

            <LinkBtn to={`/workouts/${uid}/adicionar`}>
                Adicionar
            </LinkBtn>
        </DivCentrada>
        
    )
}

export default ShowWorkouts