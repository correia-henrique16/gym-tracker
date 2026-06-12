const InputAuth = ({label, id, className = "", ...props}) => {
    return(
        <div className="w-3/5 flex flex-col justify-center items-center">
            {label && (
                <label htmlFor={id}
                 className="text-xl text-texto"
                >
                    {label}
                </label>
            )}

            <input {...props}
            id={id}
            className="rounded-2xl p-1.5 w-70 m-1 border-verde border-2  bg-verde/20 focus:outline-0 text-texto inputs" />
        </div>
    )
}

export default InputAuth