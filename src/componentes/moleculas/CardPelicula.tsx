import BotonDetalle from "../atomos/BotonDetalle"

interface CardPeliculaProps{
    id:number;
    titulo:string;
    descripcion:string;
    genero:string;
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

}:CardPeliculaProps){

    return(
    <div className="card" style={{width:"18rem"}}>

        <img
            src={imagen}
            className="card-img-top"
            alt={titulo}
        />
        <div className="card-body">
            <h5 className="card-title">
                {titulo}
            </h5>

            <p className="card-text">
                {descripcion}
            </p>

            <p>
                <strong>Año:</strong> {anio}
            </p>

            <BotonDetalle id={id} />


        </div>

    </div>
    )

}

export default CardPelicula