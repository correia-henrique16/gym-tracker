import { useContext } from "react"
import { DbContext } from "../context/DbContext"

const useDbContext = () => {
    const context = useContext(DbContext)
    
        if(!context) {
            throw new Error('Fora do contexto workout')
        }
    
        return context
}

export default useDbContext