import { useState } from 'react';
import './styles.css';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const contato = {
            nome,
            email,
            mensagem,
        };
        console.log('Mensagem de contato enviada:', contato);
        // Aqui você pode integrar a lógica para enviar a mensagem ao backend
    };

    return (
        <div className="contato-container">
            <h2>Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar Mensagem</button>
            </form>
            <section className="info-section">
                <h3>Nossas Informações</h3>
                <p>Endereço: Rua Exemplo, 123 - Bairro, Cidade, Estado</p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Email: contato@clinicaexemplo.com.br</p>
                <div className="map-container">
                    {/* Substitua pelo iframe do Google Maps ou outro mapa */}
                    <iframe
                        title="Localização"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9559263158707!3d-37.81720974201467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2374f7b%3A0xfed35a365d0a5d6b!2s123+Queen+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1516003831284"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Contato;
