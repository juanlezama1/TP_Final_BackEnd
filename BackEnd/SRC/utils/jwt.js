import jwt from 'jsonwebtoken'
import config_vars from '../dotenv.js'
import {logger} from './logger.js'

const generate_PSWReset_Token = (email) => {

    // Contenido del token (un objeto con sólo el email que servirá para blanquear su password)
    const token_content = {email}

    // El tiempo de expiración del token (1 HORA)
    const URL_expiracyTime = '1h'

    // La clave secreta del token
    const URL_private_key = config_vars.URL_jwt_secret

    // Genero el Token con su firma
    const URL_token = jwt.sign(token_content, URL_private_key, {expiresIn: URL_expiracyTime})

    return URL_token
}

const verify_PSWReset_Token = (token) => {

    const URL_private_key = config_vars.URL_jwt_secret
    let decoded_token

    try {
        decoded_token = jwt.verify(token, URL_private_key)
        return decoded_token
    }

    catch (error)

    {
        logger.warning("Intento de verificación con Token Inválido")
        return false
    }
}

export {generate_PSWReset_Token, verify_PSWReset_Token}