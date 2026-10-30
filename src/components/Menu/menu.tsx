import Botoes from "../Botoes/botoes";
import "./Menu.css";
import logo from "../../assets/logo.png";

export default function Menu() {
  return (
    <nav className="home-botoes">
      <a className="menu-logo" href="/">
        <img src={logo} alt="Prelude — página inicial" />
      </a>
      <Botoes texto="Início" onClick={() => (window.location.href = "/")} />
      <Botoes
        texto="Heróis"
        onClick={() => (window.location.href = "/Herois")}
      />
      <Botoes
        texto="Vilões"
        onClick={() => (window.location.href = "/Viloes")}
      />
      <Botoes
        texto="História"
        onClick={() => (window.location.href = "/Historia")}
      />
      <Botoes texto="Mapas" onClick={() => (window.location.href = "/Mapas")} />
      <Botoes
        texto="Como Jogar"
        onClick={() => (window.location.href = "/ComoJogar")}
      />
      <Botoes
        texto="Cartas"
        onClick={() => (window.location.href = "/Cartas")}
      />
    </nav>
  );
}
