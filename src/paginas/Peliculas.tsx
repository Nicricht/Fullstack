import CardPelicula from '../componentes/moleculas/CardPelicula'
import { peliculas } from '../datos/peliculas'

function Peliculas() {
  return (
    <main className="container mt-4 mb-5">
      <h1 className="text-center">Películas</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {peliculas.map((pelicula) => (
          <div className="col" key={pelicula.id}>
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
    </main>
  )
}

export default Peliculas
