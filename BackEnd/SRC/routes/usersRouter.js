import { Router } from "express"
import {getAllUsers, deleteOldUsers, getUserByEmail, sendResetPSWEmail} from "../controllers/usersController.js"
import {logger} from '../utils/logger.js'
import {verify_PSWReset_Token } from "../utils/jwt.js"

const usersRouter = Router ()

// Obtengo todos los usuarios
usersRouter.get('/', async (req, res) => {

    try {
        const my_users = await getAllUsers()
        res.status(200).send(my_users) // Todos los usuarios que tengo en mi DB
    }

    catch (error)

    {
        res.status(500).send("Error al obtener los usuarios de la base de datos")
        logger.error("Imposible obtener los usuarios de la base de datos!")
    }
})

// Elimino usuarios sin actividad por 2 días y les notifico por e-mail
usersRouter.delete('/', async (req, res) => {

    try {
        await deleteOldUsers()
        res.status(200).send("Usuarios sin actividad eliminados con éxito!")
    }

    catch (error)

    {
        req.logger.error("Error al eliminar los usuarios sin actividad")
        res.status(500).send("Error al eliminar los usuarios sin actividad")
    }
})

// Cliente envía su email mediante formulario de "Olvidó su contraseña?"
usersRouter.post('/resetPSW', async (req, res) => {

    const {email} = req.body

    try {
        const user = await getUserByEmail(email)
        if (!user) // Si no existe ningún usuario con ese email
            return res.status(400).send("Usuario no existente!")
           
        await sendResetPSWEmail (email, user.first_name)
        res.status(200).send("Correo de recuperación enviado correctamente!")
    }

    catch (error)

    {
        req.logger.error("Error al enviar el correo de recuperación")
        res.status(500).send("Error al enviar el correo de recuperación")
    }
})

// Valida si el token asociado al cambio de contraseña es válido
usersRouter.post('/validateToken', async (req, res) => {

    const {token} = req.body
    const token_validation = verify_PSWReset_Token(token)

    if (!token_validation)
        res.status(400).send("Token Inválido")

    else
        res.status(200).send("Token Válido")
})

// Actualiza la password del cliente si ya se confirmó el Token, Email y tengo su nueva contraseña

usersRouter.post('/changePSW', async (req, res) => {

    const {new_password, token} = req.body

    console.log(token)
    console.log(new_password)

    // // Verifico si el token es válido (se verificó cuando ingresó a la página, pero puede haber estado allí más de una hora. Por eso verifico nuevamente)

    // const token_validation = verify_PSWReset_Token(token)

    // if (!token_validation)
    //     return res.status(408).send("Token inválido; tiempo excedido")









    















    // Comparo la nueva contraseña con la anterior



    // try {
    //     comparePSW()

        
         
    // }

    // try {
    //     const update_response = await updateUserPSW (new_password)
    // }

    // catch (error)

    // {

    // }
})

export default usersRouter