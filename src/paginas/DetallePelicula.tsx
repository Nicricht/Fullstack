import { useParams } from 'react-router-dom'
import BotonVolver from '../componentes/atomos/BotonVolver'
import { peliculas } from '../datos/peliculas'

function DetallePelicula() {
  const { id } = useParams()

  const peliculaSeleccionada = peliculas.find(
    (pelicula) => pelicula.id === Number(id)
  )

  if (!peliculaSeleccionada) {
    return (
      <main className="container mt-5 text-center">
        <h1>Película no encontrada</h1>
        <BotonVolver />
      </main>
    )
  }

  return (
    <main className="container mt-4 mb-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4">
          <img
            src={peliculaSeleccionada.imagen}
            alt={peliculaSeleccionada.titulo}
            className="detalle-imagen"
          />
        </div>

        <div className="col-md-7">
          <h1>{peliculaSeleccionada.titulo}</h1>

          <p>{peliculaSeleccionada.descripcion}</p>

          <p>
            <strong>Género:</strong> {peliculaSeleccionada.genero}
          </p>

          <p>
            <strong>Año de estreno:</strong> {peliculaSeleccionada.anio}
          </p>

          <BotonVolver />
        </div>
      </div>
    </main>
  )
}

export default DetallePelicula
