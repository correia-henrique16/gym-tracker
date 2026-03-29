import Button from "../../../styles/components/Button"
import Input from "../../../styles/components/Input"

const EditGeneral = ({authUserName, setAuthUserName, authEmail, setAuthEmail, editarClick, erro, setEditPass}) => {
    return(
        <>
            <form className="flex flex-col items-center w-full gap-4"
             onSubmit={editarClick}>

                <Input label="UserName" type="text" id="username-input" required
                    value={authUserName} onChange={e => setAuthUserName(e.target.value)}
                />

                <Input label="Email" type="email" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                />
                
                <Button type="submit">
                    Edit
                </Button>

            </form>

            {erro && <p>{erro}</p>}

            <Button onClick={() => setEditPass(true)}>
                Change PassWord
            </Button>
        </>
    )
}

export default EditGeneral