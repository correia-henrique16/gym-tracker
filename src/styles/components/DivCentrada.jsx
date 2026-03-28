const DivCentrada = ({children, className = ""}) => {
    return(
        <div
            className="flex flex-col items-center justify-center w-screen min-h-screen gap-3"
        >
            {children}
        </div>
    )
}

export default DivCentrada