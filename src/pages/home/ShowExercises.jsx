import useDbContext from "../../hooks/useDbContext"
import useFiltros from "../../hooks/useFiltros"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import TituloListar from "../../styles/components/TituloListar"
import DivListar from "../../styles/components/DivListar"
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
        <DivListar>
            <TituloListar>
                Exercises
            </TituloListar>

            <ButtonVoltar />

            <ExercisesFilters zonasCorpo={zonasCorpo} filtroZona={filtroZona} setFiltroZona={setFiltroZona} especificos={especificos} filtroEspecifico={filtroEspecifico} setFiltroEspecifico={setFiltroEspecifico} />

            <ListExercises exercicios={exercicios} filtroZona={filtroZona} filtroEspecifico={filtroEspecifico} chooseImg={chooseImg}/>

        </DivListar>
        
    )
}

export default ShowExercises