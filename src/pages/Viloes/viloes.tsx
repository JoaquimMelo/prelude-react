import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

import Grid from '../../components/Grids/grids';

import './viloes.css';

import soldadoesqueletico from '../../assets/FotosViloes/soldadoesqueletico.png';
import arqueiro from '../../assets/FotosViloes/arqueiro.png';
import bruxa from '../../assets/FotosViloes/bruxa.png';
import xama from '../../assets/FotosViloes/xama.png';
import yeti from '../../assets/FotosViloes/yeti.png';
import dragaodegelo from '../../assets/FotosViloes/dragaodegelo.png';
import molduravilao from '../../assets/FotosViloes/molduravilao.png';

type Vilao = {
    nome: string;
    imagem: string;
    vida: string;
    dano: string;
    defesa: string;
    descricao: string;
};

const viloes: Vilao[] = [
    {
        nome: 'Soldado Esquelético',
        imagem: soldadoesqueletico,
        vida: '99', 
        dano: '111',
        defesa: '88',
        descricao: 'Um soldado esquelético assustador que luta com uma espada afiada.',
    },
    {
        nome: 'Arqueiro',
        imagem: arqueiro,
        vida: '88',
        dano: '120',
        defesa: '77',
        descricao: 'Um arqueiro habilidoso que atira flechas com precisão.',
    },
    {
        nome: 'Bruxa',
        imagem: bruxa,
        vida: '77',
        dano: '130',
        defesa: '66',
        descricao: 'Uma bruxa misteriosa que lança feitiços sombrios.',
    },
    {
        nome: 'Xamã',
        imagem: xama,
        vida: '66',
        dano: '140',
        defesa: '55',
        descricao: 'Um xamã antigo que controla os elementos.',
    },
    {
        nome: 'Yeti',
        imagem: yeti,
        vida: '55',
        dano: '150',
        defesa: '44',
        descricao: 'Um yeti gigante que habita as regiões glaciais.',
    },
    {
        nome: 'Dragão de Gelo',
        imagem: dragaodegelo,
        vida: '44',
        dano: '160',
        defesa: '33',
        descricao: 'Um dragão de gelo assustador que habita as regiões glaciais.',
    },
];

export default function Viloes() {
    return (
        <>
            <Menu />

            <div className="viloes-container">
                <h1 className="herois-titulo">Vilões</h1>

                <Grid>
                    {viloes.map((vilao) => (
                        <div className="vilao-card" key={vilao.nome}>
                            <div className="vilao-preview">
                                <div className="vilao-preview-topo">
                                    <img
                                        src={vilao.imagem}
                                        alt={vilao.nome}
                                        className="vilao-preview-foto"
                                    />
                                    <div className="vilao-preview-info">
                                        <h3 className="vilao-preview-nome">{vilao.nome}</h3>
                                        <ul className="vilao-preview-status">
                                            <li><span>Vida:</span> {vilao.vida}</li>
                                            <li><span>Dano:</span> {vilao.dano}</li>
                                            <li><span>Defesa:</span> {vilao.defesa}</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="vilao-preview-descricao">
                                    {vilao.descricao}
                                </p>
                            </div>

                            <div className="vilao-moldura">
                                <img
                                    src={vilao.imagem}
                                    alt={vilao.nome}
                                    className="vilao-imagem"
                                />

                                <img
                                    src={molduravilao}
                                    alt=""
                                    className="molduravilao-imagem"
                                />
                            </div>

                            <h2>{vilao.nome}</h2>
                        </div>
                    ))}
                </Grid>
            </div>

            <Footer />
        </>
    );
}