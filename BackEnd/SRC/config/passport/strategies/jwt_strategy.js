import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import userModel from '../../../models/usersModel.js'
import config_vars from '../../../dotenv.js'

// Busca el token JWT entre mis cookies. Si lo encuentra, lo devuelve. Caso contrario, devuelve null.
const cookieExtractor = (req) => {
    if (req.cookies.jwtCookie)
        return req.cookies.jwtCookie
    else
        return null
}

// Configuración de mi estrategia (de dónde saco el token y cual es la firma)
const jwtOptions = {
    // Función/es que intentarán obtener el token JWT. Todas tendrán a req como parámetro
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: config_vars.jwt_secret
}

// Estrategia JWT
const strategyJWT = new JwtStrategy (jwtOptions, async (payload, done) => {

    // SÓLO ACCEDERÁ A EJECUTAR LA ESTRATEGIA, SI EL TOKEN JWT PRIMERO ES VALIDADO

    console.log("ACÁ ENTRA EN CADA SOLICITUD")
    // try {
    //     // Busco un usuario en la DB con el mismo ID. Si existe, lo devuelvo
    //     const user = await userModel.findById(payload.user._id)
    //     if (!user)
    //         {
    //             return done(null, false)
    //         }
        
    //     return done (null, user)
    // }

    // catch (error)

    // {
    //     done(error, null)
    // }
})

export default strategyJWT