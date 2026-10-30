import './suporte.css';
import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';
import LinkImagem from '../../components/LinkImagem/LinkImagem';

import instagram from '../../assets/Redes/instagram.svg';
import discord from '../../assets/Redes/discord.svg';
import email from '../../assets/Redes/email.svg';

const contatos = [
    {
        nome: 'Instagram',
        descricao: 'Novidades e bastidores',
        imagem: instagram,
        href: 'https://www.instagram.com/SEU_PERFIL',
    },
    {
        nome: 'Discord',
        descricao: 'Fale com a comunidade',
        imagem: discord,
        href: 'https://discord.gg/fw45TRBW8',
    },
    {
        nome: 'E-mail',
        descricao: 'seuemail@exemplo.com',
        imagem: email,
        href: 'mailto:seuemail@exemplo.com',
    },
];

export default function Suporte() {
    return (
        <>
            <Menu />

            <div className="suporte-container">
                <h1 className="suporte-titulo">Suporte</h1>
                <p className="suporte-texto">Precisa de ajuda? Fale com a gente por aqui:</p>

                <div className="suporte-contatos">
                    {contatos.map((contato) => (
                        <LinkImagem key={contato.nome} {...contato} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
