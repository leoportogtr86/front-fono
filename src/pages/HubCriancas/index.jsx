import { Link } from 'react-router-dom';
import './styles.css';

function CriancasHub() {
    return (
        <div className="hub-container">
            <h2>Gerencie Suas Crianças</h2>
            <div className="hub-menu">
                <Link to="/buscar-crianca" className="hub-item">
                    <div className="icon buscar"></div>
                    <span>Buscar Crianças</span>
                </Link>
                <Link to="/cadastro-crianca" className="hub-item">
                    <div className="icon cadastrar"></div>
                    <span>Cadastrar Criança</span>
                </Link>
                <Link to="/atualizar-crianca" className="hub-item">
                    <div className="icon atualizar"></div>
                    <span>Atualizar Criança</span>
                </Link>
                <Link to="/deletar-crianca" className="hub-item">
                    <div className="icon deletar"></div>
                    <span>Deletar Criança</span>
                </Link>
            </div>
        </div>
    );
}

export default CriancasHub;
