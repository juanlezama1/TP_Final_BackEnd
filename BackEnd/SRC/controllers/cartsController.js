import cartsModel from '../models/cartsModel.js'

const createCart = async (new_cart) => {
    new_cart = await cartsModel.create(new_cart)
    return new_cart
}

const deleteCartById = async (cart_id) => {
    await cartsModel.findByIdAndDelete(cart_id)
    return
}

const findCartById = async (cart_id) => {
    const my_cart = await cartsModel.findById(cart_id)
    return my_cart
}

// Debe actualizar el contenido del carrito
const updateCartContent = async (cart_id, cart) => {

    const new_cart = await cartsModel.findByIdAndUpdate(cart_id, {products: cart}, {new: true})
    return new_cart
}

export {createCart, deleteCartById, findCartById, updateCartContent}