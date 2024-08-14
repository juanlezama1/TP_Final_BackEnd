import {Children, createContext, useState } from "react"

export const CartContext = createContext()

const CartComponentContext = ({children}) => {

const [cart, setCart] = useState ([])
const [isLogged, setLoggedIn] = useState (false)
const [isAdmin, setAdmin] = useState (false)
const [isPremium, setPremium] = useState (false)
const [email, setEmail] = useState ('')
 
    return (
        <CartContext.Provider value={{cart, setCart, isLogged, setLoggedIn, isAdmin, setAdmin, isPremium, setPremium, email, setEmail}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext