import {Schema, model} from "mongoose"

// Prototipo de un producto en la DB
const productSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    thumbnail: {
        type: Array,
        default: [],
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        enum: ['Kids', 'Teenagers', 'Adults'],
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: true
    }
})

// Exporto este prototipo en mi colección
export const productModel = model ("products", productSchema)