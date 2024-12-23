import './styles/ItemDetail.css';

function ItemDetail({ item }) {
    return (
        <div className="container-itemDetal">
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
                <p>Category: {item.category}</p>
                <div className="price-itemDetal">{item.price}</div>
                <div className="quantity-itemDetal">
                    <label htmlFor={`quantity-${item.id}`}>Cantidad: </label>
                    <input id={`quantity-${item.id}`} type="number" min="0" defaultValue="0" />
                    <button className="btn-itemDetal">Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemDetail
