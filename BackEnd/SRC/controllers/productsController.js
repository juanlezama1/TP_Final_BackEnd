import productsModel from "../models/productsModel.js"

const readAllProducts = async () => {
    const all_products = await productsModel.find()
    return all_products
}

const createProduct = async (product) => {

    const my_product = await productsModel.create(product)
    return my_product
}

export {readAllProducts, createProduct}