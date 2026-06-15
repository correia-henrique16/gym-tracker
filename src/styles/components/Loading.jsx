import DivCentrada from "./DivCentrada"
import icon from "../../assets/barbell.png"

const Loading = () => {
    return(
        <DivCentrada>
            <img src={icon} alt="Loading..." className="animate-pulse" />
        </DivCentrada>
    )
}

export default Loading