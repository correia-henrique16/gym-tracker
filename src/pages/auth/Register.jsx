import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const {
        registarClick, authEmail, setAuthEmail, authPass, setAuthPass, confirmPass,
        setConfirmPass, erro
    } = useAuth()
    
    
    const navigate = useNavigate()

    return (
        <>
        <h2>Register page</h2>

        <button onClick={() => {navigate(-1)}}>Voltar</button>

        <form onSubmit={registarClick}>
            <label htmlFor="email-input">Email</label>
            <input type="email" placeholder="email@email.com" id="email-input" required
                value={authEmail} onChange={e => setAuthEmail(e.target.value)}
            />

            <label htmlFor="pass-input">Password</label>
            <input type="password" id="pass-input" minLength="6" required
                value={authPass} onChange={e => setAuthPass(e.target.value)}
            />

            <label htmlFor="confirm-pass-input">Confirmar Password</label>
            <input type="password" id="confirm-pass-input" required
                value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
            />

            <button type="submit">Registar</button>

            {erro && <p>{erro}</p>}
        </form>
        </>
        
    )

}

export default Register