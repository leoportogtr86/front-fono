import './styles.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <div className="logo-container">
                <h1 className="site-title">Fonopediatria - Dra Christianne Rodrigues</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><Link to={"/"}>Início</Link></li>
                    <li><Link to={"/avaliacoes"}>Avaliações</Link></li>
                    <li><Link to={"/criancas"}>Crianças</Link></li>
                    <li><Link to={"/intervencoes"}>Intervenções</Link></li>
                    <li><Link to={"/contato"}>Contato</Link></li>
                    <li><Link to={"/login"}>Entrar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
