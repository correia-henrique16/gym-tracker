import { Link } from "react-router-dom"
import { useState } from "react"

const CardExercise = ({exerc, chooseImg}) => {
    const [showOverlay, setShowOverlay] = useState(false)

    const id = exerc.id
    const nome = exerc.nome_exercicio
    const especificoId = exerc.especifico?.id
    const especificoNome = exerc.especifico?.especifico_nome
    const zonaId = exerc.especifico?.corpo?.id

    return(
        <li key={id} className="relative group w-full h-20"
        onMouseLeave={() => setShowOverlay(false)}
        onClick={() => setShowOverlay(!showOverlay)}>
            <div className="w-full h-full p-3 bg-verde-cinza text-center backdrop-blur-sm rounded-2xl flex justify-between items-center 
            border-2 border-verde/30 group-hover:border-verde transition-all duration-300 shadow-sm">
                <p className="w-sm font-semibold text-texto text-lg tracking-tight">{nome}</p>
                <img src={chooseImg(zonaId)} alt={zonaId} className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                <p className="w-sm  text-verde uppercase ">{especificoNome}</p>
            </div>

            <div className={`absolute inset-0 flex justify-center items-center bg-verde-cinza/80 rounded-2xl
            transition-opacity duration-300
            ${showOverlay 
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'}`}>

                <Link to={`/workouts/${id}`} className="h-full justify-center flex items-center text-texto font-bold uppercase hover:text-texto/40 transition-colors"
                onClick={e => e.stopPropagation()}>
                    Ver exercicio
                </Link>
            </div>
            
        </li>
    )
}

const ListExercises = ({exercicios, filtroZona, filtroEspecifico, chooseImg}) => {
    

    const exerciciosFiltrados = exercicios.filter((exerc) =>{
        const zonaFiltro = exerc.especifico?.corpo?.id == filtroZona
        const especificoFiltro =  filtroEspecifico == 0 || (exerc.especifico?.id == filtroEspecifico)

        return zonaFiltro && especificoFiltro
    } )


    return(
        <ul className="w-full max-w-4xl flex flex-col items-center p-5 gap-6">
            {exerciciosFiltrados.map(exerc => 
                <CardExercise key={exerc.id} exerc={exerc} chooseImg={chooseImg} /> 
            )}
        </ul>
    )
}

export default ListExercises