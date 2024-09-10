import { useState } from 'react';
import './styles.css';

function AtualizarCrianca() {
    const [termo, setTermo] = useState('');
    const [crianca, setCrianca] = useState(null);
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [erro, setErro] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
        // Simulação de busca (substituir por chamada real ao backend)
        if (termo.toLowerCase() === 'joão silva') {
            setCrianca({
                id: 1,
                nome: 'João Silva',
                dataNascimento: '2015-07-20',
                responsavelNome: 'Maria Silva',
                responsavelContato: '(11) 1234-5678'
            });
        } else {
            setCrianca(null);
            setErro('Nenhuma criança encontrada com esse nome.');
        }
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
        // Simulação de atualização (substituir por chamada real ao backend)
        if (crianca) {
            console.log('Criança atualizada:', crianca);
            setMensagemSucesso('Criança atualizada com sucesso.');
        }
    };

    const handleChange = (e) => {
        setCrianca({
            ...crianca,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="atualizar-crianca-container">
            <h2>Atualizar Criança</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Digite o nome da criança"
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    required
                />
                <button type="submit">Buscar Criança</button>
            </form>

            {erro && <p className="erro">{erro}</p>}

            {crianca && (
                <form onSubmit={handleUpdate} className="update-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome da Criança:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={crianca.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dataNascimento">Data de Nascimento:</label>
                        <input
                            type="date"
                            id="dataNascimento"
                            name="dataNascimento"
                            value={crianca.dataNascimento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsavelNome">Nome do Responsável:</label>
                        <input
                            type="text"
                            id="responsavelNome"
                            name="responsavelNome"
                            value={crianca.responsavelNome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsavelContato">Contato do Responsável:</label>
                        <input
                            type="text"
                            id="responsavelContato"
                            name="responsavelContato"
                            value={crianca.responsavelContato}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Atualizar Criança</button>
                </form>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default AtualizarCrianca;
