import deleteImg from '../../../assets/delete.png'
import editImg from '../../../assets/edit.png'
import { Link } from 'react-router-dom'

const ListWorkouts = ({listaWorkouts}) => {


    return(
        listaWorkouts.map((workout) => {
                    
            const id = workout.id
            // const nome_exercicio = workout.exercicio?.nome_exercicio
            const peso = `${workout.peso}kg`
            const reps = `${workout.reps} Reps`
            const dataFormatada = new Date(workout.data).toLocaleDateString('pt-PT')
            const especifico_nome = workout.exercicio?.especifico?.especifico_nome
            const sitio = workout.sitio?.nome_sitio
            // const nome_zona = workout.exercicio?.especifico?.corpo?.nome_zona
            
            return (
                <ul key={id} className="relative group flex justify-between items-center w-11/12 h-20 bg-verde-cinza p-2 rounded-full text-center">
                    <li className="w-1/3">{dataFormatada}</li>

                    <div className="flex flex-col justify-between h-full items-center w-1/3">
                        <li>{peso}</li>
                        <li>{reps}</li>
                    </div>
                    
                    <li className="w-1/3">{sitio}</li>

                    <div className="absolute inset-0 flex justify-around px-10 items-center opacity-0 group-hover:opacity-100 bg-verde-cinza/80 rounded-full
                    pointer-events-none group-hover:pointer-events-auto">
                        <Link className='hover:opacity-50 cursor-pointer'>
                            <img src={editImg} alt="Edit" className='max-h-full w-14' />
                        </Link>


                        <button className='hover:opacity-50 cursor-pointer'>
                            <img src={deleteImg} alt="Delete" className='max-h-full w-14'/>
                        </button>
                        
                    </div>
                </ul>
            )}
        )
    )

    

}

export default ListWorkouts