import {useState} from 'react';
import './styles.css';

function BuscarAvaliacaoDetalhada() {
    const [termo, setTermo] = useState('');
    const [avaliacao, setAvaliacao] = useState(null);
    const [erro, setErro] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setErro('');
        // Simulação de busca (substituir por chamada real ao backend)
        if (termo.toLowerCase() === 'joão silva') {
            setAvaliacao({
                id: 1,
                paciente: 'João Silva',
                dataAvaliacao: '2024-07-15',
                resultado: 'Ótimo progresso com a terapia de articulação.',
                descricao: 'Avaliação de articulação com foco em fonemas problemáticos.'
            });
        } else {
            setAvaliacao(null);
            setErro('Nenhuma avaliação encontrada para esse paciente.');
        }
    };

    return (
        <div className="buscar-avaliacao-container">
            <h2>Buscar Avaliação</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Digite o nome do paciente"
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    required
                />
                <button type="submit">Buscar</button>
            </form>

            {erro && <p className="erro">{erro}</p>}

            {avaliacao && (
                <div className="avaliacao-detalhada">
                    <h3>Detalhes da Avaliação</h3>
                    <p><strong>Paciente:</strong> {avaliacao.paciente}</p>
                    <p><strong>Data da Avaliação:</strong> {avaliacao.dataAvaliacao}</p>
                    <p><strong>Descrição:</strong> {avaliacao.descricao}</p>
                    <p><strong>Resultado:</strong> {avaliacao.resultado}</p>
                </div>
            )}
        </div>
    );
}

export default BuscarAvaliacaoDetalhada;
