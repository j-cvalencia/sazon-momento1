
---

## HU 4.2.1: Implementación visual del semáforo de aportes nutricionales

**Rama:** feature/nutricion/G4-SEM-F01-indicadores

**Como** persona que consulta una receta,
**quiero** ver un semáforo que resalte los niveles altos o moderados de sodio y grasas,
**para** saber si la receta es adecuada antes de prepararla.

### Criterios de aceptación
1. Se consumen las reglas de validación devueltas por el servicio de nutrición (mockApi).
2. Se aplican las clases dinámicas `.nutricion-semaforo-alerta` y `.nutricion-semaforo-ok` según los umbrales de la receta.
3. Solo se usan los colores de la paleta corporativa definida en `src/styles/sazon.css`.
4. La estructura es semántica y accesible (section, listas con etiqueta, aria-live para lectores de pantalla).

### Ubicación de los componentes

| Componente | Archivo | Qué hace |
|---|---|---|
| mockApi | src/services/mockApi.js | Simula el servicio de nutrición con recetas, reglas y totales |
| Lógica del semáforo | src/components/Nutricion/nutricionSemaforoLogica.js | Calcula si cada aporte es ok o alerta |
| NutricionSemaforo | src/components/Nutricion/NutricionSemaforo.jsx | Muestra el semáforo completo |
| IndicadorNutriente | src/components/Nutricion/IndicadorNutriente.jsx | Tarjeta de sodio o de grasas |
| Estilos del semáforo | src/components/Nutricion/NutricionSemaforo.css | Clases ok y alerta con la paleta de Sazón |
| Home | src/views/Home.jsx | Vista principal, pide los datos al mockApi y los guarda en estados locales |