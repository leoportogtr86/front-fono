import { useState } from 'react';
import './styles.css';

function DeletarCrianca() {
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

    const handleDelete = () => {
        setErro('');
        setMensagemSucesso('');
        // Simulação de deleção (substituir por chamada real ao backend)
        if (crianca) {
            console.log('Criança deletada:', crianca);
            setMensagemSucesso('Criança deletada com sucesso.');
            setCrianca(null); // Limpa os dados da criança da tela
        }
    };

    return (
        <div className="deletar-crianca-container">
            <h2>Deletar Criança</h2>
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
                <div className="crianca-detalhada">
                    <h3>Detalhes da Criança</h3>
                    <p><strong>Nome:</strong> {crianca.nome}</p>
                    <p><strong>Data de Nascimento:</strong> {crianca.dataNascimento}</p>
                    <p><strong>Responsável:</strong> {crianca.responsavelNome}</p>
                    <p><strong>Contato do Responsável:</strong> {crianca.responsavelContato}</p>
                    <button className="delete-button" onClick={handleDelete}>
                        Deletar Criança
                    </button>
                </div>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default DeletarCrianca;
