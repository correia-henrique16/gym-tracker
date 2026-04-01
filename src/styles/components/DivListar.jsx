const DivListar = ({children, className=""}) => {
    return(
        <div
            className="flex flex-col items-center gap-3 p-4 pt-10 relative"
        >
            {children}
        </div>
    )

}

export default DivListar