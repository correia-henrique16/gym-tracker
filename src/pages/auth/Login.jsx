import { useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import supabase from "../../lib/supabase"
import Button from "../../styles/components/Button"
import Input from "../../styles/components/Input"
import DivCentrada from "../../styles/components/DivCentrada"
import imgInicial from "../../assets/barbell.png"

const Login = () => {

    const {loginClick, authEmail, setAuthEmail, authPass, setAuthPass,
        erro
    } = useAuth()

    const navigate = useNavigate()
        
    useEffect(() => {
        const checkUser = async () => {
            const {data: {session}} = await supabase.auth.getSession()

            if (session) {
                navigate('/')
            }
        }

        checkUser()
    }, [])

    return (
        <DivCentrada className="flex flex-col items-center justify-center w-screen h-screen">
            <img src={imgInicial} alt="Barbell" className="w-13"/>

            <h2 className="m-10 text-5xl font-bold text-texto text-center">
                Login page
            </h2>

            <form className="flex flex-col items-center w-full gap-4"
             onSubmit={loginClick}>

                <Input label="Email" type="email" placeholder="email@email.com" id="email-input" required
                    value={authEmail} onChange={e => setAuthEmail(e.target.value)}
                />

                <Input label="Password" type="password" id="pass-input" required
                    value={authPass} onChange={e => setAuthPass(e.target.value)}
                />
                
                <Button type="submit">
                    Login
                </Button>
                
                <Link to={'/register'}
                className="p-1 cursor-pointer text-verde">
                    Não tenho uma conta
                </Link>

                {erro && <p>{erro}</p>}
            </form>
        </DivCentrada>
        
    )
}

export default Login