import {Schema, model} from "mongoose"
import {createCart} from '../controllers/cartsController.js'

// Prototipo de un usuario en la DB
const userSchema = new Schema ({

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: ['Standard_User', 'Premium', 'Admin'],
        default: 'Standard_User',
        required: true
    },

    cartID: {
        type: Schema.Types.ObjectId,
        ref: 'carts'
    },

    last_connection: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

// Antes de guardar un nuevo usuario, que le cree un carrito vacío.
userSchema.pre("save", async function (next) {

    try {
        const newCart = await createCart({})
        this.cartID = newCart._id
        next()
    }

    catch (error) {
        logger.error("Error al generar un carrito vacío para el usuario!")
        next(error)
    }
})

// Si pido los usuarios, que se expandan los carritos
userSchema.pre("find", async function (next) {
    this.populate('cartID')
    next()
})

// Exporto este prototipo en mi colección
const usersModel = model ("users", userSchema)
export default usersModel