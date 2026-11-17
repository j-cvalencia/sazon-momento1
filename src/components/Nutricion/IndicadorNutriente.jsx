import { formatoNumero, tieneUmbralModerado } from './nutricionSemaforoLogica'

// Tarjeta de un nutriente (sodio o grasas) con su nivel
function IndicadorNutriente({ indicador }) {
  return (
    <li
      className={`nutricion-semaforo__indicador nutricion-semaforo-${indicador.nivel}`}
      aria-label={`${indicador.nombre}: ${indicador.etiqueta}. Valor ${formatoNumero(indicador.valor)} ${indicador.unidad}.`}
    >
      <div className="nutricion-semaforo__cabecera">
        <h3 className="nutricion-semaforo__nombre">{indicador.nombre}</h3>
        <span className="nutricion-semaforo__estado">
          <span className="nutricion-semaforo__punto" aria-hidden="true" />
          {indicador.etiqueta}
        </span>
      </div>

      <p className="nutricion-semaforo__valor">
        {formatoNumero(indicador.valor)}{' '}
        <span className="nutricion-semaforo__unidad">{indicador.unidad}</span>
      </p>
      <p className="nutricion-semaforo__ayuda">{indicador.explicacion}</p>

      <dl className="nutricion-semaforo__umbrales">
        {tieneUmbralModerado(indicador.umbralModerado) && (
          <div>
            <dt className="nutricion-semaforo__ayuda">Umbral moderado</dt>
            <dd className="nutricion-semaforo__dato">
              {formatoNumero(indicador.umbralModerado)} {indicador.unidad}
            </dd>
          </div>
        )}
        <div>
          <dt className="nutricion-semaforo__ayuda">Umbral alto</dt>
          <dd className="nutricion-semaforo__dato">
            {formatoNumero(indicador.umbralAlto)} {indicador.unidad}
          </dd>
        </div>
      </dl>
    </li>
  )
}

export default IndicadorNutriente