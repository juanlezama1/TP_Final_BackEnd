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
        return false
    }
}

const generateAccessToken = (email, category, cart) => {

    // Contenido del token
    const token_content = {email, category, cart}

    // El tiempo de expiración del token (12 HORAS)
    const accessToken_expiracyTime = '12h'

    // La clave secreta del token
    const accessToken_privateKey = config_vars.cookies_secret

    // Genero el Token con su firma
    const accessToken = jwt.sign(token_content, accessToken_privateKey, {expiresIn: accessToken_expiracyTime})

    return accessToken
}

const verify_AccessToken = (token) => {

    const token_key = config_vars.cookies_secret
    let decoded_token

    try {
        decoded_token = jwt.verify(token, token_key)
        return decoded_token
    }

    catch (error)

    {
        logger.warning("Intento de verificación con Token Inválido")
        return false
    }
}

export {generate_PSWReset_Token, verify_PSWReset_Token, generateAccessToken, verify_AccessToken}