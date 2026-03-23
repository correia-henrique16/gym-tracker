import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

const useAuth = () => {
    const [authUserName, setAuthUserName] = useState("")
    const [authEmail, setAuthEmail] = useState("")
    const [authPass, setAuthPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [erro, setErro] = useState(false)
    // const [sucesso, setSucesso] = useState(false)

    const navigate = useNavigate()

    const registarClick = async (e) => {
        e.preventDefault()

        if (authPass !== confirmPass) return setErro("As passwords não coincidem")

        setErro(false)

        const {data, error} = await supabase.auth.signUp({
            email: authEmail,
            password: authPass,
            options: {
                data: {
                    full_name: authUserName
                }
            }
            
        })

        if (!error && data.user) {
            await supabase.auth.signOut()
        }

        if (error) return setErro(error.message)

        navigate('/login')

        setAuthUserName("")        
        setAuthEmail("")
        setAuthPass("")
        setConfirmPass("")
        // if (data) return setSucesso(data.message)
    }

    const loginClick = async (e) => {
        e.preventDefault()

        setErro(false)

        const {data, error} = await supabase.auth.signInWithPassword({
            email: authEmail,
            password: authPass,
        })

        if (error) return setErro(error.message)

        if (data.user) {
            navigate('/')
        }
    }



    return {
        registarClick, loginClick,
        authUserName, setAuthUserName,
        authEmail, setAuthEmail,
        authPass, setAuthPass,
        confirmPass, setConfirmPass,   
        erro,
    }
}

export default useAuth