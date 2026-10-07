import {Link} from "react-router-dom"
interface BotonDetalleProps{
    id:number;
}


function BotonDetalle({id}:BotonDetalleProps){

return(<Link to={`/peliculas/${id}`}
        className="btn btn-primary"
        >
            Ver detalle
        </Link>
)
}
export default BotonDetalle




