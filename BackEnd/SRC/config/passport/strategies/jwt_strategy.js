import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import config_vars from '../../../dotenv.js'
import { getUserByEmail } from "../../../controllers/usersController.js";

// Extraigo la Cookie desde la solicitud
const cookieExtractor = (req) => {

    if (req.signedCookies.loginCookie)
        return req.signedCookies.loginCookie
    else
        return null
}

// Configuración de mi estrategia (de dónde saco el token y cual es la firma)
const jwtOptions = {
    // Función/es que intentarán obtener el token JWT. Todas tendrán a req como parámetro
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: config_vars.cookies_secret
}

// Estrategia JWT
const strategyJWT = new JwtStrategy (jwtOptions, async (payload, done) => {

// (SÓLO ACCEDERÁ A EJECUTAR LA ESTRATEGIA, SI EL TOKEN JWT PRIMERO ES VALIDADO)
// Intento encontrar el usuario asociado

    try {
        const my_user = await getUserByEmail(payload.email)
        if (!my_user)
            {
                return done(null, false)
            }
        
        return done (null, my_user)
    }

    catch (error)

    {
        done(error, null)
    }
})

export default strategyJWT