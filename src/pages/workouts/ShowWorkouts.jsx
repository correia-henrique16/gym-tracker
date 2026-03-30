import { Link } from "react-router-dom"
import useUserContext from "../../hooks/useUserContext"
import useDbContext from "../../hooks/useDbContext"
import { useEffect } from "react"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import { useParams } from "react-router-dom"
import ListWorkouts from "./workout-components/ListWorkouts"
import addImg from '../../assets/add.png'

const ShowWorkouts = () => {

    const {exId} = useParams()

    const {userInfo, userLoading} = useUserContext()

    const {userId} = userInfo()

    const {workoutsLoading, staticLoading, getExerById, listaWorkouts} = useDbContext()

    
    
    if (userLoading) return <p>A carregar...</p>
    if (workoutsLoading || staticLoading) return <p>A carregar treinos...</p>


    const listaWktExerc = listaWorkouts.filter(wkt => wkt.exercicio.id == exId)



    const {exNome} = getExerById(exId)


    
    return (
        <DivCentrada>
            <h1 className="m-5 text-3xl font-bold text-texto">{exNome}</h1>

            <ButtonVoltar />

            <ListWorkouts listaWktExerc={listaWktExerc} />


            <Link to={`/workouts/${exId}/adicionar`} className="fixed top-5 right-5 text-verde cursor-pointer z-2 hover:opacity-50">
                <img src={addImg} alt="Adicionar" className="w-13"/>
            </Link>

        </DivCentrada>
        
    )
}

export default ShowWorkouts