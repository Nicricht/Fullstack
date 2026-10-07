export interface Pelicula{
    id:number;
    titulo:string;
    descripcion:string;
    genero:string;
    anio: number;
    imagen: string;
}

export const peliculas: Pelicula[]=[
    
    //Primera Película
    {
    id: 1,
    titulo: "Interestelar",
    descripcion: "Un grupo de astronautas viaja por el espacio buscando un nuevo hogar para la humanidad.",
    genero: "Ciencia ficción",
    anio: 2014,
    imagen: "/img/interestelar.jpg"
  },

  {
    id: 2,
    titulo: "Coco",
    descripcion: "Miguel viaja al mundo de los muertos y descubre secretos sobre su familia.",
    genero: "Animación",
    anio: 2017,
    imagen: "/img/coco.jpg"
  },

  {
    id: 3,
    titulo: "Gladiador",
    descripcion: "Un general romano busca justicia después de convertirse en gladiador.",
    genero: "Acción / Drama",
    anio: 2000,
    imagen: "/img/gladiador.jpg"
  },

  {
    id: 4,
    titulo: "Jurassic Park",
    descripcion: "Un parque con dinosaurios clonados se convierte en una peligrosa aventura.",
    genero: "Aventura",
    anio: 1993,
    imagen: "/img/jurassic.jpg"
  }
]


