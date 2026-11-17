# Historia de usuario - Sazón

## HU-01: Ver los platos del día

**Como** visitante del restaurante Sa·zón,
**quiero** ver una página con los platos del día, sus precios y descripciones,
**para** decidir qué quiero comer antes de ir al restaurante.

### Criterios de aceptación
- Se ve una barra de navegación con el logo y los enlaces.
- Se muestran los platos en tarjetas con emoji, nombre, descripción y precio.
- Se ve un pie de página con la información del restaurante.
- Los colores y tipografías siguen el kit de marca de Sazón.

### Ubicación de los componentes

| Componente | Archivo | Qué hace |
|---|---|---|
| Navbar | src/components/Navbar.jsx | Barra superior con logo y enlaces |
| ProductCard | src/components/ProductCard.jsx | Tarjeta de cada plato |
| Footer | src/components/Footer.jsx | Pie de página |
| Home | src/views/Home.jsx | Vista principal, guarda los platos en un estado local |
| Kit de marca | src/styles/brand.css | Colores, fuentes y estilos globales |