import BotonDetalle from '../atomos/BotonDetalle'

interface CardPeliculaProps {
  id: number;
  titulo: string;
  descripcion: string;
  genero: string;
  anio: number;
  imagen: string;
}

function CardPelicula({
  id,
  titulo,
  descripcion,
  genero,
  anio,
  imagen
}: CardPeliculaProps) {
  return (
    <div className="card shadow-sm">
      <img
        src={imagen}
        className="card-img-top pelicula-imagen"
        alt={titulo}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>

        <p className="card-text">{descripcion}</p>

        <p className="mb-1">
          <strong>Género:</strong> {genero}
        </p>

        <p>
          <strong>Año:</strong> {anio}
        </p>

        <div className="mt-auto">
          <BotonDetalle id={id} />
        </div>
      </div>
    </div>
  )
}

export default CardPelicula
