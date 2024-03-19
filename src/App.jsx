
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio'
import Proyectos from './Proyectos/Proyectos'
import SobreMi from './SobreMi/SobreMi'
import Menu from './Menu/Menu'

function App() {

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/'element={<Inicio/>}/> 
        <Route path='/proyectos'element={<Proyectos/>}/> 
        <Route path='/sobremi'element={<SobreMi/>}/> 

      </Routes>
    </div>
  )
}

export default App
