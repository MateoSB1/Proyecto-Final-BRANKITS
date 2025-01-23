import './styles/ItemDetail.css'
import ItemCount from './ItemCount'

function ItemDetail({ item }) {
    return (
        <div className="container-itemDetal">
            <img src={item.image} alt={item.title} />
            <h2 className="h2-itemDetal">{item.title}</h2>
            <p className="p-itemDetal">{item.description}</p>
            <p className="p-itemDetal">Category: {item.category.toUpperCase()}</p>
            <div className="price-itemDetal">${item.price}</div>
            <ItemCount item={item} />
        </div>
    )
}

export default ItemDetail
