import useStats from "../../../hooks/useStats"
import useDbContext from "../../../hooks/useDbContext" 


const StatsExercicios = ({exercicioMaisTreinado, streakDias, totalTreinos}) => {

    const {exercicioMaisPeso, exercicioMaisVolume} = useStats()

    const {exercicio, valor} = exercicioMaisVolume() || {}

    const {listaWorkouts} = useDbContext()

    const {total, nome} = exercicioMaisTreinado() ?? {}


    return(
        <section className="w-full max-w-4xl mx-auto p-4 mt-15">
            <h3 className="text-texto text-center text-2xl uppercase tracking-[0.3em] font-black mb-4">
                Stats
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 w-full my-8">
                <div className="flex-1 bg-verde-cinza/20 backdrop-blur-sm p-6 rounded-3xl border border-verde/10 shadow-sm">
                    <h4 className="text-[10px] uppercase tracking-widest text-verde/70 font-bold mb-3">
                        Streak de treino
                    </h4>

                    <div className="flex items-center justify-between mt-1">
                        <p className="text-4xl font-black text-texto">
                            {streakDias} <span className="text-2xl text-verde">dias</span>
                        </p>
                    </div>
                </div>

                <div className="flex-1 bg-verde-cinza/20 backdrop-blur-sm p-6 rounded-3xl border border-verde/10 shadow-sm">
                    <h4 className="text-[10px] uppercase tracking-widest text-verde/70 font-bold mb-3">
                        Total de exercicios realizados
                    </h4>

                    <div className="flex items-center justify-between mt-1">
                        <p className="text-4xl font-black text-texto">
                            {totalTreinos} <span className="text-2xl text-verde">exercicios</span>
                        </p>
                    </div>
                </div>
            </div>

            {listaWorkouts.length == 0 ? (
                <div className="bg-verde-cinza/10 p-8 rounded-3xl border border-dashed border-verde/10 text-center">
                    <p className="text-texto/40 italic text-sm">Ainda não tens treinos registados.</p>
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    
                    <div className="flex-1 bg-verde-cinza/20 backdrop-blur-sm p-6 rounded-3xl border border-verde/10 shadow-sm">
                        <h4 className="text-[10px] uppercase tracking-widest text-verde/70 font-bold mb-3">
                            Recorde de Peso
                        </h4>
                        <p className="text-texto font-semibold text-lg truncate">
                            {exercicioMaisPeso.exercicio?.nome_exercicio || "Exercício"}
                        </p>
                        <p className="text-4xl font-black text-texto mt-1">
                            {exercicioMaisPeso.peso}<span className="text-sm font-normal text-verde ml-1">Kg</span>
                        </p>
                    </div>

                    <div className="flex-1 bg-verde-cinza/20 backdrop-blur-sm p-6 rounded-3xl border border-verde/10 shadow-sm">
                        <h4 className="text-[10px] uppercase tracking-widest text-verde/70 font-bold mb-3">
                            Recorde de Volume
                        </h4>
                        
                        <p className="text-texto font-semibold text-lg truncate">
                            {exercicio.exercicio?.nome_exercicio || "Exercício"}
                        </p>

                        <div className="flex items-center justify-between mt-1">
                            <p className="text-4xl font-black text-texto">
                                {valor}<span className="text-sm font-normal text-verde ml-1">Kg <span className="text-[10px] opacity-50">Totais</span></span>
                            </p>

                            <div className="flex flex-col text-right">
                                <div className="flex items-baseline justify-end gap-1">
                                    <span className="text-[9px] uppercase text-verde/40 font-bold">Peso</span>
                                    <span className="text-sm font-bold text-texto/80">{exercicio.peso}kg</span>
                                </div>
                                <div className="flex items-baseline justify-end gap-1">
                                    <span className="text-[9px] uppercase text-verde/40 font-bold">Reps</span>
                                    <span className="text-sm font-bold text-texto/80">{exercicio.reps}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-verde-cinza/20 backdrop-blur-sm p-6 rounded-3xl border border-verde/10 shadow-sm">
                        <h4 className="text-[10px] uppercase tracking-widest text-verde/70 font-bold mb-3">
                            Exercicio mais treinado
                        </h4>
                        
                        <p className="text-texto font-semibold text-lg truncate">
                            {nome}
                        </p>

                        <div className="flex items-center justify-between mt-1">
                            <p className="text-4xl font-black text-texto">
                                {total} <span className="text-2xl uppercase text-verde">x</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            
            
        </section>
    )
}

export default StatsExercicios