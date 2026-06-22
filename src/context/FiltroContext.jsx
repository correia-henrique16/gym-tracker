import {createContext, useState } from "react";

export const FiltroContext = createContext(null)

const FiltroProvider = ({children}) => {
    const [filtroZona, setFiltroZona] = useState(1)
    const [filtroEspecifico, setFiltroEspecifico] = useState(0)

    return (
        <FiltroContext.Provider value={{filtroZona, setFiltroZona, filtroEspecifico, setFiltroEspecifico}}>

            {children}

        </FiltroContext.Provider>
    )
}

export default FiltroProvider