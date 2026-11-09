import { useState } from "react";
import "./comojogar.css";

import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import FolhaComoJogar from "../../components/folhacomojogar/folhacomojogar";

import imagemAventura from "../../assets/fundo.jpg";
import painelHerois from "../../assets/icones/Três heróis no painel pixel art.png";
import iconeObjetivo from "../../assets/icones/Icone_Inicio_Vhaldrak_v2.png";
import brasaoHerois from "../../assets/FotosHerois/brasaoHerois.png";
import arenaVhaldrak from "../../assets/Mapas/campo-vhaldrak.png";
import trilhaVhaldrak from "../../assets/Mapas/trilha-vhaldrak.png";
import iconeBatalha from "../../assets/icones/Icone_Batalha_Espelhado.png";
import iconeLoja from "../../assets/icones/Icone_Loja_Mapas.png";
import iconeAcampamento from "../../assets/icones/Icone_Acampamento_Fogueira.png";
import iconeMoedas from "../../assets/icones/Icone_Moeda_Mapas.png";
import iconeChefe from "../../assets/icones/Icone_Chefao_Caveira.png";
import bolaDeFogo from "../../assets/cartas/Herois/mago-merovin/bola_de_fogo.png";
import barreiraRunica from "../../assets/cartas/Herois/mago-merovin/barreira_runica.png";
import eclipseEscarlate from "../../assets/cartas/Herois/mago-merovin/eclipse_escarlate.png";

const partesDaArena = [
  {
    nome: "Baralho de compra",
    descricao:
      "À esquerda ficam as cartas que você vai comprar, viradas para baixo.",
    x: "7%",
    y: "48%",
  },
  {
    nome: "Arena",
    descricao:
      "As cartas dos inimigos ficam na parte de cima. As suas ficam na parte de baixo.",
    x: "47%",
    y: "40%",
  },
  {
    nome: "Mão de cartas",
    descricao:
      "Abaixo da arena ficam as cartas que você tem disponíveis para jogar.",
    x: "47%",
    y: "85%",
  },
  {
    nome: "Histórico de ações",
    descricao:
      "À direita, você acompanha as ações do seu grupo e dos inimigos.",
    x: "90%",
    y: "64%",
  },
  {
    nome: "Posições dos personagens",
    descricao:
      "Os retratos acima do histórico indicam quem está à esquerda, ao centro ou à direita na arena.",
    x: "90%",
    y: "22%",
  },
];

const cartasDeExemplo = [
  {
    tipo: "Ataque",
    nome: "Bola de Fogo",
    imagem: bolaDeFogo,
    descricao:
      "Cartas de ataque causam dano a um ou mais inimigos. Cada herói tem acesso a três cartas de ataque únicas e três universais.",
  },
  {
    tipo: "Defesa",
    nome: "Barreira Rúnica",
    imagem: barreiraRunica,
    descricao:
      "Cartas de defesa reduzem o dano recebido, aumentam a defesa ou curam aliados. Cada herói tem acesso a três cartas de defesa únicas e três universais.",
  },
  {
    tipo: "Especial",
    nome: "Eclipse Escarlate",
    imagem: eclipseEscarlate,
    descricao:
      "Cartas especiais são exclusivas de cada herói e têm efeitos poderosos e variados. Só podem ser usadas uma vez por turno.",
  },
];

const encontrosDaTrilha = [
  {
    nome: "Batalha",
    icone: iconeBatalha,
    alt: "Espadas cruzadas",
    descricao:
      "Enfrente inimigos em um combate por turnos para avançar pela trilha.",
  },
  {
    nome: "Loja",
    icone: iconeLoja,
    alt: "Barraca de comércio",
    descricao:
      "Use as moedas do grupo para comprar cartas e fortalecer seu baralho.",
  },
  {
    nome: "Acampamento",
    icone: iconeAcampamento,
    alt: "Fogueira",
    descricao: "Faça uma pausa para recuperar a vida dos heróis.",
  },
  {
    nome: "Moedas e recompensas",
    icone: iconeMoedas,
    alt: "Moeda dourada",
    descricao:
      "Vencer combates rende moedas. O saldo aparece no canto inferior esquerdo do mapa.",
  },
];

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
  {
    id: "combate",
    nome: "Combate",
    titulo: "Combate e turnos",
    romano: "III",
    numero: "03",
    rodape: "Combate",
    conteudo: (
      <>
        <div className="como-jogar__arena">
          <img
            className="como-jogar__imagem"
            src={arenaVhaldrak}
            alt="Tabuleiro de combate de Vhaldrak com as áreas numeradas"
            width={1672}
            height={941}
          />

          {partesDaArena.map((parte, indice) => (
            <span
              key={parte.nome}
              className="como-jogar__marcador"
              style={{ left: parte.x, top: parte.y }}
              aria-hidden="true"
            >
              {indice + 1}
            </span>
          ))}
        </div>

        <ol className="como-jogar__legenda como-jogar__texto">
          {partesDaArena.map((parte) => (
            <li key={parte.nome}>
              <strong>{parte.nome}.</strong> {parte.descricao}
            </li>
          ))}
        </ol>

        <p className="como-jogar__texto">
          Cada herói compra três cartas no início do combate e duas nas rodadas
          seguintes. Por rodada, você pode jogar uma carta por herói. Os
          inimigos agem depois do seu grupo.
        </p>
      </>
    ),
  },
  {
    id: "cartas",
    nome: "Cartas",
    titulo: "Suas cartas",
    romano: "IV",
    numero: "04",
    rodape: "Cartas",
    conteudo: (
      <>
        <figure className="como-jogar__exemplos">
          <div className="como-jogar__cartas">
            {cartasDeExemplo.map((carta) => (
              <img
                key={carta.tipo}
                src={carta.imagem}
                alt={carta.nome + " — " + carta.tipo}
                width={1060}
                height={1484}
              />
            ))}
          </div>
          <figcaption>
            A arte da carta especial ainda mostra o limite da versão anterior.
          </figcaption>
        </figure>

        <ul className="como-jogar__legenda como-jogar__texto">
          {cartasDeExemplo.map((carta) => (
            <li key={carta.tipo}>
              <strong>{carta.tipo}.</strong> {carta.descricao}
            </li>
          ))}
        </ul>

        <section className="como-jogar__ciclo">
          <h3>O caminho das cartas</h3>
          <ol className="como-jogar__fluxo" role="list">
            <li>Compra</li>
            <li>Mão</li>
            <li>Descarte</li>
          </ol>
          <p className="como-jogar__texto">
            As cartas compradas vão para a mão. Depois de jogar uma carta,
            coloque-a no descarte. Quando a pilha de compra acabar, embaralhe o
            descarte para formar uma nova pilha.
          </p>
        </section>
      </>
    ),
  },
  {
    id: "rotas",
    nome: "Rotas",
    titulo: "Escolha seu caminho",
    romano: "V",
    numero: "05",
    rodape: "Mapa e rotas",
    conteudo: (
      <>
        <img
          className="como-jogar__imagem"
          src={trilhaVhaldrak}
          alt="Trilha de Vhaldrak com caminhos de batalha, loja e acampamento que levam a Malakar"
          width={1600}
          height={900}
        />

        <p className="como-jogar__texto">
          Escolha um caminho ligado ao ponto onde o grupo está. Cada avanço pode
          levar a uma batalha, uma loja ou um acampamento. Em Vhaldrak, a
          primeira escolha é entre lutar e acampar.
        </p>

        <p className="como-jogar__texto">
          No fim de cada mapa, enfrente o chefe da região. Em qualquer combate,
          se todos os heróis chegarem a 0 de vida, a jornada termina em derrota.
        </p>

        <ol className="como-jogar__fluxo" role="list">
          <li>Início</li>
          <li>Encontros</li>
          <li>Chefe</li>
        </ol>
      </>
    ),
  },
  {
    id: "encontros",
    nome: "Encontros",
    titulo: "Encontros da jornada",
    romano: "VI",
    numero: "06",
    rodape: "Encontros",
    conteudo: (
      <>
        {encontrosDaTrilha.map((encontro) => (
          <div className="como-jogar__destaque" key={encontro.nome}>
            <img
              className="como-jogar__icone"
              src={encontro.icone}
              alt={encontro.alt}
            />
            <div>
              <h3>{encontro.nome}</h3>
              <p className="como-jogar__texto">{encontro.descricao}</p>
            </div>
          </div>
        ))}

        <div className="como-jogar__destaque como-jogar__destaque--chefe">
          <img className="como-jogar__icone" src={iconeChefe} alt="Caveira" />
          <div>
            <h3>Chefe e progressão</h3>
            <p className="como-jogar__texto">
              O chefe é um inimigo poderoso que comanda a região e tem mecânicas
              de combate únicas.
            </p>
            <p className="como-jogar__texto">
              A vitória revela a próxima área do mapa, se houver outra. O jogo
              sorteia três personagens, e você escolhe apenas um para entrar no
              grupo.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default function ComoJogar() {
  const [folhaSelecionada, setFolhaSelecionada] = useState(0);
  const folhaAtual = folhas[folhaSelecionada];
  const inicioDoPar = Math.floor(folhaSelecionada / 2) * 2;
  const folhasDoPar = folhas.slice(inicioDoPar, inicioDoPar + 2);

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
                aria-controls="livro-como-jogar"
                aria-pressed={folhaSelecionada === indice}
                onClick={() => setFolhaSelecionada(indice)}
              >
                <span className="como-jogar__numero">{folha.numero}</span>
                {folha.nome}
              </button>
            ))}
          </nav>

          <div className="como-jogar__livro" id="livro-como-jogar">
            {folhasDoPar.map((folha) => (
              <FolhaComoJogar
                key={folha.id}
                id={folha.id}
                titulo={folha.titulo}
                romano={folha.romano}
                numero={folha.numero}
                rodape={folha.rodape}
                ativa={folha.id === folhaAtual.id}
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
