import express from 'express'
import config_vars from './dotenv.js'
import mongoose from 'mongoose'
import __dirname from './path.js'
import indexRouter from '../SRC/routes/indexRouter.js'
import {logger_middleware, logger} from './utils/logger.js'
import cors from 'cors'
import path from 'path'
import initializatePassportStrategies from './config/passport/passport.js'
import passport from 'passport'
import cookieParser from 'cookie-parser'

const my_app = express ()
const PORT = config_vars.port

// Conexión con DB
mongoose.connect(config_vars.mongo_db_url)
    .then(() => logger.info("Conectado a la DB!"))
    .catch(error => logger.fatal("Error al conectarse a la DB: ", error))

// Middlewares
my_app.use(cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: 'GET,POST,PUT,DELETE', // Permite los métodos especificados
  }))

my_app.use(logger_middleware)
my_app.use(express.json())

// Middleware para Cookies
my_app.use(cookieParser(config_vars.cookies_secret))

// Inicializo el Middleware de Passport
initializatePassportStrategies()
my_app.use(passport.initialize())

// Doy acceso, dentro de la carpeta pública, sólo a los archivos estáticos de las fotos de productos.
my_app.use(express.static(path.join(__dirname, 'public/images/Products')))

// Rutas
my_app.use('/api', indexRouter)

// Levanto el server
const my_server = my_app.listen(PORT, () => {
    logger.info(`Escuchando solicitudes en el puerto ${PORT} ...`)
})