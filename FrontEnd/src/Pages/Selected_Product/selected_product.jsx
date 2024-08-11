import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SelectedProduct = () => {

    const {pid} = useParams()

    const [loading, setLoading] = useState (true)
    const [product, setProduct] = useState (null)
    
    useEffect(() => {

        console.log(pid)
    })

    return ("HOLA")
}

export default SelectedProduct