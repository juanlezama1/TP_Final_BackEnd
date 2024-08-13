import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container"
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import {Spin} from 'antd'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import {toast, ToastContainer, Zoom} from 'react-toastify'
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'
import { CartContext } from "../../Components/Context/context";

let images = [

    {
      original: '',
      thumbnail: ''
    },

    {
      original: '',
      thumbnail: ''
    }
]

const SelectedProduct = () => {

    const {pid} = useParams() // ID del producto
    const [loading, setLoading] = useState (true) // Carga inicial del producto
    const [product, setProduct] = useState (null) // Detalle del producto
    const [quantity, setQuantity] = useState (0) // Cantidad clickeada (no confirmada)
    const {cart, setCart, isLogged, setLoggedIn} = useContext(CartContext) // Contexto
    const [addingProduct, setAddingProduct] = useState(false) // Agregando al carrito
    
    for (const cart_product of cart) {
        if (cart_product.id_prod === pid) {
            setQuantity(cart_product.quantity)
            break; // Sale del bucle
        }
    }
  
    const decreaseQuantity = () => {
        if (quantity>0)
            setQuantity(quantity-1)

        return
    }

    const increaseQuantity = () => {
        if (quantity<product.stock)
            setQuantity(quantity+1)

        return
    }

    const addProduct = async () => {

        if(!isLogged) {
            toast.error("No estás logueado!", {theme: 'colored', transition: Zoom, hideProgressBar: true, pauseOnHover: false, autoClose: 900})
            return
        }

        else {
            setAddingProduct(true)

            // let cart_copy = cart

            // for (let i=0; i < cart.length; i++)

            // {
            //     if (cart[i].id_prod == pid)
                
            //     {
            //         cart_copy[i].quantity = quantity
            //         console.log(cart_copy)
            //         break
            //     }
            // }

            // // Caso que no estaba en el carrito

            // if (cart_copy == cart)

            // {
            //     cart_copy.push({id_prod: pid, quantity})
            //     console.log(cart_copy)
            // }

            setAddingProduct(false)
            return
            
        }
    }
      
    useEffect(() => {

        const getProduct = async () => {
            const response = await fetch (`http://localhost:8080/api/products/${pid}`)
            const my_product = await response.json()
            setProduct(my_product)

            // Configuro el carrete de imágenes
            images[0].original = `http://localhost:8080/${my_product.thumbnail[0]}`
            images[1].original = `http://localhost:8080/${my_product.thumbnail[1]}`
            
            images[0].thumbnail = `http://localhost:8080/${my_product.thumbnail[0]}`
            images[1].thumbnail = `http://localhost:8080/${my_product.thumbnail[1]}`

            images[0].originalHeight = images[1].originalHeight = `400px`

            setLoading(false)
        }

        setTimeout(() => {
            getProduct()
        }, 1500)
    }, [])

    if (!loading) {
        return (
            <Container fluid className="pb-3">
                <div className="row">
                    <div className="col-6">
                        <div className="image-gallery-container">
                            <Gallery items={images} showFullscreenButton={false} showPlayButton={false}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="title">
                            <Main_Titles title={product.title} />
                        </div>

                        <div className="description">
                            {product.description}
                        </div>

                        <div className="quantity d-flex flex-column align-items-center mt-4">
                            
                            <Main_Subtitles subtitle={"CANTIDAD:"} />

                            <div className="quantity_counter">
                                <button onClick={decreaseQuantity}>
                                    <MinusOutlined />
                                </button>

                                <span style={{fontSize: '30px', marginLeft: '15px', marginRight: '15px'}}>
                                    {quantity}
                                </span>

                                <button onClick={increaseQuantity}>
                                    <PlusOutlined />
                                </button>
                            </div>

                            <Main_Subtitles subtitle={`Stock Disponible: ${product.stock} unidades`}/>
                        </div>

                        <div className="d-flex flex-row justify-content-center buying_sector m-5">
                            <button onClick={addProduct} className="m-5">
                                AGREGAR AL CARRITO
                            </button>

                            <button className="m-5">
                                COMPRAR AHORA!
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Container>
        )
    }

    else
        return (

            <>
            <Spin tip="Cargando detalle de producto..." size="large">
                <div style={{padding: 50, background: 'rgba(0, 0, 0, 0.05)', borderRadius: 4}}>
                </div>
            </Spin>
            <ToastContainer />
            </>
        )
}

export default SelectedProduct