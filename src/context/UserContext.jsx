import { createContext, useState, useEffect  } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../lib/supabase"

export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userLoading, setLoading] = useState(true)
    const [showPopUp, setShowPopUp] = useState(false)
    const navigate = useNavigate()



    useEffect(() => {
        const getUser = async () => {
            const {data: {user}, error} = await supabase.auth.getUser()

            if (error || !user) {
                await supabase.auth.signOut()
                navigate('/login')
            } else{
                setUser(user)
            }
            
            setLoading(false)
        }

        getUser()

        const {data: authListener} = supabase.auth.onAuthStateChange((event, session) => {
            if (event == 'SIGNED_OUT') {
                setUser(null)
                navigate('/login')
            } else if (event == 'SIGNED_IN') {
                setUser(session.user)
            }

        })


        return () => {
            if (authListener) {
                authListener.subscription.unsubscribe()
            }
        }
        
    }, [])



    const userInfo = () => {
        if (!user) return { userName: "", userEmail: "", userId: null };

        const userName = user.user_metadata.full_name
        const userEmail = user.email
        const userId = user.id

        return {
            userName, userEmail, userId
        }
    }


    const userLogOut = async() => {
        await supabase.auth.signOut()
        navigate('/login')
    }






    return(
        <UserContext.Provider value={{user, userLoading, userInfo, userLogOut, showPopUp, setShowPopUp}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider