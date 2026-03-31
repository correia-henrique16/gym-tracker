import useAuth from "../../hooks/useAuth"
import ButtonVoltar from "../../styles/components/ButtonVoltar"
import Button from "../../styles/components/Button"
import InputAuth from "../../styles/components/InputAuth"
import DivCentrada from "../../styles/components/DivCentrada"

const Register = () => {

    const {
        registarClick, authUserName, setAuthUserName , authEmail, setAuthEmail, authPass, setAuthPass, confirmPass,
        setConfirmPass, erro
    } = useAuth()
    

    return (
        <DivCentrada className="flex flex-col items-center justify-center w-screen h-screen">

            <h2 className="m-10 text-5xl font-bold text-texto text-center">
                Register page
            </h2>

            <ButtonVoltar/>

            <form className="flex flex-col items-center w-full gap-4"
            onSubmit={registarClick}>

                <InputAuth label="User Name" type="text" placeholder="User Name" id="name-input" maxLength="20" required
                    value={authUserName} onChange={e => setAuthUserName(e.target.value)} 
                />

                <InputAuth label="Email" type="email" placeholder="email@email.com" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                    
                />

                <InputAuth label="Password" type="password" id="pass-input" minLength="6" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />

                <InputAuth label="Confirmar Password" type="password" id="confirm-pass-input" required
                    value={confirmPass} onChange={e => setConfirmPass(e.target.value)}            
                />
                
                <Button type="submit">
                    Registar
                </Button>

                {erro && <p>{erro}</p>}
            </form>
        </DivCentrada>
        
    )

}

export default Register