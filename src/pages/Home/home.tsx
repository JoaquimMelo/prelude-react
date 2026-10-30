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
          <img src={brasaoHerois} alt="Brasão dos heróis" />
          <img src={brasaoViloes} alt="Brasão dos vilões" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
