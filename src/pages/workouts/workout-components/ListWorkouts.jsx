import deleteImg from '../../../assets/delete.png'
import editImg from '../../../assets/edit.png'
import { Link } from 'react-router-dom'
import ConfirmModel from '../../../styles/components/ConfirmModel'
import { useState } from 'react'

const CardWorkout = ({workout, setShowPopUp, setIdSelecionado}) => {
    const [showOverlayWkt, setShowOverlayWkt] = useState(false)

    const id = workout.id
    const peso = `${workout.peso}kg`
    const reps = `${workout.reps} Reps`
    const dataFormatada = new Date(workout.data).toLocaleDateString('pt-PT')
    const sitio = workout.sitio?.nome_sitio

    return (
        <li key={id} className="relative group flex justify-between items-center w-full max-w-4xl h-20 bg-verde-cinza/40 backdrop-blur-sm border-2 border-verde/30 hover:border-verde rounded-full px-6 transition-all duration-300 shadow-sm list-none mb-4"
        onMouseLeave={() => setShowOverlayWkt(false)}
        onClick={() => setShowOverlayWkt(!showOverlayWkt)}>
            
            <div className="w-1/3 text-left font-semibold text-texto text-base tracking-tight">
                {dataFormatada}
            </div>

            <div className="w-1/3 flex flex-col justify-around items-center h-full">
                <span className="font-bold text-texto text-lg">{peso}</span>
                <span className="text-verde text-base font-bold">{reps}</span>
            </div>
            
            <div className="w-1/3 text-right text-verde font-medium text-base tracking-wider">
                {sitio}
            </div>

            <div className={`absolute inset-0 flex justify-around px-20 items-center bg-verde-cinza/90 backdrop-blur-sm rounded-full transition-opacity duration-300
            ${showOverlayWkt 
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'}`}>
                
                <Link to={`/workouts/${id}/editar`} className='hover:scale-110 transition-transform'
                onClick={e => e.stopPropagation()}>
                    <img src={editImg} alt="Edit" className='h-12 w-auto' />
                </Link>

                <button 
                    onClick={(e) => {e.stopPropagation(); setShowPopUp(true); setIdSelecionado(id)}}
                    className='hover:scale-110 transition-transform cursor-pointer'
                >
                    <img src={deleteImg} alt="Delete" className='h-12 w-auto'/>
                </button>
                
            </div>
        </li>
    )
}

const ListWorkouts = ({listaWktExerc, handleDelete, showPopUp, setShowPopUp, idSelecionado, setIdSelecionado}) => {

    return(
        <ul className="w-full flex flex-col items-center">
            {listaWktExerc.map((workout) => 
                <CardWorkout 
                    key={workout.id} 
                    workout={workout} 
                    setShowPopUp={setShowPopUp} 
                    setIdSelecionado={setIdSelecionado} 
                />
            )}

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={(e) => handleDelete(e, idSelecionado)} >
                Confirm Delete?
            </ConfirmModel>
        </ul>
    )
}

export default ListWorkouts