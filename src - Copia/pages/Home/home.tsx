import './home.css';

import fundo from '../../assets/fundo.jpg';
import Botoes from '../../components/Botoes/botoes';
import Footer from '../../components/Footer/footer';


import brasaoHerois from '../../assets/FotosHerois/brasaoHerois.png';
import brasaoViloes from '../../assets/FotosViloes/brasaoViloes.png';

export default function Home() {
    return (
        <div className="home-container">

            <section className="home-menu">
                <img className="fundo" src={fundo} alt="" />

                <div className="home-botoes">
                    <Botoes texto="Início" onClick={() => window.location.href = '/'} />
                    <Botoes texto="Heróis" onClick={() => window.location.href = '/Herois'} />
                    <Botoes texto="Vilões" onClick={() => window.location.href = '/Viloes'} />
                    <Botoes texto="História" onClick={() => window.location.href = '/Historia'} />
                    <Botoes texto="Mapas" onClick={() => window.location.href = '/Mapas'} />
                    <Botoes texto="Como Jogar" onClick={() => window.location.href = '/ComoJogar'} />
                    <Botoes texto="Cartas" onClick={() => window.location.href = '/Cartas'} />
                </div>
            </section>

            <section className="home-introducao">
                <h1>O sol está descendo. E a história começa agora...</h1>

                <p>Qual será o seu caminho...?</p>

                <div className="home-brasoes">
                    <img src={brasaoHerois}/>
                    <img src={brasaoViloes}/>
                </div>
            </section>


            
            <Footer/>


        </div>
    );
}