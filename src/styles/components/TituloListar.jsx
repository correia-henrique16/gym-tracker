const TituloListar = ({children, className=""}) => {
    return(
        <h1
            className="text-3xl font-bold text-texto sticky top-0 bg-fundo w-full text-center box-border py-4 px-15 z-3"
        >
            {children}
        </h1>
    )
}

export default TituloListar