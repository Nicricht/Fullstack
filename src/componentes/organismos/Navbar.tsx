import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <span className="navbar-brand">
          Catálogo de Películas
        </span>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/peliculas">
            Películas
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar