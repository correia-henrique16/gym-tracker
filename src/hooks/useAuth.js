import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

const useAuth = () => {
    const [authUserName, setAuthUserName] = useState("")
    const [authEmail, setAuthEmail] = useState("")
    const [authPass, setAuthPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [erro, setErro] = useState(false)

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

        setAuthEmail("")
        setAuthPass("")
    }

    const editarClick = async (e) => {
        e.preventDefault()

        const {data, error} = await supabase.auth.updateUser({
            data: {full_name: authUserName},
            email: authEmail
        })

        if (error) return setErro(error.message)
        
        if (data) {
            navigate(-1)
        }

        setAuthUserName("")        
        setAuthEmail("")
    }

    const editarPassClick = async (e) => {
        e.preventDefault()

        if (authPass !== confirmPass) return setErro("As passwords não coincidem")

        setErro(false)

        const {data, error} = await supabase.auth.updateUser({
            password: authPass
        })

        if (error) return setErro(error.message)

        if (data) {
            navigate(-1)
        } 

        setAuthPass("")
        setConfirmPass("")
    }

    return {
        registarClick, loginClick, editarClick, editarPassClick,
        authUserName, setAuthUserName,
        authEmail, setAuthEmail,
        authPass, setAuthPass,
        confirmPass, setConfirmPass,   
        erro,
    }
}

export default useAuth