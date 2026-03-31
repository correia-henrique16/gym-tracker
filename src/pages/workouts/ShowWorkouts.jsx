import { Link } from "react-router-dom"
import useUserContext from "../../hooks/useUserContext"
import useDbContext from "../../hooks/useDbContext"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import { useParams, useNavigate } from "react-router-dom"
import ListWorkouts from "./workout-components/ListWorkouts"
import addImg from '../../assets/add.png'
import useWorkouts from "../../hooks/useWorkouts"
import { useState } from "react"

const ShowWorkouts = () => {

    const navigate = useNavigate()

    const [idSelecionado, setIdSelecionado] = useState()

    const {exId} = useParams()

    const {delWorkout} = useWorkouts()

    const {userLoading, showPopUp, setShowPopUp} = useUserContext()

    const {workoutsLoading, staticLoading, getExerById, listaWorkouts} = useDbContext()

    
    
    if (userLoading) return <p>A carregar...</p>
    if (workoutsLoading || staticLoading) return <p>A carregar treinos...</p>


    const listaWktExerc = listaWorkouts.filter(wkt => wkt.exercicio.id == exId)



    const {exNome} = getExerById(exId)


    const handleDelete = async (e, wktId) => {
        e.preventDefault()

        delWorkout(wktId)

        
    }


    
    return (
        <DivCentrada>
            <h1 className="m-5 text-3xl font-bold text-texto">{exNome}</h1>

            <ButtonVoltar />

            <ListWorkouts listaWktExerc={listaWktExerc} handleDelete={handleDelete} showPopUp={showPopUp} setShowPopUp={setShowPopUp} idSelecionado={idSelecionado} setIdSelecionado={setIdSelecionado} />


            <Link to={`/workouts/${exId}/adicionar`} className="fixed top-5 right-5 text-verde cursor-pointer z-2 hover:opacity-50">
                <img src={addImg} alt="Adicionar" className="w-13"/>
            </Link>

            

        </DivCentrada>
        
    )
}

export default ShowWorkouts