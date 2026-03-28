import useGetUser from "../../hooks/useGetUser"
import useWorkouts from "../../hooks/useWorkouts"
import { useParams } from "react-router-dom"

const AddWorkout = () => {

    const {userId} = useParams()

    return(
        <div>
            <h1>Adicionar</h1>
            <p>{userId}</p>

            <form onSubmit={""}>
                <label htmlFor="select-corpo">Parte do Corpo</label>
                <select id="select-corpo">
                    <option value=""></option>
                </select>
            </form>
        </div>
        
    )
}

export default AddWorkout