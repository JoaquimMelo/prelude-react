import Botoes from "../Botoes/botoes";

export default function Menu() {
    return (
        <nav className="home-botoes">
            <Botoes texto="Início" onClick={() => window.location.href = '/'} />
            <Botoes texto="Heróis" onClick={() => window.location.href = '/Herois'} />
            <Botoes texto="Vilões" onClick={() => window.location.href = '/Viloes'} />
            <Botoes texto="História" onClick={() => window.location.href = '/Historia'} />
            <Botoes texto="Mapas" onClick={() => window.location.href = '/Mapas'} />
            <Botoes texto="Como Jogar" onClick={() => window.location.href = '/ComoJogar'} />
            <Botoes texto="Cartas" onClick={() => window.location.href = '/Cartas'} />
        </nav>
    );
}