import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/organismos/Navbar'
import Inicio from './paginas/Inicio'
import Peliculas from './paginas/Peliculas'
import DetallePelicula from './paginas/DetallePelicula'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/peliculas/:id" element={<DetallePelicula />} />
      </Routes>
    </>
  )
}

export default App
