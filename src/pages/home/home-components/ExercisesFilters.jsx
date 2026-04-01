const ExercisesFilters = ({zonasCorpo, filtroZona,  setFiltroZona, especificos, filtroEspecifico, setFiltroEspecifico}) => {

    const especificosFiltrados = especificos.filter((esp) => esp.corpo?.id == filtroZona)

    return (
        <section className="w-full max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-6 p-6 bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-[2rem] shadow-2xl">
    
            <div className="flex flex-col flex-1 gap-2">
                <label 
                    htmlFor="exerc-select" 
                    className="text-xs uppercase tracking-wider font-black text-verde/60 ml-2"
                >
                    Músculo Principal
                </label>
                
                <div className="relative">
                    <select 
                        id="exerc-select" 
                        value={filtroZona} 
                        onChange={e => {setFiltroZona(e.target.value); setFiltroEspecifico(0)}}
                        className="w-full h-14 pl-5 pr-10 bg-verde-cinza/20 border-2 border-verde/20 hover:border-verde/50 text-texto rounded-2xl appearance-none cursor-pointer focus:outline-none focus:border-verde transition-all duration-300"
                    >
                        {zonasCorpo.map((zona) => (
                            <option key={zona.id} value={zona.id} className="bg-zinc-900 text-texto">
                                {zona.nome_zona}
                            </option>
                        ))}
                    </select>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-verde/50">
                        ▼
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1 gap-2">
                <label 
                    htmlFor="esp-select" 
                    className="text-xs uppercase tracking-wider font-black text-verde/60 ml-2"
                >
                    Músculo Específico
                </label>
                
                <div className="relative">
                    <select 
                        id="esp-select" 
                        value={filtroEspecifico} 
                        onChange={e => setFiltroEspecifico(Number(e.target.value))}
                        className="w-full h-14 pl-5 pr-10 bg-verde-cinza/20 border-2 border-verde/20 hover:border-verde/50 text-texto rounded-2xl appearance-none cursor-pointer focus:outline-none focus:border-verde transition-all duration-300"
                    >
                        <option key="0" value="0" className="bg-zinc-900 text-texto">Nenhum</option>
                        {especificosFiltrados.map((esp) => (
                            <option key={esp.id} value={esp.id} className="bg-zinc-900 text-texto">
                                {esp.especifico_nome}
                            </option>
                        ))}
                    </select>
                    
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-verde/50">
                        ▼
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ExercisesFilters