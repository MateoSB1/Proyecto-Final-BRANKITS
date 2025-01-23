// import './styles/CartList.css'
import './styles/Cart.css'
import { useCart } from '../context/CartContext'

function CartList({ items }) {
    const { removeFromCart } = useCart()

    return (
        <ul className="cart-list">
            {items.map((item) => (
                <li className="cart-list-item" key={item.id}>
                    {item.title} - x{item.quantity}: ${item.price}
                    <button className="btn-cart-delete" onClick={() => removeFromCart(item.id)}> X </button>
                </li>
            ))}
        </ul>
    )
}

export default CartList
