import useGetUser from "../hooks/useGetUser"
import LinkBtn from "../styles/components/LinkBtn"
import DivCentrada from "../styles/components/DivCentrada"
import AddWorkout from "./workouts/AddWorkout"

const Home = () => {

    const {loading, userInfo} = useGetUser()

    if (loading) return <p>A verificar user...</p>

    const {userName, userEmail, userId} = userInfo()

    return (
        <DivCentrada>
            <h1 className="m-5 text-5xl font-bold text-texto">Home Page</h1>

            <h2 className="m-5 text-lg text-verde">Bem-vindo de volta {userName}!</h2>
            
            <LinkBtn to={`/adicionar/${userId}`}>
                Adicionar
            </LinkBtn>
        </DivCentrada>
    )
}

export default Home