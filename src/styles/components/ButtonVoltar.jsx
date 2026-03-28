import { useNavigate } from "react-router-dom"

const ButtonVoltar = () => {

    const navigate = useNavigate()
    
    return(
        <button onClick={() => {navigate(-1)}}
        className="fixed top-5 left-5 text-verde cursor-pointer z-2">
                Voltar
        </button>
    )
}

export default ButtonVoltar