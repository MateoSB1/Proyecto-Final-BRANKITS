import CartList from './CartList'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'
import './styles/Cart.css'

function Cart() {
    const { cart, getTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2 className="cart-empty-h2">No tienes productos en el carrito</h2>
                <Link to="/" className="cart-empty-btn">Ir a ver productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <CartList items={cart} />
            <p className="cart-total">Total: ${getTotal()}</p>
            <Link to="/checkout" className="btn-cart">Ir al checkout</Link>
        </div>
    )
}

export default Cart