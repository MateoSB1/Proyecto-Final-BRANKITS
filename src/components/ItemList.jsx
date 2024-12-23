import Item from './Item';
import './styles/ItemList.css';

function ItemList({ items }) {
    return (
        <div className="container">
            <div className="item-grid">
                {items.map(item => <Item item={item} key={item.id} />)}
            </div>
        </div>
    );
}

export default ItemList;
