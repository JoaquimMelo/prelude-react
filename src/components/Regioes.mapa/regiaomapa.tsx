import { useRef, useState } from "react";
import "./regiaomapa.css";

// componente que esepra receber uma prop chamada regiao com 6 campos: nome, numero, descricao, trilha, campo e mecanica
interface RegiaoMapaProps {
  regiao: {
    nome: string;
    numero: string;
    descricao: string;
    trilha: string;
    campo: string;
    mecanica: string;
  };
}

export default function RegiaoMapa({ regiao }: RegiaoMapaProps) {
  const [imagemAmpliada, setImagemAmpliada] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const descricaoTrilha = `trilha de ${regiao.nome}`;
  const descricaoCampo = `campo de batalha de ${regiao.nome}`;

  function ampliarImagem(src: string, alt: string) {
    setImagemAmpliada({ src, alt });
    dialogo.current?.showModal();
  }

  return (
    <section className="regiao" aria-labelledby="titulo-regiao">
      <header className="regiao__cabecalho">
        <div className="regiao__apresentacao">
          <h2 className="regiao__titulo" id="titulo-regiao" aria-live="polite">
            {regiao.nome}
          </h2>
          <p className="regiao__descricao">{regiao.descricao}</p>
        </div>

        <p className="regiao__selo">{regiao.numero}</p>
      </header>

      <div className="regiao__mapas">
        <figure className="regiao__mapa">
          <h3 className="regiao__mapa-titulo">
            <span className="regiao__numero" aria-hidden="true">
              01
            </span>
            Trilha
          </h3>
          <p className="regiao__mapa-subtitulo">O caminho pela região</p>
          <button
            className="regiao__ampliar"
            type="button"
            aria-label={`Ampliar ${descricaoTrilha}`}
            aria-haspopup="dialog"
            onClick={() => ampliarImagem(regiao.trilha, descricaoTrilha)}
          >
            <img className="regiao__imagem" src={regiao.trilha} alt="" />
            <span className="regiao__ampliar-rotulo">Ampliar</span>
          </button>
          <figcaption className="regiao__legenda">
            Prévia das rotas e dos encontros.
          </figcaption>
        </figure>

        <figure className="regiao__mapa">
          <h3 className="regiao__mapa-titulo">
            <span className="regiao__numero" aria-hidden="true">
              02
            </span>
            Campo de batalha
          </h3>
          <p className="regiao__mapa-subtitulo">O cenário dos confrontos</p>
          <button
            className="regiao__ampliar"
            type="button"
            aria-label={`Ampliar ${descricaoCampo}`}
            aria-haspopup="dialog"
            onClick={() => ampliarImagem(regiao.campo, descricaoCampo)}
          >
            <img className="regiao__imagem" src={regiao.campo} alt="" />
            <span className="regiao__ampliar-rotulo">Ampliar</span>
          </button>
          <figcaption className="regiao__legenda">
            Prévia do tabuleiro desta região.
          </figcaption>
        </figure>
      </div>

      <div className="regiao__mecanica">
        <h3 className="regiao__mecanica-titulo">Mecânica da região</h3>
        <p className="regiao__mecanica-texto">{regiao.mecanica}</p>
      </div>

      <dialog
        className="regiao__modal"
        ref={dialogo}
        aria-label="Imagem ampliada"
        onClose={() => setImagemAmpliada(null)}
        onClick={(evento) => {
          if (evento.target === evento.currentTarget)
            evento.currentTarget.close();
        }}
      >
        <form method="dialog">
          <button className="regiao__fechar" type="submit">
            Fechar
          </button>
        </form>
        {imagemAmpliada && (
          <img
            className="regiao__imagem-ampliada"
            src={imagemAmpliada.src}
            alt={imagemAmpliada.alt}
          />
        )}
      </dialog>
    </section>
  );
}
