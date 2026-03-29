import Button from "../../../styles/components/Button"
import Input from "../../../styles/components/Input"

const EditPassword = ({authPass, setAuthPass, confirmPass, setConfirmPass, erro, editarPassClick, setEditPass}) => {
    return (
        <>
            <form className="flex flex-col items-center w-full gap-4"
             onSubmit={editarPassClick}>

                <Input label="New Password" type="password" id="pass-input" minLength="6" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />

                <Input label="Confirm Password" type="password" id="confirm-input" required
                    value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
                />
                
                <Button type="submit">
                    Change Password
                </Button>

            </form>

            {erro && <p>{erro}</p>}

            <Button onClick={() => setEditPass(false)}>
                Edit Profile
            </Button>
        </>
    )
}

export default EditPassword