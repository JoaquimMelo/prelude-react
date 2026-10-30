import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.tsx";
import Herois from "./pages/Herois/herois.tsx";
import Viloes from "./pages/Viloes/viloes.tsx";
import Suporte from "./pages/Suporte/suporte.tsx";
import Mapas from "./pages/Mapas/mapas.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/herois" element={<Herois />} />
      <Route path="/viloes" element={<Viloes />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/Mapas" element={<Mapas />} />
    </Routes>
  );
}

/*Aqui eu vou colocar tudo que eu quiser renderizar*/
