import useUserContext from "../../hooks/useUserContext"
import LinkBtn from "../../styles/components/LinkBtn"
import DivCentrada from "../../styles/components/DivCentrada"
import imgInicial from "../../assets/barbell.png"
import useStats from "../../hooks/useStats"
import useDbContext from "../../hooks/useDbContext"
import StatsExercicios from "./home-components/StatsExercicios"
import { Link } from "react-router-dom"

const Home = () => {

    const {userLoading, userInfo} = useUserContext()
    const {staticLoading, workoutsLoading} = useDbContext()
    const {streakDias, totalTreinos, exercicioMaisTreinado} = useStats()

    if (userLoading || staticLoading || workoutsLoading) return <p>Loading...</p>

    const {userName, userEmail, userId} = userInfo()

    return (
        <DivCentrada>

            <div className="w-11/12 top-0 flex justify-between items-center box-border fixed pt-2">
                <div className="flex justify-center items-center gap-2 cursor-default">
                    <img src={imgInicial} alt="Barbell" className="max-h-10"/>
                    <h1 className="text-verde text-xl">Gym Tracker</h1>
                </div>
                
                <LinkBtn to={`/exercises`}>
                    Workouts
                </LinkBtn>
                
                <Link to={`/profile`} className="flex items-center justify-center gap-4">
                    <p className="align-middle text-verde text-2xl">{userName}</p>
                    <div className="w-16 h-16 rounded-full bg-verde flex items-center justify-center">
                        <p className="text-white  text-4xl">{userName?.charAt(0).toUpperCase()}</p>
                    </div>
                </Link>
            </div>
            

            <StatsExercicios exercicioMaisTreinado={exercicioMaisTreinado} streakDias={streakDias} totalTreinos={totalTreinos}/>

        </DivCentrada>
    )
}

export default Home