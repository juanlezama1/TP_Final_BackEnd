import { Router } from "express"
import {getAllUsers, deleteOldUsers, getUserByEmail, sendResetPSWEmail} from "../controllers/usersController.js"
import {logger} from '../utils/logger.js'

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

export default usersRouter