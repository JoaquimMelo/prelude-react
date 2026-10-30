import './herois.css';
import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

import Grid from '../../components/Grids/grids';

import cavaleiro from '../../assets/FotosHerois/cavaleiro.png';
import ladino from '../../assets/FotosHerois/ladino.png';
import mago from '../../assets/FotosHerois/mago.png';
import mercenario from '../../assets/FotosHerois/mercenario.png';
import rei from '../../assets/FotosHerois/rei.png';
import viking from '../../assets/FotosHerois/viking.png';
import moldura from '../../assets/FotosHerois/molduraheroi.png';

const herois = [
    { nome: 'Insight Wonjio', imagem: cavaleiro },
    { nome: 'Vincent Deshret', imagem: ladino },
    { nome: 'Merovin Le Azren', imagem: mago },
    { nome: 'Zaindoor Depay', imagem: mercenario },
    { nome: 'Lorkis Mouris', imagem: rei },
    { nome: 'Gunnar Ulfsson', imagem: viking },
];


export default function Herois() {
    return (

        <>

        <Menu />

        

        <div className="herois-container">
            <h1 className="herois-titulo">Heróis</h1>

            <Grid>
                {herois.map((heroi) => (
                    <div className="heroi-card" key={heroi.nome}>
                    <div className="heroi-moldura">
                        <img
                            src={heroi.imagem}
                            alt={heroi.nome}
                            className="heroi-imagem"
                        />

                        <img
                            src={moldura}
                            alt=""
                            className="molduraheroi-imagem"
                        />

                    </div>
                        <h2>{heroi.nome}</h2>
                    </div>
                ))}
            </Grid>
        </div>

                
        <Footer/>



        </>
    );
}
