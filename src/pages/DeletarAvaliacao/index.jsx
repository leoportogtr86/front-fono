import { useState } from 'react';
import './styles.css';

function DeletarAvaliacao() {
    const [termo, setTermo] = useState('');
    const [avaliacao, setAvaliacao] = useState(null);
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [erro, setErro] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
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

    const handleDelete = () => {
        setErro('');
        setMensagemSucesso('');
        // Simulação de deleção (substituir por chamada real ao backend)
        if (avaliacao) {
            console.log('Avaliação deletada:', avaliacao);
            setMensagemSucesso('Avaliação deletada com sucesso.');
            setAvaliacao(null); // Remove a avaliação da tela
        }
    };

    return (
        <div className="deletar-avaliacao-container">
            <h2>Deletar Avaliação</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Digite o nome do paciente"
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    required
                />
                <button type="submit">Buscar Avaliação</button>
            </form>

            {erro && <p className="erro">{erro}</p>}

            {avaliacao && (
                <div className="avaliacao-detalhada">
                    <h3>Detalhes da Avaliação</h3>
                    <p><strong>Paciente:</strong> {avaliacao.paciente}</p>
                    <p><strong>Data da Avaliação:</strong> {avaliacao.dataAvaliacao}</p>
                    <p><strong>Descrição:</strong> {avaliacao.descricao}</p>
                    <p><strong>Resultado:</strong> {avaliacao.resultado}</p>
                    <button className="delete-button" onClick={handleDelete}>
                        Deletar Avaliação
                    </button>
                </div>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default DeletarAvaliacao;
