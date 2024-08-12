import Container from "react-bootstrap/esm/Container"
import Main_Subtitles from "../Main_Subtitle/subtitle"
import { useContext, useEffect } from "react"
import { CartContext } from "../Context/context"

const Logout = () => {

    const {cart_qty, setCartQty, cart, setCart, isLogged, setLoggedIn, isAdmin, setAdmin, isPremium, setPremium } = useContext(CartContext)

    useEffect(() => {

        // Borro la cookie y pongo los valores de carrito/login a cero

        setCartQty(0)
        setCart([])
        setLoggedIn(false)
        setAdmin(false)
        setPremium(false)
        document.cookie = `loginCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }, [])

    return (
        <Container fluid>
            <div className="row">
                <div className="col-12" style={{backgroundColor: '#5eb0df'}}>
                    <Main_Subtitles subtitle={"Te desconectaste con éxito, hasta la próxima!"}/>
                    <div className="image d-flex flew-row justify-content-center">
                        <img style={{height: '70vh', marginBottom: '15px'}} src="/images/goodbye.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Logout