import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SobreMi from './components/SobreMi/SobreMi';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
    return (
    	<div className='App'>
            <header><NavBar /></header>
            <Router>
                <Routes>
                    <Route exact path="/github-portfolio" element={<Home />} />
                    <Route path="/sobremi" element={<SobreMi />} />
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
