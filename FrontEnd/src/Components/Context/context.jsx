import {Children, createContext, useState } from "react"

export const CartContext = createContext()

const CartComponentContext = ({children}) => {

const [cart_qty, setCartQty] = useState (0)
const [cart, setCart] = useState ([])
const [isLogged, setLoggedIn] = useState (false)
const [isAdmin, setAdmin] = useState (false)
const [isPremium, setPremium] = useState (false)
 
    return (
        <CartContext.Provider value={{cart_qty, cart, setCartQty, setCart, isLogged, setLoggedIn, isAdmin, setAdmin, isPremium, setPremium}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext