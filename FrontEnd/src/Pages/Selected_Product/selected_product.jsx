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
import './selected_product.css' 

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
    const [loadingText, setLoadingText] = useState("Cargando detalle de producto...") // Texto para el Spinner
    const [product, setProduct] = useState (null) // Detalle del producto
    const [quantity, setQuantity] = useState (0) // Cantidad clickeada (no confirmada)
    const {cart, setCart, isLogged, email, setEmail} = useContext(CartContext) // Contexto

    const updateBackCart = async (cart) => {
            // Actualizo el carrito en el Back-End
            const response = await fetch('http://localhost:8080/api/carts/updateCartByUserID', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email, cart})})
            if (response.status == 200)
                toast.success("Carrito actualizado!...", {hideProgressBar: true, pauseOnHover: false, theme: 'colored', position: 'top-right', transition: Zoom, autoClose: 500})

            else
                toast.error("Error de servidor!", {hideProgressBar: true, pauseOnHover: false, theme: 'colored', position: 'top-right', transition: Zoom, autoClose: 500})
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

            setLoadingText("Actualizando carrito...")
            setLoading(true)

            setTimeout(async () => {

                // Copia del carrito original
                let cart_copy = [...cart]
                let updateCartQty = false

                // Recorro mi carrito buscando este producto en particular
                for (let i=0; i < cart.length; i++)
    
                {
                    if (cart[i].id_prod == pid)
                    
                    {
                        // Actualizo la cantidad
                        cart_copy[i].quantity = quantity
                        updateCartQty = true
                    }
                }

                // Si no actualicé el carrito, es porque el elemento no estaba, entonces lo agrego al final
                
                if(!updateCartQty) {
                    cart_copy.push({id_prod: pid, quantity: quantity})
                }
                
                setCart(cart_copy)
                setLoading(false)     

                await updateBackCart(cart_copy)
            }, 800)
        }    
    }

    const buyNow = async (req, res) => {

        if(!isLogged) {
            toast.error("No estás logueado!", {theme: 'colored', transition: Zoom, hideProgressBar: true, pauseOnHover: false, autoClose: 900})
            return
        }
        
        else {

            // Pisa el carrito anterior, y sólo quedará con este producto
            setCart([{id_prod: pid, quantity: quantity}])
            toast.success("Preparando tu compra...", {hideProgressBar: true, pauseOnHover: false, theme: 'colored', position: 'top-right', transition: Zoom, autoClose: 500})
            await updateBackCart([{id_prod: pid, quantity: quantity}])
            toast.success("Redirigiendo a CheckOut...", {pauseOnHover: false, position: 'top-right', autoClose: 3000})

            setTimeout(() => {
                window.location.href = 'http://localhost:5173/checkout'
            }, 2000);
        }
    }
      
    useEffect(() => {

        const getProduct = async () => {

            // Que deje cargado el número con la cantidad que ya tenías puesta

            for (const cart_product of cart) {
                if (cart_product.id_prod === pid) {
                    setQuantity(cart_product.quantity)
                    break; // Sale del bucle
                }
            }

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
                            <button onClick={addProduct} style={{height: '80px', width: '150px'}} className="main_buttons m-5">
                                AGREGAR AL CARRITO
                            </button>

                            <button onClick={buyNow} className="main_buttons m-5">
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
            <Container fluid>
                <div className="row">
                    <div className="col-12">
                        <Spin tip={loadingText} size="large">
                        <div style={{padding: 50, background: 'rgba(0, 0, 0, 0.05)', borderRadius: 4}}>
                        </div>
                        </Spin>
                    </div>
                </div>
                <ToastContainer />
            </Container>
        )
}

export default SelectedProduct