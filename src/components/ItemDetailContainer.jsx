import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching item:', error));
    }, [id])

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
        </div>
    )
}

export default ItemDetailContainer