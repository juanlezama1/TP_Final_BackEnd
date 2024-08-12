import GitHubStrategy from 'passport-github2'
import crypto from 'crypto'
import { logger } from '../../../utils/logger.js'
import config_vars from '../../../dotenv.js'
import usersModel from '../../../models/usersModel.js'
import { createHash } from '../../../utils/bcrypt.js'

// Estrategia para autenticar a un usuario a través de GitHub.
// Aclaración: Se solicita el email, pero es posible que el usuario no tenga su email
// configurado de manera pública. Para este trabajo se considera EL EMAIL ES PÚBLICO

const gitHub_config = {
    clientID: config_vars.github_id,
    clientSecret: config_vars.github_secret,
    callbackURL: "http://localhost:8080/api/users/authenticateGitHubCallBack"
}

// AccessToken y RefreshToken son variables internas de passport, que usa para validar la cuenta con GitHub.

const strategyGitHub = new GitHubStrategy(gitHub_config, async (accessToken, refreshToken, profile, done) => {

    try {
        // Caso que su email no sea público

        if (!profile._json.email)

        {
            logger.warning("Intento de logueo con GitHub usando email en privado"),
            done(null, false)
        }

        else

        {
            // Caso que ya esté guardado el usuario
            const user = await usersModel.findOne({email: profile._json.email})
            if (user) {
                logger.info("Cliente logueado con GitHub: previamente cargado en DB")
                done(null, user)
            }

            // Caso que sea un usuario nuevo
            else {
                const randomString = crypto.randomBytes(10).toString('hex')
                let first_name = profile._json.name
                
                // Caso que el nombre esté vacío (por default viene vacío)
                !first_name && (first_name = profile._json.login)

                // La contraseña será la combinación del nombre(ó usuario) + caracteres aleatorios
                let password = createHash(first_name + randomString)

                const userCreated = await usersModel.create({ first_name: first_name, last_name: ' ', email: profile._json.email, age: 18, password: password, category: 'Standard_User'})
                logger.info("Cliente logueado con GitHub: primer login, cargado en DB")
                done(null, userCreated)
            }
        }
    } catch (error) {
        return done(error)
    }
})

export default strategyGitHub