//importaçoes de bibliotecas
import { useState } from "react"; //
import "./mapas.css";
//importaçoes de componentes
import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import RegiaoMapa from "../../components/Regioes.mapa/regiaomapa";
//importaçoes de imagens
import trilhaVhaldrak from "../../assets/Mapas/trilha-vhaldrak.png";
import campoVhaldrak from "../../assets/Mapas/campo-vhaldrak.png";
import trilhaFloresta from "../../assets/Mapas/trilha-floresta.png";
import campoFloresta from "../../assets/Mapas/campo-floresta.png";
import trilhaMontanhas from "../../assets/Mapas/trilha-montanhas.png";
import campoMontanhas from "../../assets/Mapas/campo-montanhas.png";

// Dados das regiões arrays/listas contendo objetos como nome, numero descrição etc
const regioes = [
  {
    nome: "Vhaldrak",
    numero: "Região I",
    descricao:
      "Uma cidade destruída, marcada por fogo e cinzas. Ruas em ruínas e um exército carbonizado compõem o cenário da primeira região.",
    trilha: trilhaVhaldrak,
    campo: campoVhaldrak,
    mecanica:
      "Em Vhaldrak, os heróis podem seguir diferentes rotas entre batalhas, lojas e acampamentos. Os caminhos conduzem ao confronto com Malakar, o Tirano das Cinzas.",
  },
  {
    nome: "Floresta Sombria",
    numero: "Região II",
    descricao:
      "Uma floresta escura, tomada pela corrupção. Árvores retorcidas e criaturas perigosas compõem o cenário da segunda região.",
    trilha: trilhaFloresta,
    campo: campoFloresta,
    mecanica:
      "A Floresta Sombria apresenta rotas diferentes das de Vhaldrak. Os heróis escolhem seu caminho entre batalhas, lojas e acampamentos, até o confronto final da região.",
  },
  {
    nome: "Montanhas de Gelo",
    numero: "Região III",
    descricao:
      "Picos congelados e caminhos cobertos de neve marcam a terceira região. Entre as montanhas, novos inimigos aguardam os heróis.",
    trilha: trilhaMontanhas,
    campo: campoMontanhas,
    mecanica:
      "A trilha das Montanhas de Gelo é mais longa e possui menos acampamentos. Os heróis precisam planejar sua progressão até enfrentar Azrakar, o Rei Dragão Branco.",
  },
];
// Componente principal da página Mapas
export default function Mapas() {
  // Função que representa a página Mapas
  // O índice 0 corresponde à primeira região: Vhaldrak. sendo a inicial
  const [regiaoSelecionada, setRegiaoSelecionada] = useState(0); //cria um estado que guarda as informaçoes da regiao selecionada
  const regiaoAtual = regioes[regiaoSelecionada];
  //vai definir a estrutura de como vai ser exibida
  return (
    <div className="pagina-mapas">
      <Menu />

      <main className="mapas">
        <header className="mapas__introducao">
          <h1 className="mapas__titulo">Mapas</h1>
          <p className="mapas__subtitulo">Atlas da aventura</p>
        </header>

        <div className="atlas">
          <div
            className="atlas__abas"
            role="group"
            aria-label="Selecione uma região"
          >
            {regioes.map((regiao, indice) => (
              <button
                key={regiao.nome}
                type="button"
                className={
                  regiaoSelecionada === indice
                    ? "atlas__aba atlas__aba--ativa"
                    : "atlas__aba"
                }
                onClick={() => setRegiaoSelecionada(indice)}
                aria-pressed={regiaoSelecionada === indice}
              >
                <span className="atlas__aba-numero">{regiao.numero}</span>
                <span className="atlas__aba-nome">{regiao.nome}</span>
              </button>
            ))}
          </div>

          <RegiaoMapa regiao={regiaoAtual} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
