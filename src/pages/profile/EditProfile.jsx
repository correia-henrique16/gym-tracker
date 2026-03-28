import { useParams } from "react-router-dom"

const EditProfile = () => {

    const {uid} = useParams()
    return(
        <>
            <h1>Edit</h1>
            <p>{uid}</p>
        </>
    )
}

export default EditProfile