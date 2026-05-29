import { Link } from "react-router-dom"

const LinkBtn = ({children, className = "", ...props}) => {
    return(
        <Link
            {...props}
            className="p-2 text-lg rounded-2xl w-30 cursor-pointer bg-verde/20 text-texto border-verde
            border-1 flex justify-center items-center hover:bg-verde-cinza-hover"
        >
            {children}
        </Link>
    )
}

export default LinkBtn