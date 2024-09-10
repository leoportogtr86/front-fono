import { Link } from 'react-router-dom';
import './styles.css';

function AvaliacoesHub() {
    return (
        <div className="hub-container">
            <h2>Gerencie Suas Avaliações</h2>
            <div className="hub-menu">
                <Link to="/buscar-avaliacoes" className="hub-item">
                    <div className="icon buscar"></div>
                    <span>Buscar Avaliações</span>
                </Link>
                <Link to="/cadastro-avaliacao" className="hub-item">
                    <div className="icon cadastrar"></div>
                    <span>Cadastrar Avaliação</span>
                </Link>
                <Link to="/atualizar-avaliacao" className="hub-item">
                    <div className="icon atualizar"></div>
                    <span>Atualizar Avaliação</span>
                </Link>
                <Link to="/deletar-avaliacao" className="hub-item">
                    <div className="icon deletar"></div>
                    <span>Deletar Avaliação</span>
                </Link>
            </div>
        </div>
    );
}

export default AvaliacoesHub;
