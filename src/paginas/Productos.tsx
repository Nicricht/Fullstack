import CardProducto from '../componentes/moleculas/CardProducto'

function Productos() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Productos</h1>

      {/* Clase de Bootstrap que permite mostrar las Cards horizontalmente */}
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <CardProducto
          id={1}
          titulo="Notebook"
          descripcion="Notebook ideal para estudiar y trabajar."
          precio={599990}
          imagen="/img/notebook.jpg"
        />

        <CardProducto
          id={2}
          titulo="Mouse"
          descripcion="Mouse inalámbrico."
          precio={19990}
          imagen="/img/mouse.jpg"
        />

        <CardProducto
          id={3}
          titulo="Teclado"
          descripcion="Teclado mecánico."
          precio={39990}
          imagen="/img/teclado.jpg"
        />

        <CardProducto
          id={4}
          titulo="Audífonos"
          descripcion="Audífonos Bluetooth inalámbricos."
          precio={29990}
          imagen="/img/audifonos.jpg"
        />
      </div>
    </div>
  )
}

export default Productos
