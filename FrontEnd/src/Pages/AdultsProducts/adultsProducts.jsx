import { useEffect, useState } from "react"
import Container from 'react-bootstrap/esm/Container'
import { Card, Spin } from 'antd'
import { Link } from 'react-router-dom'
import Main_Titles from '../../Components/Main_Titles/main_titles'
const { Meta } = Card

const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  }

const content = <div style={contentStyle} />

const AdultsProducts = () => {

    const getProducts = async () => {

        setTimeout(async () => {
            const response = await fetch('http://localhost:8080/api/products/category/Adults')
            const my_products = await response.json()
            setLoading(false)
            setProducts(my_products)
            return
        }, 1500)

    }

// Apenas ingresa, tiene que traer del back todos los productos
    useEffect(() => {
        getProducts()
    }, [])

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    if (!loading)
    
    {
        return (
            <Container fluid className="m-0 p-0 overflow-hidden">
                <div className='row'>
                    <div className="col-12" style={{marginBottom: '15px'}}>
                        <Main_Titles title={"Productos > Adultos"}></Main_Titles>
                    </div>
                </div>

                <div className="row d-flex flex-row justify-content-center">
                    {products.map(product => (
                            <Link key={product._id} className='col-3 text-center text-decoration-none' to={`/products/${product._id}`}>
                                <div className='Card'>
                                    <Card style={{marginBottom: '12px'}} key={product._id} hoverable cover={<img className='product_image' alt={product.title} src={`http://localhost:8080/${product.thumbnail[0]}`} />} >
                                        <Meta style={{marginBottom: '12px', fontWeight: 'bold', fontSize: '16px'}} title={product.title} description={`${product.title}`} />
                                        <p className='more_info' style={{fontWeight: 'bold'}}>${product.price}</p>
                                        <p style={{marginBottom: '0px', paddingBottom: '0px'}} className='more_info text-decoration-underline'>Más Info/Comprar</p>
                                    </Card>
                                </div>
                            </Link>
                    ))}
                </div>
            </Container>
        )
    }

    else {
        return (
            <Spin tip="Buscando productos para adultos..." size="large">
                {content}
            </Spin>
        )
    }
}

export default AdultsProducts