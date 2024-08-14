import { Router } from "express"
import { getUserCartID } from "../controllers/usersController.js"
import {updateCartContent} from '../controllers/cartsController.js'

const cartsRouter = Router ()

cartsRouter.post('/updateCartByUserID', async (req, res) => {

    // Cart será el nuevo carrito a actualizar (sólo es el arreglo de productos)
    const {cart, email} = req.body

    try {
        const cart_id = await getUserCartID(email) // Obtengo el ID del carrito a actualizar
        const updated_cart = await updateCartContent(cart_id, cart)  // Actualizo el contenido del carrito
        console.log(updated_cart)
        return res.status(200).send(updated_cart)
    }

    catch (error) {
        return res.status(500).send("Imposible actualizar el carrito!")
    }
})

export default cartsRouter