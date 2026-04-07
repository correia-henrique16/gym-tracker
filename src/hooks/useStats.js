import useDbContext from "./useDbContext"
import useUserContext from "./useUserContext"

const useStats = () => {
    const {userInfo} = useUserContext()
    const {userId} = userInfo()

    const {listaWorkouts} = useDbContext()

    const exercicioMaisPeso = listaWorkouts.reduce((max, atual) => {
        return Number(atual.peso) > Number(max.peso) ? atual : max
    }, listaWorkouts[0])

    const exercicioMaisVolume = () => {
        if (!listaWorkouts || listaWorkouts.length === 0) {
            return { exercicio: null, valor: 0 }; 
        }

        const exercicio = listaWorkouts.reduce((max, atual) => {
            return (atual.peso * atual.reps) > (max.peso * max.reps) ? atual : max
        }, listaWorkouts[0])

        const valor = (exercicio.peso * exercicio.reps)

        return {
            exercicio,
            valor,
        }

    }

    return {
        exercicioMaisPeso, exercicioMaisVolume
    }

}

export default useStats