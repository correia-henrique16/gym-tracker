import DivCentrada from "../../styles/components/DivCentrada"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import useUserContext from "../../hooks/useUserContext"
import useAuth from "../../hooks/useAuth"
import { useEffect, useState } from "react"
import EditGeneral from "./edit-components/EditGeneral"
import EditPassword from "./edit-components/EditPassword"

const EditProfile = () => {

    const [editPass, setEditPass] = useState(false)

    const {userInfo, userLoading} = useUserContext()

    const {userName, userEmail} = userInfo()

    const {editarClick, authUserName, setAuthUserName, authEmail, setAuthEmail, erro, authPass, setAuthPass,
    confirmPass, setConfirmPass, editarPassClick} = useAuth()


    useEffect(() => {
        if (!userLoading) {
            setAuthUserName(userName)
            setAuthEmail(userEmail)
        }
    }, [userLoading])



    if (userLoading) return <p>A carregar...</p>

    
    return(
        <DivCentrada>
            <ButtonVoltar/>

            <h1 className="m-5 text-texto text-5xl font-bold">Edit Profile</h1>

            {editPass == false ? (
                <EditGeneral authUserName={authUserName} setAuthUserName={setAuthUserName} authEmail={authEmail} setAuthEmail={authEmail}
                    editarClick={editarClick} erro={erro} setEditPass={setEditPass}/>
            ) : (
                <EditPassword authPass={authPass} setAuthPass={setAuthPass} confirmPass={confirmPass} setConfirmPass={setConfirmPass} erro={erro}
                    editarPassClick={editarPassClick} setEditPass={setEditPass} />
            )}

            
        </DivCentrada>

    )
}

export default EditProfile