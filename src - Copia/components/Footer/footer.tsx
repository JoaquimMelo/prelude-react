import './footer.css';

export default function Footer() {
    return (
        <footer className="home-footer">
            <nav className="footer-links">
                <a href="/SobreNos">Sobre Nós</a>
                <a href="/Comunidade">Comunidade</a>
                <a href="/Suporte">Suporte</a>
            </nav>

            <div className="footer-redes">
                <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#" aria-label="E-mail">
                    <i className="fa-solid fa-envelope"></i>
                </a>

                <a href="#" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>

            <p className="footer-creditos">
                © 2026 Prelude - Projeto acadêmico - USJT
            </p>
        </footer>
    );
}
