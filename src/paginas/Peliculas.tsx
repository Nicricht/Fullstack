import CardPelicula from "../componentes/moleculas/CardPelicula"
import { peliculas } from "../datos/Peliculas"

function Peliculas() {
  return (
    <div className="container mt-4">

      <h1 className="text-center">
        Películas
      </h1>

      <div className="row g-4">

        {peliculas.map((pelicula) => (

          <div
            className="col-md-6 col-lg-3"
            key={pelicula.id}
          >

            <CardPelicula
              id={pelicula.id}
              titulo={pelicula.titulo}
              descripcion={pelicula.descripcion}
              genero={pelicula.genero}
              anio={pelicula.anio}
              imagen={pelicula.imagen}
            />

          </div>

        ))}

      </div>
    </div>
  )
}

export default Peliculas