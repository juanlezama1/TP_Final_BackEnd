import passport from 'passport'
import strategyJWT from './strategies/jwt_strategy.js'

// Función que inicializa las estrategias de login de Passport
const initializatePassportStrategies = () => {
    
// Estrategia de autentcación con JWT.
    passport.use('jwt', strategyJWT)
}

export default initializatePassportStrategies