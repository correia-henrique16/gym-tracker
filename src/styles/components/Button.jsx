const Button = ({children, className = "", ...props}) => {
    return(
        <button
            {...props}
            className="p-2 text-base md:text-lg rounded-2xl w-24 md:w-30 cursor-pointer bg-verde/40 text-texto border-verde
            border flex justify-center items-center hover:bg-verde/60 transition-all duration-500"
        >
            {children}
        </button>
    )
}

export default Button