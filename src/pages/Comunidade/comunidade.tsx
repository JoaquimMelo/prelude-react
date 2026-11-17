import { useEffect, useMemo, useState, type FormEvent } from "react";
import "./comunidade.css";

const TOPICOS = ["Dúvida", "Teoria", "Estratégia", "Fan art"] as const;
type Topico = (typeof TOPICOS)[number];
type Filtro = "Todas" | Topico;

interface Recado {
  id: number;
  autor: string;
  topico: Topico;
  mensagem: string;
  data: string; // AAAA-MM-DD
  brindes: number;
}

const INICIAIS: Recado[] = [
  { id: 1, autor: "Viajante", topico: "Dúvida", mensagem: "Onde fica a página de Como Jogar? Quero entender as cartas antes da próxima partida.", data: "2026-11-08", brindes: 3 },
  { id: 2, autor: "MerovinFã", topico: "Teoria", mensagem: "Acho que Morvath tem ligação com as Ruínas de Eldrath bem antes da guerra. A idade desconhecida não é coincidência.", data: "2026-11-06", brindes: 14 },
  { id: 3, autor: "Gunnar_Ulsson", topico: "Estratégia", mensagem: "O Viking aguenta bem a linha de frente, mas perde feio para o Ladino se ficar parado. Alguém testou ele com o Rei de apoio?", data: "2026-11-09", brindes: 8 },
];

function lerStorage<T>(chave: string, padrao: T): T {
  try {
    const bruto = localStorage.getItem(chave);
    return bruto ? (JSON.parse(bruto) as T) : padrao;
  } catch {
    return padrao;
  }
}

const formatarData = (d: string) => d.split("-").reverse().join("/");

export default function Comunidade() {
  const [recados, setRecados] = useState<Recado[]>(() => lerStorage("tv_posts", INICIAIS));
  const [brindados, setBrindados] = useState<number[]>(() => lerStorage("tv_liked", []));
  const [filtro, setFiltro] = useState<Filtro>("Todas");
  const [busca, setBusca] = useState("");
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState<Topico>("Dúvida");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [aviso, setAviso] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("tv_posts", JSON.stringify(recados));
      localStorage.setItem("tv_liked", JSON.stringify(brindados));
    } catch {
      /* storage indisponível */
    }
  }, [recados, brindados]);

  const visiveis = useMemo(() => {
    const termo = busca.toLowerCase();
    return recados
      .filter((r) => (filtro === "Todas" || r.topico === filtro) && (r.mensagem + r.autor).toLowerCase().includes(termo))
      .sort((a, b) => b.id - a.id);
  }, [recados, filtro, busca]);

  function alternarBrinde(id: number) {
    const jaBrindou = brindados.includes(id);
    setBrindados((b) => (jaBrindou ? b.filter((x) => x !== id) : [...b, id]));
    setRecados((rs) => rs.map((r) => (r.id === id ? { ...r, brindes: r.brindes + (jaBrindou ? -1 : 1) } : r)));
  }

  function publicar(e: FormEvent) {
    e.preventDefault();
    if (!nome.trim() || mensagem.trim().length < 3) {
      setErro("Preencha seu nome e escreva uma mensagem.");
      return;
    }
    setErro("");
    setRecados((rs) => [
      ...rs,
      { id: Date.now(), autor: nome.trim(), topico: assunto, mensagem: mensagem.trim(), data: new Date().toISOString().slice(0, 10), brindes: 0 },
    ]);
    setMensagem("");
    setFiltro("Todas");
    setAviso(true);
    setTimeout(() => setAviso(false), 1800);
  }

  return (
    <div className="comunidade">
      <header className="comunidade__cabecalho">
        <h1 className="comunidade__titulo">A Taverna do Prelude</h1>
        <div className="comunidade__divisor" />
        <p className="comunidade__subtitulo">
          Sente-se, pegue uma caneca e converse com outros jogadores sobre heróis, vilões e estratégias.
        </p>
      </header>

      <main className="comunidade__conteudo">
        <section aria-label="Mural da taverna">
          <h2 className="comunidade__secao">Mural da taverna</h2>

          <div className="comunidade__filtros" role="group" aria-label="Filtrar por assunto">
            {(["Todas", ...TOPICOS] as Filtro[]).map((t) => (
              <button
                key={t}
                type="button"
                className={`comunidade__chip ${filtro === t ? "comunidade__chip--ativo" : ""}`}
                aria-pressed={filtro === t}
                onClick={() => setFiltro(t)}
              >
                {t}
              </button>
            ))}
            <input
              className="comunidade__busca"
              type="search"
              placeholder="Buscar no mural…"
              aria-label="Buscar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div aria-live="polite">
            {visiveis.length === 0 && (
              <div className="comunidade__vazio">Nenhum recado por aqui ainda. Seja o primeiro a pendurar um!</div>
            )}
            {visiveis.map((r) => {
              const ativo = brindados.includes(r.id);
              return (
                <article key={r.id} className="comunidade__recado">
                  <div className="comunidade__recado-topo">
                    <span className="comunidade__autor">{r.autor}</span>
                    <span className="comunidade__tag">{r.topico}</span>
                  </div>
                  <p className="comunidade__texto">{r.mensagem}</p>
                  <div className="comunidade__recado-base">
                    <time>{formatarData(r.data)}</time>
                    <button
                      type="button"
                      className={`comunidade__brindar ${ativo ? "comunidade__brindar--ativo" : ""}`}
                      aria-pressed={ativo}
                      onClick={() => alternarBrinde(r.id)}
                    >
                      🍺 Brindar ({r.brindes})
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside>
          <form className="comunidade__card" onSubmit={publicar} noValidate>
            <h2 className="comunidade__secao">Pendurar um recado</h2>

            <label className="comunidade__label" htmlFor="tv-nome">Seu nome</label>
            <input id="tv-nome" className="comunidade__campo" maxLength={24} autoComplete="nickname" value={nome} onChange={(e) => setNome(e.target.value)} />

            <label className="comunidade__label" htmlFor="tv-assunto">Assunto</label>
            <select id="tv-assunto" className="comunidade__campo" value={assunto} onChange={(e) => setAssunto(e.target.value as Topico)}>
              {TOPICOS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label className="comunidade__label" htmlFor="tv-msg">Mensagem</label>
            <textarea id="tv-msg" className="comunidade__campo comunidade__campo--area" maxLength={280} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            <div className="comunidade__contador">{mensagem.length}/280</div>

            <div className="comunidade__erro" role="alert">{erro}</div>
            <button type="submit" className="comunidade__publicar">Publicar no mural</button>
          </form>

          <div className="comunidade__card">
            <h2 className="comunidade__secao">Regras da casa</h2>
            <ul className="comunidade__regras">
              <li>Respeite todos os jogadores.</li>
              <li>Marque spoilers da história.</li>
              <li>Nada de propaganda ou links suspeitos.</li>
            </ul>
          </div>
        </aside>
      </main>

      <div className={`comunidade__aviso ${aviso ? "comunidade__aviso--visivel" : ""}`}>Recado pendurado!</div>
    </div>
  );
}