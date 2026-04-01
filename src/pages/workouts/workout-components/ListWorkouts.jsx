import deleteImg from '../../../assets/delete.png'
import editImg from '../../../assets/edit.png'
import { Link } from 'react-router-dom'
import ConfirmModel from '../../../styles/components/ConfirmModel'

const ListWorkouts = ({listaWktExerc, handleDelete, showPopUp, setShowPopUp, idSelecionado, setIdSelecionado}) => {


    return(
        <>
            {listaWktExerc.map((workout) => {
                        
                const id = workout.id
                // const nome_exercicio = workout.exercicio?.nome_exercicio
                const peso = `${workout.peso}kg`
                const reps = `${workout.reps} Reps`
                const dataFormatada = new Date(workout.data).toLocaleDateString('pt-PT')
                const especifico_nome = workout.exercicio?.especifico?.especifico_nome
                const sitio = workout.sitio?.nome_sitio
                // const nome_zona = workout.exercicio?.especifico?.corpo?.nome_zona
                
                return (
                    <ul key={id} className="relative group flex justify-between items-center w-full max-w-4xl h-20 bg-verde-cinza/40 backdrop-blur-sm border-2 border-verde/30 hover:border-verde rounded-full px-6 transition-all duration-300 shadow-sm list-none mb-4">
                        
                        <li className="w-1/3 text-left font-semibold text-texto text-base tracking-tight">
                            {dataFormatada}
                        </li>

                        <div className="w-1/3 flex flex-col justify-around items-center h-full">
                            <li className="font-bold text-texto text-lg">{peso}</li>
                            <li className="text-verde text-base font-bold">{reps}</li>
                        </div>
                        
                        <li className="w-1/3 text-right text-verde font-medium text-base tracking-wider">
                            {sitio}
                        </li>




                        <div className="absolute inset-0 flex justify-around px-20 items-center opacity-0 group-hover:opacity-100 bg-verde-cinza/90 backdrop-blur-sm rounded-full transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                            
                            <Link to={`/workouts/${id}/editar`} className='hover:scale-110 transition-transform'>
                                <img src={editImg} alt="Edit" className='h-12 w-auto' />
                            </Link>

                            <button 
                                onClick={() => {setShowPopUp(true); setIdSelecionado(id)}}
                                className='hover:scale-110 transition-transform cursor-pointer'
                            >
                                <img src={deleteImg} alt="Delete" className='h-12 w-auto'/>
                            </button>
                            
                        </div>
                    </ul>
                )}
            )}

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={(e) => handleDelete(e, idSelecionado)} >
                Confirm Delete?
            </ConfirmModel>
        </>
    )

    

}

export default ListWorkouts