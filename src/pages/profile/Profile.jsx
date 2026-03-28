import ButtonVoltar from "../../styles/components/ButtonVoltar"
import LinkBtn from "../../styles/components/LinkBtn"
import Button from "../../styles/components/Button"
import DivCentrada from "../../styles/components/DivCentrada"
import useGetUser from "../../hooks/useGetUser"
import ConfirmModel from "../../styles/components/ConfirmModel"


const Profile = () => {
    const {userInfo, loading, userLogOut, showPopUp, setShowPopUp} = useGetUser()

    if (loading) return <p>A verificar user...</p>

    const {userName, userEmail, userId} = userInfo()


    return(
        <DivCentrada>

            <ButtonVoltar />

            <h1>Profile</h1>

            <h2>{userName}</h2>
            <p>{userEmail}</p>

            <LinkBtn to={`/profile/${userId}/edit`}>Edit Profile</LinkBtn>

            <Button onClick={() => setShowPopUp(true)}>Log Out</Button>

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={() => userLogOut()}>
                Dar Log Out?
            </ConfirmModel>
        </DivCentrada>
    )
}

export default Profile