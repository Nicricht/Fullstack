import { Link } from 'react-router-dom'

interface BotonDetalleProps {
  id: number;
}

function BotonDetalle({ id }: BotonDetalleProps) {
  return (
    <Link className="btn btn-primary" to={`/peliculas/${id}`}>
      Ver detalle
    </Link>
  )
}

export default BotonDetalle
