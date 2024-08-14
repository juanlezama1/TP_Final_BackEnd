import express from 'express'
import __dirname from '../path.js'
import productsRouter from './productsRouter.js'
import usersRouter from './usersRouter.js'
import cartsRouter from './cartsRouter.js'

const indexRouter = express.Router ()

// Índice de rutas
indexRouter.use('/products', productsRouter, express.static(__dirname + '/public'))
indexRouter.use('/carts', cartsRouter, express.static(__dirname + '/public'))
indexRouter.use('/users', usersRouter, express.static(__dirname + '/public'))
// indexRouter.use('/tickets', ticketsRouter, express.static(__dirname + '/public'))

export default indexRouter