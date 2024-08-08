import cartsModel from '../models/cartsModel.js'

const createCart = async (new_cart) => {
    new_cart = await cartsModel.create(new_cart)
    return new_cart
}

const deleteCartById = async (cart_id) => {
    await cartsModel.findByIdAndDelete(cart_id)
    return
}

export {createCart, deleteCartById}