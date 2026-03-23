const Button = ({children, className = "", ...props}) => {
    return(
        <button
            {...props}
            className="p-2 text-lg rounded-2xl w-30 cursor-pointer bg-verde-cinza text-texto border-0
            flex justify-center items-center hover:bg-verde-cinza-hover"
        >
            {children}
        </button>
    )
}

export default Button