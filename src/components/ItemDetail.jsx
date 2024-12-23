// import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
    return (
        <div>
            <img src={item?.thumbnail} alt={item?.title}/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            {/* <ItemCount /> */}
        </div>
    )
}

export default ItemDetail