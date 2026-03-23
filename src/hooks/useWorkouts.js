import { useState } from "react"

const useWorkouts = (uid) => {
    const [corpo, setCorpo] = useState([])
    const [loading, setLoading] = useState([])

    if (!uid) return

    // const buscarCorpo = async () => {
        
    // }
}

export default useWorkouts