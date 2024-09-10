import { useState } from 'react';
import './styles.css';

function DeletarIntervencao() {
    const [termo, setTermo] = useState('');
    const [intervencao, setIntervencao] = useState(null);
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [erro, setErro] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
        // Simulação de busca (substituir por chamada real ao backend)
        if (termo.toLowerCase() === 'joão silva') {
            setIntervencao({
                id: 1,
                crianca: 'João Silva',
                dataIntervencao: '2024-07-15',
                descricao: 'Intervenção para melhorar a fluência verbal.',
                resultados: 'Ótimos resultados com progressos claros.'
            });
        } else {
            setIntervencao(null);
            setErro('Nenhuma intervenção encontrada para essa criança.');
        }
    };

    const handleDelete = () => {
        setErro('');
        setMensagemSucesso('');
        // Simulação de deleção (substituir por chamada real ao backend)
        if (intervencao) {
            console.log('Intervenção deletada:', intervencao);
            setMensagemSucesso('Intervenção deletada com sucesso.');
            setIntervencao(null); // Remove a intervenção da tela
        }
    };

    return (
        <div className="deletar-intervencao-container">
            <h2>Deletar Intervenção</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Digite o nome da criança"
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    required
                />
                <button type="submit">Buscar Intervenção</button>
            </form>

            {erro && <p className="erro">{erro}</p>}

            {intervencao && (
                <div className="intervencao-detalhada">
                    <h3>Detalhes da Intervenção</h3>
                    <p><strong>Criança:</strong> {intervencao.crianca}</p>
                    <p><strong>Data da Intervenção:</strong> {intervencao.dataIntervencao}</p>
                    <p><strong>Descrição:</strong> {intervencao.descricao}</p>
                    <p><strong>Resultados:</strong> {intervencao.resultados}</p>
                    <button className="delete-button" onClick={handleDelete}>
                        Deletar Intervenção
                    </button>
                </div>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default DeletarIntervencao;
