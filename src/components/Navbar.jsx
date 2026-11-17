import './Navbar.css'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo Sazón" className="navbar__logo" />
      <ul className="navbar__links">
        <li>Inicio</li>
        <li>Menú</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar