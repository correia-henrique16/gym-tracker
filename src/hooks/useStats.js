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

    const streakDias = () => {
        if (!listaWorkouts || listaWorkouts.length === 0) return 0;

        const datas = [...new Set(
            listaWorkouts.map(wkt => wkt.data.slice(0, 10))
        )].sort((a, b) => new Date(b) - new Date(a))

        const hoje = new Date()
        const ontem = new Date()
        ontem.setDate(hoje.getDate() - 1)

        const hojeStr = hoje.toISOString().slice(0, 10)
        const ontemStr = ontem.toISOString().slice(0, 10)

        if (datas[0] !== hojeStr && datas[0] !== ontemStr) return 0;
        let streak = 1

        for (let i = 1; i < datas.length; i++) {
            const diferenca = (new Date(datas[i - 1]) - new Date(datas[i])) / 86400000;
            if (diferenca === 1) streak++;
            else break;
        }

        return streak
    }

    return {
        exercicioMaisPeso, exercicioMaisVolume,
        streakDias: streakDias()
    }

}

export default useStats