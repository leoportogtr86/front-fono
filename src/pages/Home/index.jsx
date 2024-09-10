import './styles.css';
import {Link} from "react-router-dom";

function HomeFono() {
    return (
        <div className="home-fono-container">
            <header className="hero-fono-section">
                <h1>Bem-vindo ao Sistema de Gerenciamento de Pacientes</h1>
            </header>
            <section className="features-section">
                <h2 className={"title"}>Principais Funcionalidades</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Cadastro de Pacientes</h3>
                        <p>Adicione novos pacientes ao sistema, incluindo todas as informações necessárias para o acompanhamento fonoaudiológico.</p>
                        <Link to={"/criancas"} className="feature-button">Gerenciar Paciente</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Gerenciamento de Avaliações</h3>
                        <p>Registre e acompanhe as avaliações realizadas, garantindo um histórico detalhado do progresso de cada paciente.</p>
                        <Link to={"/avaliacoes"} className="feature-button">Gerenciar Avaliações</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Intervenções Personalizadas</h3>
                        <p>Planeje e registre intervenções terapêuticas, assegurando que cada paciente receba o tratamento adequado.</p>
                        <Link to={"/intervencoes"} className="feature-button">Gerenciar Intervenções</Link>
                    </div>
                </div>
            </section>
            <section className="about-fono-section">
                <h2>Como Funciona</h2>
                <p>
                    Este sistema foi desenvolvido para auxiliar fonoaudiólogos no gerenciamento completo de seus pacientes.
                    Com ele, você pode cadastrar novos pacientes, registrar avaliações detalhadas, e planejar intervenções terapêuticas,
                    tudo em um só lugar, de forma fácil e acessível.
                </p>
            </section>
        </div>
    );
}

export default HomeFono;
