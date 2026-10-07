import { Link } from 'react-router-dom'

function BotonVolver() {
  return (
    <Link className="btn btn-secondary" to="/peliculas">
      Volver a Películas
    </Link>
  )
}

export default BotonVolver
