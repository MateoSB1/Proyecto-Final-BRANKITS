import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProduct } from '../firebase/db.js'
import ItemDetail from './ItemDetail'
import './styles/ItemDetail.css'

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProduct(id)
            .then(res => setItem(res))
    }, [id])

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p className="p-itemDetalLog">Loading...</p>}
        </div>
    )
}

export default ItemDetailContainer