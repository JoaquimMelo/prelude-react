import './viloes.css';

import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

import Grid from '../../components/Grids/grids';

import soldadoesqueletico from '../../assets/FotosViloes/soldadoesqueletico.png';
import arqueiro from '../../assets/FotosViloes/arqueiro.png';
import bruxa from '../../assets/FotosViloes/bruxa.png';
import xama from '../../assets/FotosViloes/xama.png';
import yeti from '../../assets/FotosViloes/yeti.png';
import dragaodegelo from '../../assets/FotosViloes/dragaodegelo.png';
import molduravilao from '../../assets/FotosViloes/molduravilao.png';

const viloes = [
    { nome: 'Soldado Esquelético', imagem: soldadoesqueletico },
    { nome: 'Arqueiro', imagem: arqueiro },
    { nome: 'Bruxa', imagem: bruxa },
    { nome: 'Xamã', imagem: xama },
    { nome: 'Yeti', imagem: yeti },
    { nome: 'Dragão de Gelo', imagem: dragaodegelo },
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

            <Footer/>



        </>
    );
}
