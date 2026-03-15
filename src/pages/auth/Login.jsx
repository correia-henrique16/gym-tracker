import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"

const Login = () => {

    const {loginClick, authEmail, setAuthEmail, authPass, setAuthPass,
        erro} = useAuth()
    

    return (
        <>
            <h2>Login page</h2>

            <form onSubmit={loginClick}>
                <label htmlFor="email-input">Email</label>
                <input type="email" placeholder="email@email.com" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                />

                <label htmlFor="pass-input">Password</label>
                <input type="password" id="pass-input" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />

                <button type="submit">Login</button>
                <Link to={'/register'}>Não tenho uma conta</Link>

                {erro && <p>{erro}</p>}
            </form>
        </>
        
    )
}

export default Login