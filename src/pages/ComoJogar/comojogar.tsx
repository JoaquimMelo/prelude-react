import { useState } from "react";
import "./comojogar.css";

import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import FolhaComoJogar from "../../components/folhacomojogar/folhacomojogar";

import imagemAventura from "../../assets/fundo.jpg";
import painelHerois from "../../assets/icones/Três heróis no painel pixel art.png";
import iconeObjetivo from "../../assets/icones/Icone_Inicio_Vhaldrak_v2.png";
import brasaoHerois from "../../assets/FotosHerois/brasaoHerois.png";

const folhas = [
  {
    id: "objetivo",
    nome: "Objetivo",
    titulo: "Objetivo da campanha",
    romano: "I",
    numero: "01",
    rodape: "Guia do aventureiro",
    conteudo: (
      <>
        <p className="como-jogar__texto">
          Prelude é um jogo de aventura e construção de baralho. Você escolhe
          seu caminho pelo mapa, enfrenta inimigos em combates por turnos e
          fortalece seu grupo ao longo da jornada.
        </p>

        <img
          className="como-jogar__imagem"
          src={imagemAventura}
          alt="Aventureiros reunidos ao redor de uma fogueira ao pôr do sol"
          width={1024}
          height={576}
        />

        <div className="como-jogar__destaque">
          <img className="como-jogar__icone" src={iconeObjetivo} alt="" />
          <div>
            <h3>Objetivo principal</h3>
            <p className="como-jogar__texto">
              Atravesse as três regiões de Prelude e derrote o chefe de cada uma
              para completar a campanha.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "preparacao",
    nome: "Preparação",
    titulo: "Prepare seu grupo",
    romano: "II",
    numero: "02",
    rodape: "Preparação",
    conteudo: (
      <>
        <img
          className="como-jogar__imagem"
          src={painelHerois}
          alt="Exemplo de um grupo com três cartas de heróis lado a lado"
          width={1735}
          height={906}
        />

        <div className="como-jogar__destaque">
          <img className="como-jogar__icone" src={brasaoHerois} alt="" />
          <div>
            <h3>Heróis do grupo</h3>
            <p className="como-jogar__texto">
              Heróis são os personagens que você controla. Cada um tem sua
              própria classe, vida e defesa. Você começa com um herói e recruta
              mais um a cada chefe derrotado.
            </p>
          </div>
        </div>

        <div className="como-jogar__destaque">
          <svg
            className="como-jogar__icone"
            viewBox="0 0 16 16"
            aria-hidden="true"
            shapeRendering="crispEdges"
          >
            <path fill="#79502c" d="M2 2h9v2h3v10H5v-2H2z" />
            <path fill="#ecd29a" d="M4 4h1v6H4zm3 2h5v6H7z" />
            <path fill="#79502c" d="M9 8h1v2H9z" />
          </svg>
          <div>
            <h3>Deck de cada herói</h3>
            <p className="como-jogar__texto">
              Cada herói começa com 10 cartas. São três ataques, três defesas,
              uma especial e três cartas comuns. A mão e o descarte também são
              individuais.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default function ComoJogar() {
  const [folhaSelecionada, setFolhaSelecionada] = useState(0);

  return (
    <div className="pagina-como-jogar">
      <Menu />

      <main className="como-jogar">
        <header className="como-jogar__introducao">
          <h1 className="como-jogar__titulo">Como jogar</h1>
          <p className="como-jogar__subtitulo">Guia do aventureiro</p>
        </header>

        <div className="como-jogar__guia">
          <nav className="como-jogar__indice" aria-labelledby="titulo-indice">
            <h2 id="titulo-indice">Índice</h2>

            {folhas.map((folha, indice) => (
              <button
                key={folha.id}
                type="button"
                className="como-jogar__botao"
                aria-controls={folha.id}
                aria-pressed={folhaSelecionada === indice}
                onClick={() => setFolhaSelecionada(indice)}
              >
                <span className="como-jogar__numero">{folha.numero}</span>
                {folha.nome}
              </button>
            ))}
          </nav>

          <div className="como-jogar__livro">
            {folhas.map((folha, indice) => (
              <FolhaComoJogar
                key={folha.id}
                id={folha.id}
                titulo={folha.titulo}
                romano={folha.romano}
                numero={folha.numero}
                rodape={folha.rodape}
                ativa={folhaSelecionada === indice}
              >
                {folha.conteudo}
              </FolhaComoJogar>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
