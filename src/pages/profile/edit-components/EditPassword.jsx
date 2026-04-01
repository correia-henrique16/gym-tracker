import Button from "../../../styles/components/Button"
import InputAuth from "../../../styles/components/InputAuth"

const EditPassword = ({authPass, setAuthPass, confirmPass, setConfirmPass, erro, editarPassClick, setEditPass}) => {
    return (
        <>
            <form className="flex flex-col items-center w-full gap-4"
             onSubmit={editarPassClick}>

                <InputAuth label="New Password" type="password" id="pass-input" minLength="6" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />

                <InputAuth label="Confirm Password" type="password" id="confirm-input" required
                    value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
                />

                <div className="flex gap-5">
                    <Button type="submit">
                        Change Password
                    </Button>

                    <Button onClick={() => setEditPass(false)}>
                        Edit Profile
                    </Button>
                </div>
                
                

            </form>

            {erro && <p>{erro}</p>}

            
        </>
    )
}

export default EditPassword