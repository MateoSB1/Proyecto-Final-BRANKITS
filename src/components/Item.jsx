import { Link } from 'react-router'
import './styles/Item.css'

function Item({ item }) {
    return (
        <main className="container">
            <div className="product-card">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p className="product-card-p">{item.description}</p>
                <p className="product-card-p">Category: {item.category.toUpperCase()}</p>
                <div className="price">${item.price}</div>
                <Link to={`/item/${item.id}`} className="btn">Ver más</Link>
            </div>
        </main>
    )
}

export default Item