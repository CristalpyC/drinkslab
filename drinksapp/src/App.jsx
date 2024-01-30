import './App.css'
import { DrinksInfoProvider } from './hooks/DrinksContext';
import { MainDrink } from './pages/drinksPage/MainDrink';
import { MainHome } from './pages/home/MainHome';
import { Portrait } from './pages/portrait/Portrait';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <DrinksInfoProvider>
      <Router>
       <Routes>
          <Route path='/' element={<Portrait />}/>
          <Route path='/drinkslab' element={<MainHome />}/>
          <Route path='/drinkslab/drinks/prueba' element={<MainDrink />}/>
       </Routes>
    </Router>
  </DrinksInfoProvider>
  )
}

export default App
