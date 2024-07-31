import userModel from "../models/usersModel.js"
import email_transport from '../utils/emailTransport.js'
import {readFileSync} from 'fs'

// Obtengo todos los usuarios
const getAllUsers = async () => {
    const all_users = await userModel.find()
    return all_users
}

// Envía notificación por email al usuario eliminado por inactividad
const deleteNotificationEmail = async (email, name) => {

    // Leo el template del HTML a enviar
    const notification_email = readFileSync(__dirname + '/public/html/delete_notification.html', 'utf-8')

    await email_transport.sendMail({
        from: 'TP CoderHouse <juanpablodeveloper92@gmail.com>',
        to: notification_email,
        subject: 'Importante: Cuenta eliminada por inactividad',
        html: my_html,
        attachments: [
    
            {
                filename: 'facebook.png',
                path: __dirname + '/public/img/emails/facebook.png',
                cid: 'facebook'},
        
            {
                filename: 'twitter.png',
                path: __dirname + '/public/img/emails/twitter.png',
                cid: 'twitter'},
        
            {
                filename: 'linkedin.png',
                path: __dirname + '/public/img/emails/linkedin.png',
                cid: 'linkedin'},
        
            {
                filename: 'instagram.png',
                path: __dirname + '/public/img/emails/instagram.png',
                cid: 'instagram'},
        
            {
                filename: 'password.png',
                path: __dirname + '/public/img/emails/password.png',
                cid: 'password'},
        
            {
                filename: 'coderhouse.png',
                path: __dirname + '/public/img/emails/coderhouse.png',
                cid: 'coderhouse'},
        ]
    })
}




























    

}

// Elimino los usuarios sin actividad por 2 días y les notifica por email
const deleteOldUsers = async () => {

    const all_users = await getAllUsers()
    const fecha_actual = Date.now()

    for (const user of all_users)
    
    {
        if (fecha_actual - user.last_connection > 2*24*60*60*1000)
        
        {
            await deleteNotificationEmail(user.email, user.first_name)
            await userModel.findByIdAndDelete(user._id)
        }            
    }
}

export {getAllUsers, deleteOldUsers, deleteNotificationEmail}