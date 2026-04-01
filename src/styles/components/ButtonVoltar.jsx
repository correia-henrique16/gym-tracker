import { useNavigate } from "react-router-dom"
import backArrow from '../../assets/back-arrow.png'

const ButtonVoltar = () => {

    const navigate = useNavigate()
    
    return(
        <button onClick={() => {navigate(-1)}}
        className="fixed top-5 left-5 text-verde cursor-pointer z-4 hover:opacity-50">
            <img src={backArrow} alt="Voltar" className="w-13"/>
        </button>
    )
}

export default ButtonVoltar