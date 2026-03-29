import useGetUser from "../../hooks/useGetUser"
import useWorkouts from "../../hooks/useWorkouts"

const AddWorkout = () => {

    const {userInfo, userLoading} = useGetUser()

    const {userId} = userInfo()

    const {} = useWorkouts(userId)



    if (userLoading) return <p>A carregar...</p>

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