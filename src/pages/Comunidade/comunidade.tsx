import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./comunidade.css";

type Categoria = "Dúvida" | "Teoria" | "Estratégia" | "Fan art";

interface Post {
  id: number;
  autor: string;
  categoria: Categoria;
  texto: string;
  data: string;
  brindes: number;
}

const CHAVE = "prelude:comunidade";
const CATEGORIAS: Categoria[] = ["Dúvida", "Teoria", "Estratégia", "Fan art"];

const POSTS_INICIAIS: Post[] = [
  {
    id: 1,
    autor: "Gunnar_Ulsson",
    categoria: "Estratégia",
    texto: "O Viking aguenta bem a linha de frente, mas perde feio para o Ladino se ficar parado. Alguém testou ele com o Rei de apoio?",
    data: "05/11/2026",
    brindes: 7,
  },
  {
    id: 2,
    autor: "MerovinFã",
    categoria: "Teoria",
    texto: "Acho que Morvath tem ligação com as Ruínas de Eldrath bem antes da guerra. A idade desconhecida não é coincidência.",
    data: "06/11/2026",
    brindes: 12,
  },
  {
    id: 3,
    autor: "Viajante",
    categoria: "Dúvida",
    texto: "Onde fica a página de Como Jogar? Quero entender as cartas antes da próxima partida.",
    data: "08/11/2026",
    brindes: 2,
  },
];

function lerPosts(): Post[] {
  try {
    const salvo = localStorage.getItem(CHAVE);
    return salvo ? (JSON.parse(salvo) as Post[]) : POSTS_INICIAIS;
  } catch {
    return POSTS_INICIAIS;
  }
}

export default function Comunidade() {
  const [posts, setPosts] = useState<Post[]>(lerPosts);
  const [filtro, setFiltro] = useState<Categoria | "Todas">("Todas");
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("Dúvida");

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(posts));
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [posts]);

  function publicar(e: FormEvent) {
    e.preventDefault();
    if (!autor.trim() || !texto.trim()) return;
    const novo: Post = {
      id: Date.now(),
      autor: autor.trim(),
      categoria,
      texto: texto.trim(),
      data: new Date().toLocaleDateString("pt-BR"),
      brindes: 0,
    };
    setPosts([novo, ...posts]);
    setTexto("");
  }

  function brindar(id: number) {
    setPosts(posts.map((p) => (p.id === id ? { ...p, brindes: p.brindes + 1 } : p)));
  }

  const visiveis = filtro === "Todas" ? posts : posts.filter((p) => p.categoria === filtro);

  return (
    <main className="comunidade">
      <header className="comunidade__hero">
        <h1 className="comunidade__titulo">A Taverna do Prelude</h1>
        <p className="comunidade__subtitulo">
          Sente-se, peça uma caneca e converse com outros jogadores sobre heróis, vilões e estratégias.
        </p>
      </header>

      <div className="comunidade__corpo">
        <section className="comunidade__mural" aria-labelledby="titulo-mural">
          <h2 className="comunidade__secao" id="titulo-mural">Mural da taverna</h2>

          <div className="comunidade__filtros" role="group" aria-label="Filtrar por assunto">
            {(["Todas", ...CATEGORIAS] as const).map((c) => (
              <button
                key={c}
                type="button"
                className={
                  "comunidade__filtro" + (filtro === c ? " comunidade__filtro--ativo" : "")
                }
                aria-pressed={filtro === c}
                onClick={() => setFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {visiveis.length === 0 && (
            <p className="comunidade__vazio">
              Nenhuma conversa nesta mesa ainda. Seja o primeiro a puxar assunto.
            </p>
          )}

          <ul className="comunidade__lista">
            {visiveis.map((p) => (
              <li key={p.id} className="post">
                <div className="post__cabecalho">
                  <span className="post__autor">{p.autor}</span>
                  <span className="post__categoria">{p.categoria}</span>
                </div>
                <p className="post__texto">{p.texto}</p>
                <div className="post__rodape">
                  <time className="post__data">{p.data}</time>
                  <button type="button" className="post__brinde" onClick={() => brindar(p.id)}>
                    Brindar ({p.brindes})
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="comunidade__lateral">
          <form className="comunidade__form" onSubmit={publicar}>
            <h2 className="comunidade__secao">Pendurar um recado</h2>

            <label className="comunidade__campo">
              <span className="comunidade__rotulo">Seu nome</span>
              <input
                className="comunidade__input"
                value={autor}
                maxLength={24}
                onChange={(e) => setAutor(e.target.value)}
                required
              />
            </label>

            <label className="comunidade__campo">
              <span className="comunidade__rotulo">Assunto</span>
              <select
                className="comunidade__input"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value as Categoria)}
              >
                {CATEGORIAS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="comunidade__campo">
              <span className="comunidade__rotulo">Mensagem</span>
              <textarea
                className="comunidade__input comunidade__input--texto"
                value={texto}
                maxLength={280}
                onChange={(e) => setTexto(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="comunidade__botao">Publicar no mural</button>
          </form>

          <section className="comunidade__regras">
            <h2 className="comunidade__secao">Regras da casa</h2>
            <ul className="comunidade__regras-lista">
              <li>Respeite todos os jogadores.</li>
              <li>Marque spoilers da história.</li>
              <li>Nada de propaganda ou links suspeitos.</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}