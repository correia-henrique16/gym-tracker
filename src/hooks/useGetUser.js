import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../lib/supabase"

const useGetUser = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            const {data: {user}, error} = await supabase.auth.getUser()

            if (error || !user) {
                await supabase.auth.signOut()
                navigate('/login')
                setLoading(false)
            } else{
                setUser(user)
                setLoading(false)
            }
        }

        getUser()
    }, [navigate])

    const userInfo = () => {
        const userName = user.user_metadata.full_name
        const userEmail = user.email
        const userId = user.id

        return {
            userName, userEmail, userId
        }
    }

    return {
        user, loading, userInfo
    }
}

export default useGetUser