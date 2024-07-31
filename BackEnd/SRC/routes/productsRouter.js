import { Router } from "express"
import { readAllProducts } from "../controllers/productsController.js"

const productsRouter = Router ()

// LECTURA DE TODOS LOS PRODUCTOS
productsRouter.get('/', async (req, res) => {

    const {limit} = req.query // Si no se mandó, tendrá el valor 'undefined

    // Caso que manden un límite que no tenga sentido
    if (limit && isNaN(limit) || limit <= 0)
        return res.status(400).send("El límite debe ser numérico y mayor a cero")
    
    let prods_exhibited_qty // Cantidad de productos a devolver

    try {
        const my_products = await readAllProducts()

        if (!limit || parseInt(limit) >= my_products.length)
            prods_exhibited_qty = my_products.length

        else
            prods_exhibited_qty = parseInt(limit)

        return res.status(200).send(my_products.splice(0, prods_exhibited_qty))
    }

    catch (error)

    {
        req.logger.error("Imposible leer los productos de la base de datos!")
        return res.status(500).send("Imposible leer los productos de la base de datos!")
    }
})

export default productsRouter