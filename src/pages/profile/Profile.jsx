import ButtonVoltar from "../../styles/components/ButtonVoltar"
import LinkBtn from "../../styles/components/LinkBtn"
import Button from "../../styles/components/Button"
import DivCentrada from "../../styles/components/DivCentrada"
import useUserContext from "../../hooks/useUserContext"
import ConfirmModel from "../../styles/components/ConfirmModel"
import useStats from "../../hooks/useStats"
import useDbContext from "../../hooks/useDbContext"


const Profile = () => {
    const {userInfo, loading, userLogOut, showPopUp, setShowPopUp} = useUserContext()

    if (loading) return <p>A verificar user...</p>

    const {userName, userEmail, userId} = userInfo()

    const {exercicioMaisPeso, exercicioMaisVolume} = useStats()

    const {exercicio, valor} = exercicioMaisVolume() || {}

    const {listaWorkouts} = useDbContext()


    return(
        <DivCentrada>

            <ButtonVoltar />

            <h1 className="m-5 text-texto text-5xl font-bold">Profile</h1>


            <div className="flex flex-col justify-center items-center m-8">
                <h2 className="m-3 text-verde text-3xl">{userName}</h2>
                <p className="m-3 text-verde text-1xl">{userEmail}</p>
            </div>


            <div className="flex gap-5">
                <LinkBtn to={`/profile/edit`}>Edit Profile</LinkBtn>

                <Button onClick={() => setShowPopUp(true)}>Log Out</Button>
            </div>

            <section className="w-full max-w-4xl mx-auto p-4 mt-10">
                <h3 className="text-texto text-center text-2xl uppercase tracking-[0.3em] font-black mb-4">
                    Stats
                </h3>

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
                            <p className="text-4xl font-black text-texto mt-1">
                                {valor}<span className="text-sm font-normal text-verde ml-1">Kg <span className="text-[10px] opacity-50">Totais</span></span>
                            </p>
                        </div>

                    </div>
                )}

                
                
            </section>
            

            <ConfirmModel isOpen={showPopUp} onClose={() => setShowPopUp(false)} onConfirm={() => userLogOut()}>
                Dar Log Out?
            </ConfirmModel>
        </DivCentrada>
    )
}

export default Profile