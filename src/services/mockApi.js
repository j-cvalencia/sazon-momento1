// mockApi: simula un servidor de nutrición (datos de mentira, sin base de datos)

const ESPERA_MS = 300 // simula lo que demora una petición

const recetas = [
  {
    id: 1,
    emoji: '🌭',
    nombre: 'Perro caliente con Ranchera',
    descripcion: 'Salchicha Ranchera, pan, queso rallado y salsa de tomate.',
    precio: 9000,
    // Reglas de validación que devuelve el servicio de nutrición
    reglasNutricionales: {
      sodio: { moderado: 1200, alto: 2000, unidad: 'mg' },
      grasas: { moderado: 15, alto: 25, unidad: 'g' },
    },
    // Lo que aporta la receta completa
    totales: { sodio: 700, grasas: 18 },
  },
  {
    id: 2,
    emoji: '🥗',
    nombre: 'Ensalada de pollo',
    descripcion: 'Pollo a la plancha, lechuga, tomate y limón.',
    precio: 14000,
    reglasNutricionales: {
      sodio: { moderado: 1200, alto: 2000, unidad: 'mg' },
      grasas: { moderado: 15, alto: 25, unidad: 'g' },
    },
    totales: { sodio: 350, grasas: 8 },
  },
  {
    id: 3,
    emoji: '🍔',
    nombre: 'Hamburguesa doble',
    descripcion: 'Doble carne, queso, tocineta y salsas.',
    precio: 22000,
    reglasNutricionales: {
      sodio: { moderado: 1200, alto: 2000, unidad: 'mg' },
      grasas: { moderado: 15, alto: 25, unidad: 'g' },
    },
    totales: { sodio: 2300, grasas: 32 },
  },
]

// Espera unos milisegundos (para simular una petición)
function esperar(milisegundos) {
  return new Promise((resolver) => setTimeout(resolver, milisegundos))
}

export const mockApi = {
  // Lista corta de recetas para los botones
  async listarRecetas() {
    await esperar(ESPERA_MS)
    return recetas.map((receta) => ({
      id: receta.id,
      emoji: receta.emoji,
      nombre: receta.nombre,
    }))
  },

  // Receta completa con sus reglas y totales
  async obtenerAnalisis(idReceta) {
    await esperar(ESPERA_MS)
    const receta = recetas.find((item) => item.id === idReceta)
    if (!receta) {
      throw new Error('No encontramos la receta')
    }
    return receta
  },
}