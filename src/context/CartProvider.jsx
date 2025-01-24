import { CartContext } from './CartContext'
import { useState } from 'react'

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => {
            const isInCart = prevCart.some((prod) => prod.id === item.id)

            if (isInCart) {
                return prevCart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + item.quantity }
                        : prod
                )
            }

            return [...prevCart, item]
        })
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const getQty = () => {
        const cantidades = cart.map(item => item.quantity)
        const cantidadTotal = cantidades.reduce((acc, current) => acc + current, 0)
        return cantidadTotal
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity * item.price)
        const total = totales.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQty, getTotal, setCart }}>
            {children}
        </CartContext.Provider>
    )
}