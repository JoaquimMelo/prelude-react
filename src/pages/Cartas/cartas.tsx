import { useRef, useState } from "react";
import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import dadosCartas from "./cartas.json";
import "./cartas.css";

const categorias = ["Heróis", "Comuns"];
const tipos = ["Ataque", "Defesa", "Especial"];
const iconesDosTipos: Record<string, string> = {
  Ataque: "⚔",
  Defesa: "⛨",
  Especial: "★",
};

// O Vite resolve os arquivos do JSON que já estão em src/assets/cartas.
const imagens = import.meta.glob<string>(
  [
    "../../assets/cartas/Herois/*/*.png",
    "../../assets/cartas/cartas de combate/*.png",
    "!../../assets/cartas/Herois/*/*_carta.png",
    "!../../assets/cartas/Herois/*/*_corpo_todo.png",
  ],
  { eager: true, import: "default", query: "?url" },
);

const cartas = dadosCartas.map((carta) => ({
  ...carta,
  imagem: imagens[`../../assets/cartas/${carta.imagem}`],
}));

type Carta = (typeof cartas)[number];

function CartaCard({
  carta,
  legenda,
  aoAmpliar,
}: {
  carta: Carta;
  legenda: string;
  aoAmpliar: () => void;
}) {
  return (
    <button
      className="cartas__carta"
      type="button"
      aria-haspopup="dialog"
      onClick={aoAmpliar}
    >
      <img
        className="cartas__miniatura"
        src={carta.imagem}
        alt=""
        width={160}
        height={224}
        loading="lazy"
        decoding="async"
      />
      <span className="cartas__nome">{carta.nome}</span>
      {legenda && <span className="cartas__legenda">{legenda}</span>}
    </button>
  );
}

export default function Cartas() {
  const [categoria, setCategoria] = useState("Heróis");
  const [personagem, setPersonagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [agrupamento, setAgrupamento] = useState("Tipo");
  const [cartaAmpliada, setCartaAmpliada] = useState<Carta | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);

  const cartasDaCategoria = cartas.filter(
    (carta) => carta.categoria === categoria,
  );
  const tiposDisponiveis = tipos.filter((nome) =>
    cartasDaCategoria.some((carta) => carta.tipo === nome),
  );
  const personagens = [
    ...new Set(cartasDaCategoria.map((carta) => carta.personagem)),
  ];
  const cartasFiltradas = cartasDaCategoria.filter(
    (carta) =>
      (personagem === "" || carta.personagem === personagem) &&
      (tipo === "" || carta.tipo === tipo),
  );

  const porPersonagem = categoria === "Heróis" && agrupamento === "Personagem";
  const campo = porPersonagem ? "personagem" : "tipo";
  const titulos = porPersonagem ? personagens : tiposDisponiveis;
  const secoes = titulos
    .map((titulo) => ({
      titulo,
      cartas: cartasFiltradas.filter((carta) => carta[campo] === titulo),
    }))
    .filter((secao) => secao.cartas.length > 0);

  function trocarCategoria(novaCategoria: string) {
    if (novaCategoria === categoria) return;
    setCategoria(novaCategoria);
    setPersonagem("");
    setTipo("");
  }

  function ampliarCarta(carta: Carta) {
    setCartaAmpliada(carta);
    dialogo.current?.showModal();
  }

  return (
    <div className="pagina-cartas">
      <Menu />

      <main className="cartas">
        <div className="cartas__compendio">
          <header className="cartas__introducao">
            <h1>Compêndio de Cartas</h1>
          </header>

          <div
            className="cartas__abas"
            role="group"
            aria-label="Coleção de cartas"
          >
            {categorias.map((aba) => (
              <button
                key={aba}
                type="button"
                aria-pressed={aba === categoria}
                onClick={() => trocarCategoria(aba)}
              >
                {aba}
              </button>
            ))}
          </div>

          <div className="cartas__pergaminho">
            <div className="cartas__filtros">
              {categoria === "Heróis" && (
                <div className="cartas__filtro">
                  <label htmlFor="cartas-personagem">Personagem</label>
                  <select
                    id="cartas-personagem"
                    value={personagem}
                    onChange={(evento) => setPersonagem(evento.target.value)}
                  >
                    <option value="">Todos</option>
                    {personagens.map((nome) => (
                      <option key={nome}>{nome}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="cartas__filtro">
                <label htmlFor="cartas-tipo">Tipo</label>
                <select
                  id="cartas-tipo"
                  value={tipo}
                  onChange={(evento) => setTipo(evento.target.value)}
                >
                  <option value="">Todos</option>
                  {tiposDisponiveis.map((nome) => (
                    <option key={nome}>{nome}</option>
                  ))}
                </select>
              </div>

              {categoria === "Heróis" && (
                <div className="cartas__filtro">
                  <label htmlFor="cartas-agrupamento">Agrupar por</label>
                  <select
                    id="cartas-agrupamento"
                    value={agrupamento}
                    onChange={(evento) => setAgrupamento(evento.target.value)}
                  >
                    <option>Tipo</option>
                    <option>Personagem</option>
                  </select>
                </div>
              )}
            </div>

            <p className="cartas__resultado" aria-live="polite">
              {cartasFiltradas.length === 1
                ? "1 carta"
                : `${cartasFiltradas.length} cartas`}
            </p>

            {secoes.length === 0 && (
              <p>Nenhuma carta encontrada para esses filtros.</p>
            )}

            {secoes.map((secao) => (
              <section className="cartas__secao" key={secao.titulo}>
                <h2>
                  {!porPersonagem && (
                    <span aria-hidden="true">
                      {iconesDosTipos[secao.titulo]}
                    </span>
                  )}
                  {secao.titulo}
                </h2>

                <div className="cartas__grade">
                  {secao.cartas.map((carta) => (
                    <CartaCard
                      key={carta.id}
                      carta={carta}
                      legenda={porPersonagem ? carta.tipo : carta.personagem}
                      aoAmpliar={() => ampliarCarta(carta)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <dialog
          className="cartas__modal"
          ref={dialogo}
          aria-label="Carta ampliada"
          onClose={() => setCartaAmpliada(null)}
        >
          <form method="dialog">
            <button type="submit">Fechar</button>
          </form>
          {cartaAmpliada && (
            <>
              <img src={cartaAmpliada.imagem} alt="" />
              <h2>{cartaAmpliada.nome}</h2>
              <p>
                {cartaAmpliada.personagem || "Comum"} · {cartaAmpliada.tipo}
              </p>
            </>
          )}
        </dialog>
      </main>

      <Footer />
    </div>
  );
}
