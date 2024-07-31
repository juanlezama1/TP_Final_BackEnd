import productsModel from "../models/productsModel.js"

const readAllProducts = async () => {
    const all_products = await productsModel.find()
    return all_products
}

export {readAllProducts}