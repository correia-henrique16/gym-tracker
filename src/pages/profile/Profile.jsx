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

                <h1 className="m-5 text-texto text-5xl font-bold">Profile</h1>


            <div className="flex flex-col justify-center items-center m-8">
                <h2 className="m-3 text-verde text-3xl">{userName}</h2>
                <p className="m-3 text-verde text-1xl">{userEmail}</p>
            </div>



            <LinkBtn to={`/profile/edit`}>Edit Profile</LinkBtn>

            <Button onClick={() => setShowPopUp(true)}>Log Out</Button>

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={() => userLogOut()}>
                Dar Log Out?
            </ConfirmModel>
        </DivCentrada>
    )
}

export default Profile