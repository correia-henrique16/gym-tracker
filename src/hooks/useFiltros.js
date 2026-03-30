import { useState } from "react"

const useFiltros = () => {
    const [filtroZona, setFiltroZona] = useState(1)
    const [filtroEspecifico, setFiltroEspecifico] = useState(0)

    const [sitioEscolhido, setSitioEscolhido] = useState(1)



    return{
        filtroZona, setFiltroZona,
        filtroEspecifico, setFiltroEspecifico,
        sitioEscolhido, setSitioEscolhido
    }
}

export default useFiltros