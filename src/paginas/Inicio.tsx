import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <main className="container mt-5 text-center">
      <h1>Catálogo de Películas</h1>

      <p className="lead">
        Esta aplicación permite revisar diferentes películas
        y consultar la información de cada una.
      </p>

      <Link to="/peliculas" className="btn btn-primary">
        Ver películas
      </Link>
    </main>
  )
}

export default Inicio
