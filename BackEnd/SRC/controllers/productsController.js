import productsModel from "../models/productsModel.js"

// LEE TODOS LOS PRODUCTOS
const readAllProducts = async () => {
    const all_products = await productsModel.find()
    return all_products
}

// CREA UN PRODUCTO
const createProduct = async (product) => {

    const my_product = await productsModel.create(product)
    return my_product
}

// LEE UN PRODUCTO ESPECÍFICO
const readProduct = async (product_id) => {

    const my_product = await productsModel.findById(product_id)
    return my_product
}

const readCategoryProducts = async (category) => {

    const my_products = await productsModel.find({category: category})
    return my_products
}

export {readAllProducts, createProduct, readProduct, readCategoryProducts}