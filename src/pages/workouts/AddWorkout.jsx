import useUserContext from "../../hooks/useUserContext"
import useDbContext from "../../hooks/useDbContext"
import { useParams } from "react-router-dom"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import Button from "../../styles/components/Button"
import InputNumbers from "../../styles/components/InputNumbers"
import useWorkouts from "../../hooks/useWorkouts"
import { useNavigate } from "react-router-dom"

const AddWorkout = () => {
    const navigate = useNavigate()

    const {exId} = useParams()

    const {addWorkout, sitioEscolhido, setSitioEscolhido, peso, setPeso, reps, setReps, submitting} = useWorkouts()

    const {workoutsLoading, staticLoading, getExerById, sitios} = useDbContext()


    if (workoutsLoading || staticLoading) return <p>A carregar treinos...</p>


    const {exNome} = getExerById(exId)

    const handleAdicionar = async (e) => {
        e.preventDefault()

        if (await addWorkout(exId)){
            navigate(-1)
        }
        
    }

    return(
        <DivCentrada>
            <ButtonVoltar />

            <h1 className="m-5 text-texto text-5xl font-bold">Adicionar</h1>
            <h2 className="m-2 text-verde text-3xl">{exNome}</h2>

            <form onSubmit={(e) => handleAdicionar(e)} className="flex flex-col items-center">

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
                    {submitting ? "A Adicionar..." : "Submit"}
                </Button>
            </form>
        </DivCentrada>
        
    )
}

export default AddWorkout