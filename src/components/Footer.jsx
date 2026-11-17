import './Footer.css'

const marcas = [
  { nombre: 'Zenú', color: 'var(--marca-zenu)' },
  { nombre: 'Doria', color: 'var(--marca-doria)' },
  { nombre: 'Pietrán', color: 'var(--marca-pietran)' },
  { nombre: 'Noel', color: 'var(--marca-noel)' },
]

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__contenido">
        <article>
          <p className="footer__equipo">Equipo de Desarrollo Sa·zón</p>
          <p className="footer__copy">
            Copyright © 2026 Grupo Nutresa · Todos los derechos reservados
          </p>
        </article>

        <nav className="footer__marcas">
          {marcas.map((marca) => (
            <span
              key={marca.nombre}
              className="footer__marca"
              style={{ color: marca.color }}
            >
              {marca.nombre}
            </span>
          ))}
        </nav>
      </section>
    </footer>
  )
}

export default Footer