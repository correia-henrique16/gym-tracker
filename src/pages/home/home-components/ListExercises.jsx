import { Link } from "react-router-dom"

const ListExercises = ({exercicios, filtroZona, filtroEspecifico, chooseImg}) => {

    const exerciciosFiltrados = exercicios.filter((exerc) =>{
        const zonaFiltro = exerc.especifico?.corpo?.id == filtroZona
        const especificoFiltro =  filtroEspecifico == 0 || (exerc.especifico?.id == filtroEspecifico)

        return zonaFiltro && especificoFiltro
    } )


    return(
        <ul className="w-screen flex flex-col items-center p-5 gap-6">
            {exerciciosFiltrados.map(exerc => {
                const id = exerc.id
                const nome = exerc.nome_exercicio
                const especificoId = exerc.especifico?.id
                const especificoNome = exerc.especifico?.especifico_nome
                const zonaId = exerc.especifico?.corpo?.id

                return(
                    <li key={id} className="relative group w-full h-18 border-2 border-verde rounded-2xl">
                        <div className="w-full h-full p-3 bg-verde-cinza text-center rounded-2xl flex justify-center items-center gap-7">
                            <p className="w-sm border border-amber-300">{nome}</p>
                            <img src={chooseImg(zonaId)} alt={zonaId} />
                            <p className="w-sm border border-amber-300">{especificoNome}</p>
                        </div>

                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-verde-cinza/80 rounded-2xl
                        pointer-events-none group-hover:pointer-events-auto">
                            <Link to={`/workouts/${id}`} className="h-full justify-center flex items-center text-texto font-bold">
                                Ver exercicio
                            </Link>
                        </div>
                        
                    </li>
                )
                
            })}
        </ul>
    )
}

export default ListExercises