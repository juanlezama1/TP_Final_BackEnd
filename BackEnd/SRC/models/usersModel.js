import {Schema, model} from "mongoose"
import {createCart, deleteCartById} from '../controllers/cartsController.js'

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

// Antes de borrar un usuario, que le borre el carrito asociado.
userSchema.pre("findOneAndDelete", async function (next) {

    try {
        const user = await this.model.findOne(this.getQuery())
        await deleteCartById(user.cartID)
        next()
    }

    catch (error) {
        logger.error("Error al borrar el carrito del usuario!")
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