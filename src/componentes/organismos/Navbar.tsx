import NavItem from '../atomos/NavItem'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Catálogo de Películas
        </span>

        <div className="navbar-nav ms-auto">
          <NavItem texto="Inicio" ruta="/" />
          <NavItem texto="Películas" ruta="/peliculas" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
