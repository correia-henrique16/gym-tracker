import useDbContext from "../../hooks/useDbContext"
import useFiltros from "../../hooks/useFiltros"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import DivCentrada from "../../styles/components/DivCentrada"
import ExercisesFilters from "./home-components/ExercisesFilters"
import ListExercises from "./home-components/ListExercises"

const ShowExercises = () => {

    // const {userInfo, userLoading} = useUserContext()

    // const {userId} = userInfo()

    const {zonasCorpo, exercicios, especificos, workoutsLoading, staticLoading, chooseImg} = useDbContext()


    const {filtroZona, setFiltroZona, filtroEspecifico, setFiltroEspecifico} = useFiltros()


    

    // if (userLoading) return <p>A carregar...</p>
    if (staticLoading || workoutsLoading) return <p>A carregar...</p>

    
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