import './styles.css';

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Bem-vindo à Clínica Fonoaudiológica Infantil</h1>
                <p>Oferecemos atendimento especializado para o desenvolvimento da fala e linguagem das crianças.</p>
                <a href="/contato" className="hero-button">Entre em Contato</a>
            </header>
            <section className="services-section">
                <h2>Nossos Serviços</h2>
                <div className="services">
                    <div className="service-card">
                        <h3>Avaliações Fonoaudiológicas</h3>
                        <p>Avaliações completas para diagnóstico e tratamento de dificuldades na fala e
                            linguagem.</p>
                    </div>
                    <div className="service-card">
                        <h3>Intervenções Terapêuticas</h3>
                        <p>Intervenções personalizadas para ajudar no desenvolvimento da comunicação e linguagem das
                            crianças.</p>
                    </div>
                    <div className="service-card">
                        <h3>Acompanhamento Regular</h3>
                        <p>Acompanhamento contínuo para garantir o progresso e o sucesso do tratamento.</p>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <h2>Sobre Nós</h2>
                <p>
                    A Clínica Fonoaudiológica Infantil é especializada no cuidado da comunicação e linguagem das
                    crianças.
                    Nossa equipe de profissionais qualificados está comprometida em proporcionar um atendimento de
                    excelência.
                </p>
            </section>
        </div>
    );
}

export default Home;
