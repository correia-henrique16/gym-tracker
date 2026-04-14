import ButtonVoltar from "../../styles/components/ButtonVoltar"
import LinkBtn from "../../styles/components/LinkBtn"
import Button from "../../styles/components/Button"
import DivCentrada from "../../styles/components/DivCentrada"
import useUserContext from "../../hooks/useUserContext"
import ConfirmModel from "../../styles/components/ConfirmModel"
import Stats from "./profile-components/Stats"


const Profile = () => {
    const {userInfo, loading, userLogOut, showPopUp, setShowPopUp} = useUserContext()

    if (loading) return <p>A verificar user...</p>

    const {userName, userEmail} = userInfo()


    return(
        <DivCentrada>

            <ButtonVoltar />

            <h1 className="m-5 text-texto text-5xl font-bold">Profile</h1>


            <div className="flex flex-col justify-center items-center m-8">
                <h2 className="m-3 text-verde text-3xl">{userName}</h2>
                <p className="m-3 text-verde text-1xl">{userEmail}</p>
            </div>


            <div className="flex gap-5">
                <LinkBtn to={`/profile/edit`}>Edit Profile</LinkBtn>

                <Button onClick={() => setShowPopUp(true)}>Log Out</Button>
            </div>

            <Stats/>
            

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={() => userLogOut()}>
                Dar Log Out?
            </ConfirmModel>
        </DivCentrada>
    )
}

export default Profile