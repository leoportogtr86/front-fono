import { Link } from 'react-router-dom';
import './styles.css';

function IntervencoesHub() {
    return (
        <div className="hub-container">
            <h2>Gerencie Suas Intervenções</h2>
            <div className="hub-menu">
                <Link to="/buscar-intervencao" className="hub-item">
                    <div className="icon buscar"></div>
                    <span>Buscar Intervenções</span>
                </Link>
                <Link to="/cadastro-intervencao" className="hub-item">
                    <div className="icon cadastrar"></div>
                    <span>Cadastrar Intervenção</span>
                </Link>
                <Link to="/atualizar-intervencao" className="hub-item">
                    <div className="icon atualizar"></div>
                    <span>Atualizar Intervenção</span>
                </Link>
                <Link to="/deletar-intervencao" className="hub-item">
                    <div className="icon deletar"></div>
                    <span>Deletar Intervenção</span>
                </Link>
            </div>
        </div>
    );
}

export default IntervencoesHub;
