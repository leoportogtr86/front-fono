import { useState } from 'react';
import './styles.css';

function BuscarCrianca() {
    const [termo, setTermo] = useState('');
    const [crianca, setCrianca] = useState(null);
    const [erro, setErro] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setErro('');
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

    return (
        <div className="buscar-crianca-container">
            <h2>Buscar Criança</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Digite o nome da criança"
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    required
                />
                <button type="submit">Buscar</button>
            </form>

            {erro && <p className="erro">{erro}</p>}

            {crianca && (
                <div className="crianca-detalhada">
                    <h3>Detalhes da Criança</h3>
                    <p><strong>Nome:</strong> {crianca.nome}</p>
                    <p><strong>Data de Nascimento:</strong> {crianca.dataNascimento}</p>
                    <p><strong>Responsável:</strong> {crianca.responsavelNome}</p>
                    <p><strong>Contato do Responsável:</strong> {crianca.responsavelContato}</p>
                </div>
            )}
        </div>
    );
}

export default BuscarCrianca;
