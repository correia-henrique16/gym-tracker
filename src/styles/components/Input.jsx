const Input = ({label, id, className = "", ...props}) => {
    return(
        <div className="w-3/5 flex justify-center items-center">
            {label && (
                <label htmlFor={id}
                 className="text-xl text-texto"
                >
                    {label}
                </label>
            )}

            <input {...props}
            id={id}
            className="rounded-2xl p-1.5 m-3 border-verde border-3 bg-texto focus:outline-0" />
        </div>
    )
}

export default Input