import { useEffect, useState } from 'react'
import { mockApi } from '../services/mockApi'
import ProductCard from '../components/ProductCard'
import NutricionSemaforo from '../components/Nutricion/NutricionSemaforo'
import './Home.css'

function Home() {
  // Estados locales
  const [recetas, setRecetas] = useState([])
  const [idSeleccionado, setIdSeleccionado] = useState(1)
  const [analisis, setAnalisis] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  // Carga la lista de recetas (botones) una sola vez
  useEffect(() => {
    mockApi
      .listarRecetas()
      .then(setRecetas)
      .catch(() => setError('No pudimos cargar las recetas.'))
  }, [])

  // Carga el análisis cada vez que cambia la receta elegida
  useEffect(() => {
    let activo = true

    mockApi
      .obtenerAnalisis(idSeleccionado)
      .then((datos) => {
        if (activo) setAnalisis(datos)
      })
      .catch(() => {
        if (activo) setError('No pudimos cargar el análisis de la receta.')
      })
      .finally(() => {
        if (activo) setCargando(false)
      })

    return () => {
      activo = false
    }
  }, [idSeleccionado])

  const elegirReceta = (id) => {
    setCargando(true)
    setError('')
    setIdSeleccionado(id)
  }

  return (
    <main className="home">
      <h1 className="home__titulo">Análisis nutricional de recetas</h1>
      <p className="home__subtitulo">Semáforo de aportes · Sa·zón</p>

      <nav className="home__selector" aria-label="Elegir receta">
        {recetas.map((receta) => (
          <button
            key={receta.id}
            type="button"
            className={`home__boton ${receta.id === idSeleccionado ? 'home__boton--activo' : ''}`}
            aria-pressed={receta.id === idSeleccionado}
            onClick={() => elegirReceta(receta.id)}
          >
            {receta.emoji} {receta.nombre}
          </button>
        ))}
      </nav>

      {error && (
        <p className="home__mensaje" role="alert">
          {error}
        </p>
      )}

      {cargando && !error && (
        <p className="home__mensaje" role="status">
          Cargando análisis...
        </p>
      )}

      {analisis && !cargando && !error && (
        <section className="home__receta">
          <ProductCard
            emoji={analisis.emoji}
            nombre={analisis.nombre}
            descripcion={analisis.descripcion}
            precio={analisis.precio}
          />
          <NutricionSemaforo
            reglasNutricionales={analisis.reglasNutricionales}
            totales={analisis.totales}
          />
        </section>
      )}
    </main>
  )
}

export default Home