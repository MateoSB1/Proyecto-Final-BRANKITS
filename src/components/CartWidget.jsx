import './styles/CartWidget.css'
import carrito from "../assets/images/carrito.png"

function CartWidget() {
  return (
    <div className="cart">
      <img src={carrito} alt="Carrito de compras" />
      <div className="cart-count">3</div>
    </div>
  )
}

export default CartWidget
