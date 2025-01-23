import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./styles/ItemCount.css"

function ItemCount({ item }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    if (count > 0) setCount(count - 1)
  }

  const handleAddToCart = () => {
    if (count > 0) addToCart({ ...item, quantity: count })
  }

  return (
    <div className="quantity-ItemCount">
      <label htmlFor={`quantity-${item.id}`}>Cantidad: </label>
      <input type="number" id={`quantity-${item.id}`} className="input-ItemCount" min="0" value={count} readOnly />
      <button className="btn-ItemCount" onClick={handleSubstract}> - </button>
      <button className="btn-ItemCount" onClick={handleAdd}> + </button>
      <button className="btn-ItemCount" onClick={handleAddToCart}> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount
