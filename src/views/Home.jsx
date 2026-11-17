import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './Home.css'

function Home() {
  // Datos estáticos guardados en un estado local
  const [platos] = useState([
    { id: 1, emoji: '🥘', nombre: 'Sancocho', descripcion: 'Caldo tradicional con carne y plátano.', precio: 22000 },
    { id: 2, emoji: '🥟', nombre: 'Empanadas', descripcion: 'Crujientes, rellenas de carne y papa.', precio: 8000 },
    { id: 3, emoji: '🍹', nombre: 'Jugo de lulo', descripcion: 'Fresco y natural, hecho al momento.', precio: 6000 },
  ])

  return (
    <main className="home">
      <h1 className="home__titulo">Bienvenido a Sa·zón</h1>
      <p className="home__subtitulo">Nuestros platos del día</p>

      <section className="home__lista">
        {platos.map((plato) => (
          <ProductCard
            key={plato.id}
            emoji={plato.emoji}
            nombre={plato.nombre}
            descripcion={plato.descripcion}
            precio={plato.precio}
          />
        ))}
      </section>
    </main>
  )
}

export default Home