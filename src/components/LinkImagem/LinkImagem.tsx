import './linkImagem.css';

interface LinkImagemProps {
    href: string;
    imagem: string;
    nome: string;
    descricao?: string;
}

export default function LinkImagem({ href, imagem, nome, descricao }: LinkImagemProps) {
    // Links http(s) abrem em outra aba; mailto: abre o programa de e-mail
    const externo = href.startsWith('http');

    return (
        <a
            className="link-imagem"
            href={href}
            target={externo ? '_blank' : undefined}
            rel={externo ? 'noopener noreferrer' : undefined}
            aria-label={nome}
        >
            <img className="link-imagem-icone" src={imagem} alt="" />
            <span className="link-imagem-nome">{nome}</span>
            {descricao && <span className="link-imagem-descricao">{descricao}</span>}
        </a>
    );
}