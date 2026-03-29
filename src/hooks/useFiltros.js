import { useState } from "react"

const useFiltros = () => {
    const [filtroZona, setFiltroZona] = useState(1)
    const [filtroEspecifico, setFiltroEspecifico] = useState(0)



    return{
        filtroZona, setFiltroZona,
        filtroEspecifico, setFiltroEspecifico
    }
}

export default useFiltros