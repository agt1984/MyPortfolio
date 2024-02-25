import { Route, BrowserRouter as Router,
Routes } from 'react-router-dom'; //se importa de la libreria el router

import { Home, About, Projects, Contact } from './pages'; //se importan las paginas
import Navbar from './components/Navbar';
 
const App = () => {
  return (
    <main className="bg-slate-300/20">
      {/* el router encapsula todos las distintas rutas de las paginas */}
      <Router>
        <Navbar /> {/* navbar por encima de las rutas */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;