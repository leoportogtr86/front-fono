import { useState } from 'react';
import './styles.css';

function CadastroFonoaudiologo() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoFonoaudiologo = {
            nome,
            email,
            senha,
        };
        console.log('Novo fonoaudiólogo cadastrado:', novoFonoaudiologo);
        // Integrar com o backend usando fonoaudiologoController
    };

    return (
        <div className="cadastro-fonoaudiologo-container">
            <h2>Cadastro de Fonoaudiólogo</h2>
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
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroFonoaudiologo;
