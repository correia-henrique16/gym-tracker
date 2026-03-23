import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import Button from "../../styles/components/Button"
import Input from "../../styles/components/Input"
import DivCentrada from "../../styles/components/DivCentrada"

const Register = () => {

    const {
        registarClick, authUserName, setAuthUserName , authEmail, setAuthEmail, authPass, setAuthPass, confirmPass,
        setConfirmPass, erro
    } = useAuth()
    
    
    const navigate = useNavigate()

    return (
        <DivCentrada className="flex flex-col items-center justify-center w-screen h-screen">
            <h2 className="m-10 text-6xl font-bold text-texto">
                Register page
            </h2>

            <button onClick={() => {navigate(-1)}}
            className="fixed top-5 left-5 text-verde cursor-pointer z-2">
                Voltar
            </button>

            <form className="flex flex-col items-center w-full gap-4"
            onSubmit={registarClick}>

                <Input label="User Name" type="text" placeholder="User Name" id="name-input" maxLength="20" required
                    value={authUserName} onChange={e => setAuthUserName(e.target.value)} 
                />

                <Input label="Email" type="email" placeholder="email@email.com" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                    
                />

                <Input label="Password" type="password" id="pass-input" minLength="6" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />

                <Input label="Confirmar Password" type="password" id="confirm-pass-input" required
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