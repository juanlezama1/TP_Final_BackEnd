import express from 'express'
import config_vars from './dotenv.js'
import mongoose from 'mongoose'
import __dirname from './path.js'
import indexRouter from '../SRC/routes/indexRouter.js'
import {logger_middleware, logger} from './utils/logger.js'

const my_app = express ()
const PORT = config_vars.port

// Conexión con DB
mongoose.connect(config_vars.mongo_db_url)
    .then(() => logger.info("Conectado a la DB!"))
    .catch(error => logger.fatal("Error al conectarse a la DB: ", error))

// Middlewares
my_app.use(logger_middleware)
my_app.use(express.json())

// Rutas
my_app.use('/api', indexRouter)

// Levanto el server
const my_server = my_app.listen(PORT, () => {
    logger.info(`Escuchando solicitudes en el puerto ${PORT} ...`)
})