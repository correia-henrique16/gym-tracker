import useDbContext from "../../hooks/useDbContext"
import useFiltrosContext from "../../hooks/useFiltrosContext"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import TituloListar from "../../styles/components/TituloListar"
import DivListar from "../../styles/components/DivListar"
import ExercisesFilters from "./home-components/ExercisesFilters"
import ListExercises from "./home-components/ListExercises"
import Loading from "../../styles/components/Loading"

const ShowExercises = () => {

    const {zonasCorpo, exercicios, especificos, workoutsLoading, staticLoading, chooseImg} = useDbContext()


    const {filtroZona, setFiltroZona, filtroEspecifico, setFiltroEspecifico} = useFiltrosContext()

    if (staticLoading || workoutsLoading) return <Loading/>

    
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