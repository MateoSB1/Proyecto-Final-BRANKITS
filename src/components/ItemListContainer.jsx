import { StrictMode } from 'react'
import './ItemListContainer.css'
import CamisetaArgAdidas101994 from "../assets/images/CamisetaArgAdidas101994.jpg";
import CamisetaBocaAdidasAzul from "../assets/images/CamisetaBocaAdidasAzul.jpg";
import CamisetaMessiArgAdidasTitular from "../assets/images/CamisetaMessiArgAdidasTitular.jpg";
import CamisetaArgAdidas50Aniversario from "../assets/images/CamisetaArgAdidas50Aniversario.jpg";

function ItemListContainer() {
  const products = [
    {
      id: 1,
      imgSrc: CamisetaArgAdidas101994,
      title: "Camiseta De Argentina Adidas 10 Alternativa 1994 Azul",
      badge: "Argentina",
      price: "$177.765",
    },
    {
      id: 2,
      imgSrc: CamisetaBocaAdidasAzul,
      title: "Camiseta De Boca Adidas Oficial Azul",
      badge: "Boca Juniors",
      price: "$133.325",
    },
    {
      id: 3,
      imgSrc: CamisetaMessiArgAdidasTitular,
      title: "Camiseta De Messi Argentina Adidas Titular",
      badge: "Argentina",
      price: "$155.545",
    },
    {
      id: 4,
      imgSrc: CamisetaArgAdidas50Aniversario,
      title: "Camiseta De Argentina Adidas 50 Aniversario Blanca",
      badge: "Argentina",
      price: "$149.999",
    },
  ]

  return (
    <main className="container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imgSrc} alt={product.title} />
          <h2>{product.title}</h2>
          <div className="badge">{product.badge}</div>
          <div className="price">{product.price}</div>
          <div className="quantity">
            <label htmlFor={`quantity-${product.id}`}>Cantidad:</label>
            <input id={`quantity-${product.id}`} type="number" min="0" defaultValue="0" />
            <button>Agregar</button>
          </div>
        </div>
      ))}
    </main>
  )
}

export default ItemListContainer
