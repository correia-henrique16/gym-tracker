const ExercisesFilters = ({zonasCorpo, filtroZona,  setFiltroZona, especificos, filtroEspecifico, setFiltroEspecifico}) => {

    const especificosFiltrados = especificos.filter((esp) => esp.corpo?.id == filtroZona)

    return (
        <section>
            <div>
                <label htmlFor="exerc-select">Musculo Principal</label>
                <select id="exerc-select" value={filtroZona} onChange={e => {setFiltroZona(e.target.value); setFiltroEspecifico(0)}}>
                    {
                        zonasCorpo.map((zona) => {
                            return (
                                <option key={zona.id} value={zona.id}>{zona.nome_zona}</option>
                            )
                        })
                    }
                </select>
            </div>
            

            
            <div>
                <label htmlFor="esp-select">Musculo Especifico</label>
                <select id="esp-select" value={filtroEspecifico} onChange={e => {setFiltroEspecifico(Number(e.target.value))}}>
                    <option key="0" value="0" >Nenhum</option>
                    {
                        especificosFiltrados.map((esp) => {
                            return (
                                <option key={esp.id} value={esp.id}>{esp.especifico_nome}</option>
                            )
                        })
                    }
                </select>
            </div>
        </section>
    )
}

export default ExercisesFilters