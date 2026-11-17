import './ProductCard.css'

function ProductCard({ emoji, nombre, descripcion, precio }) {
  return (
    <article className="card">
      <div className="card__emoji">{emoji}</div>
      <h3 className="card__titulo">{nombre}</h3>
      <p className="card__texto">{descripcion}</p>
      <span className="card__precio">${precio}</span>
    </article>
  )
}

export default ProductCard