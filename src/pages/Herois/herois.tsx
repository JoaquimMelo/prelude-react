
import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

import Grid from '../../components/Grids/grids';

import './herois.css';
import heroimolde from '../../assets/moldeheroivilao/heroimolde.png';

import cavaleiro from '../../assets/FotosHerois/cavaleiro.png';
import ladino from '../../assets/FotosHerois/ladino.png';
import mago from '../../assets/FotosHerois/mago.png';
import mercenario from '../../assets/FotosHerois/mercenario.png';
import rei from '../../assets/FotosHerois/rei.png';
import viking from '../../assets/FotosHerois/viking.png';
import moldura from '../../assets/FotosHerois/molduraheroi.png';

type Heroi = {
    nome: string;
    imagem: string;
    vida: string;
    dano: string;
    defesa: string;
    descricao: string;
};

const herois: Heroi[] = [
    {
        nome: 'Insight Wonjio',
        imagem: cavaleiro,
        vida: '55',
        dano: '110',
        defesa: '88',
        descricao: 'Um cavaleiro honroso e poderoso que luta com uma espada e escudo.',
    },
    {
        nome: 'Vincent Deshret',
        imagem: ladino,
        vida: '22',
        dano: '120',
        defesa: '77',
        descricao: 'Um ladino ágil e furtivo que se destaca em combate à distância.',
    },
    {
        nome: 'Merovin Le Azren',
        imagem: mago,
        vida: '44',
        dano: '130',
        defesa: '66',
        descricao: 'Um mago sábio e poderoso que lança feitiços destrutivos.',
    },
    {
        nome: 'Zaindoor Depay',
        imagem: mercenario,
        vida: '33',
        dano: '140',
        defesa: '55',
        descricao: 'Um mercenário experiente e implacável que luta por dinheiro.',
    },
    {
        nome: 'Lorkis Mouris',
        imagem: rei,
        vida: '66',
        dano: '150',
        defesa: '44',
        descricao: 'Um rei poderoso e justo que lidera seu reino com sabedoria.',
    },
    {
        nome: 'Gunnar Ulfsson',
        imagem: viking,
        vida: '77',
        dano: '160',
        defesa: '33',
        descricao: 'Um viking valente e feroz que luta com bravura.',
    },
];


export default function Herois() {
    return (

        <>

        <Menu />

        

       <div className="herois-container">
            <div className="herois-titulo-banner">
                <img
                    src={heroimolde}
                    alt=""
                    className="herois-molde-imagem"
                />
                <h1 className="herois-titulo">Heróis</h1>
            </div>

            <Grid>
                {herois.map((heroi) => (
                    <div className="heroi-card" key={heroi.nome}>
                        <div className="heroi-preview">
    <div className="heroi-preview-topo">
        <img
            src={heroi.imagem}
            alt={heroi.nome}
            className="heroi-preview-foto"
        />
        <div className="heroi-preview-info">
            <h3 className="heroi-preview-nome">{heroi.nome}</h3>
            <ul className="heroi-preview-status">
                <li><span>Vida:</span> {heroi.vida}</li>
                <li><span>Dano:</span> {heroi.dano}</li>
                <li><span>Defesa:</span> {heroi.defesa}</li>
            </ul>
        </div>
    </div>

    <p className="heroi-preview-descricao">
        {heroi.descricao}
    </p>
</div>
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
