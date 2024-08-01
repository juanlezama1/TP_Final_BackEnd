import jwt from 'jsonwebtoken'
import config_vars from '../dotenv.js'

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

export {generate_PSWReset_Token}