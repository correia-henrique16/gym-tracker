const ConfirmModel = ({children, isOpen, onClose, onConfirm}) => {
    if (!isOpen) return null

    return (
        <div className="absolute w-screen h-screen z-10 flex justify-center items-center bg-black/70" onClick={onClose}>
            <div className="relative flex flex-col items-center justify-around w-1/2 h-1/4 bg-amber-50 p-2 rounded-3xl">
                <p className="cursor-default text-center">{children}</p>
                <div className="w-full flex flex-row justify-around items-center">
                    <button onClick={onConfirm}
                    className="bg-verde text-white rounded-lg hover:bg-verde-hover cursor-pointer box-border w-1/4 p-3">
                        Yes
                    </button>
                    <button onClick={onClose}
                    className="bg-verde-cinza text-white rounded-lg hover:bg-verde-cinza-hover cursor-pointer box-border w-1/4 p-3">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModel