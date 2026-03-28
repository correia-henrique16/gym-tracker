import useGetUser from "../hooks/useGetUser"
import LinkBtn from "../styles/components/LinkBtn"
import DivCentrada from "../styles/components/DivCentrada"

const Home = () => {

    const {loading, userInfo} = useGetUser()

    if (loading) return <p>A verificar user...</p>

    const {userName, userEmail, userId} = userInfo()

    return (
        <DivCentrada>
            <h1 className="m-5 text-5xl font-bold text-texto">Home Page</h1>

            <h2 className="m-5 text-lg text-verde">Bem-vindo de volta {userName}!</h2>
            
            <div className="flex flex-row justify-around items-center w-1/2 h-12 m-12 bg-verde-cinza box-content rounded-full">
                <LinkBtn to={`/workouts/${userId}`}>
                    Workouts
                </LinkBtn>

                <LinkBtn to={`/profile/${userId}`}>
                    Profile
                </LinkBtn>
            </div>
            
        </DivCentrada>
    )
}

export default Home