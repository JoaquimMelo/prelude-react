import './cartas.css';
import Menu from '../../components/Menu/menu';
import Footer from '../../components/Footer/footer';

export default function Cartas() {
  return (
    <div className="pagina-cartas">
      <Menu />

      <main className="cartas-conteudo">
        {/* O conteúdo da sua página de cartas vai aqui depois */}
        <h1>Página de Cartas</h1>
      </main>

      <Footer />
    </div>
  );
}