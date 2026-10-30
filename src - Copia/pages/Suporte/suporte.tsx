import './suporte.css';
import Footer from '../../components/Footer/footer';
import Menu from '../../components/Menu/menu';

export default function Suporte() {
  return (
    <div className="suporte">
      <Menu />
      <div className="suporte-content">
        <h1>Suporte</h1>
        <p>Se você está enfrentando problemas ou precisa de ajuda, entre em contato com nossa equipe de suporte.</p>
        <p>Você pode nos enviar um e-mail para <a href="mailto:suporte@exemplo.com">suporte@exemplo.com</a>.</p>
      </div>
      <Footer />
    </div>
  );
}
