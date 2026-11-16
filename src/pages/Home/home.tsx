import "./home.css";

import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";

import fundo from "../../assets/fundo.jpg";
import brasaoHerois from "../../assets/FotosHerois/brasaoHerois.png";
import brasaoViloes from "../../assets/FotosViloes/brasaoViloes.png";

export default function Home() {
  return (
    <div className="home-container">
      <Menu />

      <section className="home-menu">
        <img className="fundo" src={fundo} alt="" />
      </section>

      <section className="home-introducao">
        <h1>O sol está descendo. E a história começa agora...</h1>

        <p>Qual será o seu caminho...?</p>

        <div className="home-brasoes">
          <div className="brasao-card brasao-card--heroi">
            <img src={brasaoHerois} alt="Brasão dos heróis" />
            <div className="brasao-tooltip">
              <h3>Ordem dos Guardiões</h3>
              <p>
                Campeões juramentados de Vhaldrak que lutam para restaurar a luz e
                proteger os reinos antigos.
              </p>
            </div>
          </div>

          <div className="brasao-card brasao-card--vilao">
            <img src={brasaoViloes} alt="Brasão dos vilões" />
            <div className="brasao-tooltip">
              <h3>Legião das Cinzas</h3>
              <p>
                Senhores sombrios corrompidos pelo fogo antigo, determinados a mergulhar
                o continente no caos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}