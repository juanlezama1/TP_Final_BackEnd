import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Image, Carousel } from 'antd';

const SelectedProduct = () => {

    const {pid} = useParams()

    const [loading, setLoading] = useState (true)
    const [product, setProduct] = useState (null)
    
    useEffect(() => {

        const getProduct = async () => {
            const response = await fetch (`http://localhost:8080/api/products/${pid}`)
            const my_product = await response.json()
            setProduct(my_product)
            setLoading(false)
        }

        getProduct()
    
    })

    if (!loading) {
        return (
            "hola"
        )
    }

else
        return ("No llegó aún")
}

export default SelectedProduct


