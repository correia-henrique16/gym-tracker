import useUserContext from "../../hooks/useUserContext"
import useDbContext from "../../hooks/useDbContext"
import { useParams } from "react-router-dom"
import useFiltros from "../../hooks/useFiltros"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import Button from "../../styles/components/Button"

const AddWorkout = () => {

    const {exId} = useParams()

    const {sitioEscolhido, setSitioEscolhido} = useFiltros()

    const {userInfo, userLoading} = useUserContext()


    const {userId} = userInfo()

    const {workoutsLoading, staticLoading, getExerById, sitios} = useDbContext()



    if (userLoading) return <p>A carregar...</p>
    if (workoutsLoading || staticLoading) return <p>A carregar treinos...</p>

    const {exNome} = getExerById(exId)

    const handleAdicionar = (e) => {
        e.preventDefault()

        console.log(sitioEscolhido)
    }

    return(
        <DivCentrada>
            <ButtonVoltar />

            <h1>Adicionar</h1>
            <h2>{exNome}</h2>

            <form onSubmit={(e) => handleAdicionar(e)}>

                
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
                
                <Button type="submit">Submit</Button>
            </form>
        </DivCentrada>
        
    )
}

export default AddWorkout