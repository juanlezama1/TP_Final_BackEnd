import userModel from "../models/usersModel.js"
import email_transport from '../utils/emailTransport.js'
import {readFileSync} from 'fs'
import __dirname from '../path.js'

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

// Encuentra el ID del usuario asociado a un email
const getUserIdByEmail = async (email) => {
    const user = await userModel.findOne({email})
    return user._id
}

// Envía un correo de blanqueo de contraseña
// Precondición: El email está confirmado que es real y existe en la DB

const sendResetPSWEmail = async (email) => {

    const PORT = config_vars.port

    // Leo el HTML Base de blanqueo de contraseña
    const original_html = readFileSync(__dirname + '/public/htmls/forgetPassword.html', 'utf-8')

    // Genero un token JWT para este usuario
    // Duración: 1 Hora
    // Contenido: Email del usuario a blanquear contraseña

    const user_PSWReset_token = generate_PSWReset_Token(email)

    // Reemplazo en el HTML el link para este usuario en particular (incluyendo su token)
    const changePswLink = `http://localhost:${PORT}/api/users/changePSW?token=${user_PSWReset_token}`
    const custom_html = original_html.replace("LINK_AL_USUARIO", changePswLink)

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

export {getAllUsers, deleteOldUsers, deleteNotificationEmail, getUserIdByEmail, sendResetPSWEmail}