import userModel from "../models/usersModel.js"
import email_transport from '../utils/emailTransport.js'
import {readFileSync} from 'fs'
import __dirname from '../path.js'
import { generate_PSWReset_Token } from "../utils/jwt.js"
import config_vars from "../dotenv.js"
import { createHash } from "../utils/bcrypt.js"

// Obtengo todos los usuarios
const getAllUsers = async () => {
    const all_users = await userModel.find()
    return all_users
}

// Envía notificación por email al usuario eliminado por inactividad
const deleteNotificationEmail = async (email, name) => {

    // Leo el HTML a enviar
    const original_html = readFileSync(__dirname + '/public/htmls/deleteNotification.html', 'utf-8')

    // Reemplazo el nombre en el HTML por el del usuario
    const custom_html = original_html.replace("USUARIO_A_INGRESAR", name)

    await email_transport.sendMail({
        from: 'TP CoderHouse <juanpablodeveloper92@gmail.com>',
        to: email,
        subject: 'Importante: Cuenta eliminada',
        html: custom_html,
        attachments: [
    
            {
                filename: 'HTML1_anxiety.webp',
                path: __dirname + '/public/images/HTML1_anxiety.webp',
                cid: 'anxiety'},
        
            {
                filename: 'HTML1_facebook.png',
                path: __dirname + '/public/images/HTML1_facebook.png',
                cid: 'facebook'},
        
            {
                filename: 'HTML1_instagram.png',
                path: __dirname + '/public/images/HTML1_instagram.png',
                cid: 'instagram'},
        
            {
                filename: 'HTML1_logo.png',
                path: __dirname + '/public/images/HTML1_logo.png',
                cid: 'logo'},
        
            {
                filename: 'HTML1_twitter.png',
                path: __dirname + '/public/images/HTML1_twitter.png',
                cid: 'twitter'}
        ]
    })
}

// Elimino los usuarios sin actividad por 2 días y les notifica por email
const deleteOldUsers = async () => {

    const all_users = await getAllUsers()
    const fecha_actual = Date.now()

    for (const user of all_users)
    
    {
        if ((fecha_actual - user.last_connection) > 2*24*60*60*1000)
        
        {
            console.log(`pasé por el usuario ${user.first_name}`)
            await deleteNotificationEmail(user.email, user.first_name)
            await userModel.findByIdAndDelete(user._id)
        }            
    }
}

// Encuentra el usuario asociado a un email
const getUserByEmail = async (email) => {
    const user = await userModel.findOne({email})
    return user
}

// Envía un correo de blanqueo de contraseña
// Precondición: El email está confirmado que es real y existe en la DB

const sendResetPSWEmail = async (email, name) => {

    const FRONT_PORT = config_vars.front_port

    // Leo el HTML Base de blanqueo de contraseña
    const original_html = readFileSync(__dirname + '/public/htmls/forgetPassword.html', 'utf-8')

    // Genero un token JWT para este usuario
    // Duración: 1 Hora
    // Contenido: Email del usuario a blanquear contraseña

    const user_PSWReset_token = generate_PSWReset_Token(email)

    // Reemplazo en el HTML el link para este usuario en particular (incluyendo su token)
    const changePswLink = `http://localhost:${FRONT_PORT}/changePSW?token=${user_PSWReset_token}` // Ruta de Front
    let custom_html = original_html.replace("LINK_AL_USUARIO", changePswLink)
    
    // Reemplazo en el HTML el nombre del usuario
    custom_html = custom_html.replace("NOMBRE_USUARIO", name)

    // Finalmente el link quedará apuntando, por GET, al servidor Front donde luego se llamará al Back para validar el Token. 

    // Mando el email
    await email_transport.sendMail({
        from: 'TP CoderHouse <juanpablodeveloper92@gmail.com>',
        to: email,
        subject: 'Recuperación de Contraseña',
        html: custom_html,
        attachments: [
    
            {
                filename: 'HTML2_logo.png',
                path: __dirname + '/public/images/HTML2_logo.png',
                cid: 'logo'},

            {
                filename: 'HTML2_password.png',
                path: __dirname + '/public/images/HTML2_password.png',
                cid: 'password'},            
        
            {
                filename: 'HTML2_keys.png',
                path: __dirname + '/public/images/HTML2_keys.png',
                cid: 'keys'},
        
            {
                filename: 'HTML2_facebook.png',
                path: __dirname + '/public/images/HTML2_facebook.png',
                cid: 'facebook'},
        
            {
                filename: 'HTML2_twitter.png',
                path: __dirname + '/public/images/HTML2_twitter.png',
                cid: 'twitter'},
        
            {
                filename: 'HTML2_instagram.png',
                path: __dirname + '/public/images/HTML2_instagram.png',
                cid: 'instagram'},
        
            {
                filename: 'HTML2_linkedin.png',
                path: __dirname + '/public/images/HTML2_linkedin.png',
                cid: 'linkedin'},
        ]
    })
}

// Actualiza la contraseña del usuario
const updateUserPSW = async (user_id, new_password) => {
    await userModel.findByIdAndUpdate(user_id, {password: new_password})
    return
}

// Verifico si los datos ingresados para un registro son correctos:
// - Algún dato no está definido
// - La edad es no-numérica
// - Las contraseñas no coinciden

const isUserDataValid = (user) => {
    
    const user_data = [user.first_name, user.last_name, user.age, user.email, user.password, user.password_confirm]

    if (user_data.includes(null) || user_data.includes(undefined) || isNaN(user.age) || user.password != user.password_confirm)
        return false
    return true
}

// Crea un nuevo usuario en la base de datos

const createNewUser = async (user) => {

    // Encripto la contraseña antes de guardarla
    const password_encrypted = createHash(user.password)
    user.password = password_encrypted

    const new_user = await userModel.create(user)
    return new_user
}

export {getAllUsers, deleteOldUsers, deleteNotificationEmail, getUserByEmail, sendResetPSWEmail, updateUserPSW, isUserDataValid, createNewUser}