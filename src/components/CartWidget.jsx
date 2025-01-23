import './styles/CartWidget.css'
import carrito from "../assets/images/carrito.png"
import { Link } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget() {
    const { getQty } = useContext(CartContext)

    return (
        <Link to='/cart' className="cart">
            <img src={carrito} alt="Carrito de compras" />
            <div className="cart-count">{getQty()}</div>
        </Link>
    )
}

export default CartWidget
