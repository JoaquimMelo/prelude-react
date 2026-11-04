import type { ReactNode } from "react";
import "./folhacomojogar.css";

interface FolhaComoJogarProps {
  id: string;
  titulo: string;
  romano: string;
  numero: string;
  rodape: string;
  ativa: boolean;
  children: ReactNode;
}

export default function FolhaComoJogar({
  id,
  titulo,
  romano,
  numero,
  rodape,
  ativa,
  children,
}: FolhaComoJogarProps) {
  return (
    <article
      id={id}
      className={
        ativa ? "folha-como-jogar folha-como-jogar--ativa" : "folha-como-jogar"
      }
      aria-labelledby={id + "-titulo"}
    >
      <h2 className="folha-como-jogar__titulo" id={id + "-titulo"}>
        <span className="folha-como-jogar__romano" aria-hidden="true">
          {romano}
        </span>{" "}
        {titulo}
      </h2>

      <div className="folha-como-jogar__conteudo">{children}</div>

      <footer className="folha-como-jogar__rodape">
        <span>{rodape}</span>
        <span>{numero}</span>
      </footer>
    </article>
  );
}
