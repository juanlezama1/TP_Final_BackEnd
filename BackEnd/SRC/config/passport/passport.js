import passport from 'passport'
import strategyJWT from './strategies/jwt_strategy.js'
import strategyGitHub from './strategies/github_strategy.js'

// Función que inicializa las estrategias de login de Passport
const initializatePassportStrategies = () => {
    
// Estrategia de autentcación con JWT.
    passport.use('jwt', strategyJWT)
    passport.use('github', strategyGitHub)
}

export default initializatePassportStrategies