import useGetUser from "../../hooks/useGetUser"
import useWorkouts from "../../hooks/useWorkouts"
import { useEffect} from "react"
import useFiltros from "../../hooks/useFiltros"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import ExercisesFilters from "./home-components/ExercisesFilters"
import ListExercises from "./home-components/ListExercises"

const ShowExercises = () => {

    // const {userInfo, userLoading} = useGetUser()

    // const {userId} = userInfo()

    const {buscarZonas, zonasCorpo, buscarExercicios, exercicios, buscarEspecificos, especificos, loading, chooseImg} = useWorkouts()
    
    useEffect(()=> {
        buscarZonas()
        buscarExercicios()
        buscarEspecificos()
    }, [])

    const {filtroZona, setFiltroZona, filtroEspecifico, setFiltroEspecifico} = useFiltros()


    

    // if (userLoading) return <p>A carregar...</p>
    if (loading) return <p>A carregar...</p>

    
    return (
        <DivCentrada>
            <h1 className="m-5 text-3xl font-bold text-texto">
                Exercises
            </h1>

            <ButtonVoltar />

            <ExercisesFilters zonasCorpo={zonasCorpo} filtroZona={filtroZona} setFiltroZona={setFiltroZona} especificos={especificos} filtroEspecifico={filtroEspecifico} setFiltroEspecifico={setFiltroEspecifico} />

            <ListExercises exercicios={exercicios} filtroZona={filtroZona} filtroEspecifico={filtroEspecifico} chooseImg={chooseImg}/>

        </DivCentrada>
        
    )
}

export default ShowExercises