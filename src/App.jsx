import './App.css'
//Importaciones react-router-dom
import { Routes, Route } from 'react-router-dom'
//Importaciones de Rutas
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeInfo from './pages/PokeInfo'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokeInfo />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
