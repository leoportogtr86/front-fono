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
                    <li><Link to={"/cadastro-avaliacao"}>Avaliações</Link></li>
                    <li><Link to={"/cadastro-crianca"}>Crianças</Link></li>
                    <li><Link to={"/cadastro-intervencao"}>Intervenções</Link></li>
                    <li><Link to={"/login"}>Entrar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
