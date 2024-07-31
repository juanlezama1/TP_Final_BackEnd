import cartsModel from '../models/cartsModel.js'

const createCart = async (new_cart) => {
    new_cart = await cartsModel.create(new_cart)
    return new_cart
}

export {createCart}