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

            <h1 className="m-5 text-texto text-5xl font-bold">Editar</h1>

            <h2 className="m-2 text-verde text-3xl">{wktNomeEx}</h2>
            <h3 className="m-3 text-verde text-1xl">{wktData}</h3>
           

            <form onSubmit={(e) => handleEditar(e)} className="flex flex-col items-center">

                <InputNumbers label="Peso" id="peso-input" required type="number" min="1" max="1000"
                onChange={(e) => setPeso(e.target.value)} value={peso}/>

                <InputNumbers label="Reps" id="reps-input" required type="number" min="1" max="1000"
                onChange={(e) => setReps(e.target.value)} value={reps}/>


                <fieldset className="w-full max-w-sm my-6 p-5 border-2 border-verde/10 rounded-4xl backdrop-blur-sm flex flex-col items-center gap-4">
                    <legend className="px-4 text-lg tracking-[0.3em] text-verde/60">
                        Sítio
                    </legend>

                    <div className="flex flex-wrap justify-center gap-3 w-full">
                        {sitios.map(s => {
                            const idSitio = s.id;
                            const nomeSitio = s.nome_sitio;
                            const isSelected = sitioEscolhido == idSitio;

                            return (
                                <label
                                    key={idSitio}
                                    htmlFor={idSitio}
                                    className={`
                                        cursor-pointer px-5 py-3 rounded-xl border-2 transition-all duration-300 
                                        flex items-center gap-2 font-bold uppercase text-xs
                                        ${isSelected 
                                            ? "bg-verde/20 border-verde text-texto shadow-[0_0_20px_rgba(var(--verde-rgb),0.1)] scale-105" 
                                            : "bg-verde-cinza/10 border-verde/5 text-texto/40 hover:border-verde/30 hover:text-texto/70"
                                        }
                                    `}
                                >
                                    <input
                                        type="radio"
                                        id={idSitio}
                                        name="sitio"
                                        value={idSitio}
                                        onChange={e => setSitioEscolhido(e.target.value)}
                                        checked={isSelected}
                                        className="hidden"
                                    />
                                    {nomeSitio}
                                    {isSelected && <span className="text-verde">●</span>}
                                </label>
                            );
                        })}
                    </div>
                </fieldset>
                
                <Button type="submit" disabled={submitting}>
                    {submitting ? "A Editar..." : "Editar"}
                </Button>
            </form>
        </DivCentrada>
        
    )
}

export default EditWorkout