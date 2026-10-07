import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/organismos/Navbar'
import Inicio from './paginas/Inicio'
import Productos from './paginas/Productos'
import DetalleProducto from './paginas/DetalleProducto'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </>
  )
}

export default App
