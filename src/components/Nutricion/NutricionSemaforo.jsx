import './NutricionSemaforo.css'
import IndicadorNutriente from './IndicadorNutriente'
import { calcularIndicadores, obtenerMensajeEstado } from './nutricionSemaforoLogica'

function NutricionSemaforo({
  reglasNutricionales = null,
  totales = null,
  titulo = 'Semáforo de aportes nutricionales',
}) {
  // Los indicadores salen de las reglas que devolvió el servicio (mockApi)
  const indicadores = calcularIndicadores(reglasNutricionales, totales)

  let contenido = (
    <ul className="nutricion-semaforo__lista" aria-label="Indicadores de sodio y grasas">
      {indicadores.map((indicador) => (
        <IndicadorNutriente key={indicador.clave} indicador={indicador} />
      ))}
    </ul>
  )

  if (indicadores.length === 0) {
    contenido = (
      <p className="nutricion-semaforo__aviso" role="status">
        No hay reglas de validación nutricional disponibles para esta receta.
      </p>
    )
  }

  return (
    <section className="nutricion-semaforo" aria-labelledby="nutricion-semaforo-titulo">
      <header className="nutricion-semaforo__encabezado">
        <p className="nutricion-semaforo__etiqueta">Análisis de receta</p>
        <h2 id="nutricion-semaforo-titulo" className="nutricion-semaforo__titulo">
          {titulo}
        </h2>
        <p className="nutricion-semaforo__ayuda">
          Los indicadores se determinan con los umbrales enviados por el servicio de nutrición.
        </p>
      </header>

      {contenido}

      <span className="sr-only" aria-live="polite">
        {obtenerMensajeEstado(indicadores)}
      </span>
    </section>
  )
}

export default NutricionSemaforo