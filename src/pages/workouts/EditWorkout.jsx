import { useNavigate, useParams } from "react-router-dom"
import useWorkouts from "../../hooks/useWorkouts"
import useDbContext from "../../hooks/useDbContext"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import InputNumbers from "../../styles/components/InputNumbers"
import Button from "../../styles/components/Button"
import DivCentrada from "../../styles/components/DivCentrada"
import { useEffect } from "react"

const EditWorkout = () => {
    const navigate = useNavigate()

    const {wktId} = useParams()

    const {editWorkout, sitioEscolhido, setSitioEscolhido, peso, setPeso, reps, setReps, submitting} = useWorkouts()

    useEffect(() => {
        setPeso(wktPeso)
        setReps(wktReps)
        setSitioEscolhido(wktSitioId)
    }, [])

    const {workoutsLoading, staticLoading, sitios, getWorkoutById} = useDbContext()


    if (workoutsLoading || staticLoading) return <p>A carregar treinos...</p>


    const {wktNomeEx, wktPeso, wktReps, wktData, wktSitioId} = getWorkoutById(wktId)

    const handleEditar = async (e) => {
        e.preventDefault()

        if (await editWorkout(wktId)){
            navigate(-1)
        }
        
    }

    return(
        <DivCentrada>
            <ButtonVoltar />

            <h1>Editar</h1>

            <div>
                <h2>{wktNomeEx}</h2>
                <h3>{wktData}</h3>
            </div>
           

            <form onSubmit={(e) => handleEditar(e)}>

                <InputNumbers label="Peso" id="peso-input" required type="number" min="1" max="1000"
                onChange={(e) => setPeso(e.target.value)} value={peso}/>

                <InputNumbers label="Reps" id="reps-input" required type="number" min="1" max="1000"
                onChange={(e) => setReps(e.target.value)} value={reps}/>


                <fieldset>
                    <legend>Sítio</legend>

                    {
                        sitios.map(s => {
                            const idSitio = s.id
                            const nomeSitio = s.nome_sitio
                            return (
                                <div key={idSitio}>
                                    <label htmlFor={idSitio}>{nomeSitio}</label>
                                    <input type="radio" id={idSitio} name="sitio" value={idSitio} 
                                    onChange={e => setSitioEscolhido(e.target.value)}
                                    checked={sitioEscolhido == idSitio}/>
                                </div>
                            )   
                            
                        })
                    }  
                </fieldset>
                
                <Button type="submit" disabled={submitting}>
                    {submitting ? "A Editar..." : "Editar"}
                </Button>
            </form>
        </DivCentrada>
        
    )
}

export default EditWorkout