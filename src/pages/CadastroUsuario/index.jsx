import {useState} from 'react';
import './styles.css';

function CadastroUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');

        // Simulação de cadastro (substituir por chamada real ao backend)
        if (nome && email && senha) {
            console.log('Usuário cadastrado:', {nome, email, senha});
            setMensagemSucesso('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
        } else {
            setErro('Preencha todos os campos.');
        }
    };

    return (
        <div className="cadastro-usuario-container">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit} className="cadastro-form">
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

            {erro && <p className="erro">{erro}</p>}
            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default CadastroUsuario;
