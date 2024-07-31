import {Schema, model} from "mongoose"

// Prototipo de una Orden de Compra (OC) en la DB

const ticketSchema = new Schema ({

    purchase_datetime: {
        type: Date,
        required: true,
        default: Date.now()
    },

    amount: {
        type: Number,
        required: true
    },

    cart: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'carts'
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
})

ticketSchema.pre('find', async function(next){

    this.populate('cart')
    this.populate('user')
    next()

})

// Exporto este prototipo en mi colección
export const ticketModel = model ("tickets", ticketSchema)