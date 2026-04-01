import Button from "../../../styles/components/Button"
import InputAuth from "../../../styles/components/InputAuth"

const EditGeneral = ({authUserName, setAuthUserName, authEmail, setAuthEmail, editarClick, erro, setEditPass}) => {
    return(
        <>
            <form className="flex flex-col items-center w-full gap-4"
             onSubmit={editarClick}>

                <InputAuth label="UserName" type="text" id="username-input" required
                    value={authUserName} onChange={e => setAuthUserName(e.target.value)}
                />

                <InputAuth label="Email" type="email" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                />
                
                <div className="flex gap-5">
                    <Button type="submit">
                        Edit
                    </Button>

                    <Button onClick={() => setEditPass(true)}>
                        Change PassWord
                    </Button>

                </div>
                

            </form>

            {erro && <p>{erro}</p>}

            
        </>
    )
}

export default EditGeneral