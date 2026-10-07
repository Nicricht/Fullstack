import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mi Tienda
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/productos">
            Productos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
