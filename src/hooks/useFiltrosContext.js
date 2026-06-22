import { useContext } from "react"
import { FiltroContext } from "../context/FiltroContext"

const useFiltrosContext = () => {
    const context = useContext(FiltroContext)

    if (!context) {
        throw new Error('Fora do contexto filtros')
    }

    return context
}

export default useFiltrosContext