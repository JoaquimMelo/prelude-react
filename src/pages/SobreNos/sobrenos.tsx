import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Footer from "../../components/Footer/footer.tsx";
import Menu from "../../components/Menu/menu.tsx";

import "./SobreNos.css";

// Troque os caminhos das fotos pelos arquivos reais do projeto
// (ex.: colocar as imagens em src/assets/equipe/ ou public/img/equipe/)
const equipe = [
  { nome: "Renato Mandu", ra: "822212031", foto: "/img/equipe/renato.jpg" },
  { nome: "Joaquim Melo Moura", ra: "822146970", foto: "/img/equipe/joaquim.jpg" },
  { nome: "Nicolas Santos", ra: "822133364", foto: "/img/equipe/nicolas.jpg" },
  { nome: "Vinicius Moura Hosokawa", ra: "822160076", foto: "/img/equipe/vinicius-moura.jpg" },
  { nome: "João Rafael Martins Florenzio", ra: "822122396", foto: "/img/equipe/joao.jpg" },
  { nome: "Vinicius Prado de Souza", ra: "822126008", foto: "/img/equipe/vinicius-prado.jpg" },
];

const tecnologias = ["HTML5", "CSS3", "JavaScript", "React"];

export default function SobreNos() {
  return (
    <>
    <Menu />
    <main className="sobre">
      <div className="sobre__conteudo">
        <h1 className="sobre__titulo">Sobre Nós</h1>

        <section className="sobre__secao">
          <h2 className="sobre__subtitulo">O Projeto</h2>
          <p className="sobre__texto">
            Prelude é um jogo em desenvolvimento, criado como projeto
            acadêmico. A ideia nasceu da vontade de contar uma história de RPG
            medieval com identidade visual própria, em pixel art, unindo seis
            heróis de origens diferentes contra cinco vilões que ameaçam
            prender o mundo num crepúsculo eterno.
          </p>
          <p className="sobre__texto">
            Este site foi feito para apresentar o universo do jogo: sua lore,
            seus personagens e o processo de criação por trás dele.
          </p>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__subtitulo">A Equipe</h2>
          <ul className="equipe">
            {equipe.map((membro) => (
              <li key={membro.ra} className="equipe__membro">
                <img
                  className="equipe__foto"
                  src={membro.foto}
                  alt={`Foto de ${membro.nome}`}
                />
                <p className="equipe__nome">{membro.nome}</p>
                <p className="equipe__ra">RA: {membro.ra}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__subtitulo">Tecnologias</h2>
          <ul className="tecnologias">
            {tecnologias.map((tech) => (
              <li key={tech} className="tecnologias__item">
                {tech}
              </li>
            ))}
          </ul>
       </section>
      </div>
      <Footer/>
    </main>
    </>
  );

}