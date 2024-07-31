import {Schema, model} from "mongoose"

// Prototipo de un carrito en la DB
const cartSchema = new Schema ({
    products: {
        type:
        [
            {
                id_prod: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'products'
                },
        
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        
        default: []
    }
})

// Evito que dentro de cada objeto de producto, me genere un nuevo _id
cartSchema.path('products').schema.set('_id', false);

// Aplica tanto para el find como para el findById
cartSchema.pre(/^find/, async function (next) {
    
    this.populate('products.id_prod'),
    next()
})

// Exporto este prototipo en mi colección
const cartsModel = model ("carts", cartSchema)
export default cartsModel