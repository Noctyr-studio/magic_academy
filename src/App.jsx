
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Casas from "./pages/Casas";
import Encuesta from "./pages/Encuesta"
import Libros from "./pages/Libros"
import Profesores from "./pages/Profesores"
import Spells from "./pages/Spells"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casas" element={<Casas />} />
            <Route path="/encuesta" element={<Encuesta />} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/profesores" element={<Profesores />} />
            <Route path="/spells" element={<Spells />} />
        </Routes>
    );
}

export default App;