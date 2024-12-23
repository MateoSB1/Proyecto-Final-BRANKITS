import { Link } from 'react-router'
import './styles/Item.css'

function Item({ item }) {
    return (
        <main className="container">
            <div className="product-card">
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Category: {item.category}</p>
                <div className="price">{item.price}</div>
                <div className="quantity">
                    <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                    <input id={`quantity-${item.id}`} type="number" min="0" defaultValue="0" />
                    <Link to={`/item/${item.id}`} className="btn">Ver más</Link>
                </div>
            </div>
        </main>
    )
}

export default Item