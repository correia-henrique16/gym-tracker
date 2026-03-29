import { Link } from "react-router-dom"
import useGetUser from "../../hooks/useGetUser"
import useWorkouts from "../../hooks/useWorkouts"
import { useEffect } from "react"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import { useParams } from "react-router-dom"
import ListWorkouts from "./workout-components/ListWorkouts"
import addImg from '../../assets/add.png'

const ShowWorkouts = () => {

    const {exId, exNome} = useParams()

    const {userInfo, userLoading} = useGetUser()

    const {userId} = userInfo()

    const {buscarWorkouts, loading, listaWorkouts} = useWorkouts()
    
    useEffect(()=> {
        if (userId) {
            buscarWorkouts(userId, exId)
        }

    }, [userId, exId])



    if (userLoading) return <p>A carregar...</p>
    if (loading) return <p>A carregar treinos...</p>

    
    return (
        <DivCentrada>
            <h1 className="m-5 text-3xl font-bold text-texto">{exNome}</h1>

            <ButtonVoltar />

            <ListWorkouts listaWorkouts={listaWorkouts} />


            <Link className="fixed top-5 right-5 text-verde cursor-pointer z-2 hover:opacity-50">
                <img src={addImg} alt="Adicionar" className="w-13"/>
            </Link>

        </DivCentrada>
        
    )
}

export default ShowWorkouts