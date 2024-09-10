import { useState } from 'react';
import './styles.css';

function AtualizarAvaliacao() {
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

    const handleUpdate = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
        // Simulação de atualização (substituir por chamada real ao backend)
        if (avaliacao) {
            console.log('Avaliação atualizada:', avaliacao);
            setMensagemSucesso('Avaliação atualizada com sucesso.');
        }
    };

    const handleChange = (e) => {
        setAvaliacao({
            ...avaliacao,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="atualizar-avaliacao-container">
            <h2>Atualizar Avaliação</h2>
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
                <form onSubmit={handleUpdate} className="update-form">
                    <div className="form-group">
                        <label htmlFor="paciente">Paciente:</label>
                        <input
                            type="text"
                            id="paciente"
                            name="paciente"
                            value={avaliacao.paciente}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dataAvaliacao">Data da Avaliação:</label>
                        <input
                            type="date"
                            id="dataAvaliacao"
                            name="dataAvaliacao"
                            value={avaliacao.dataAvaliacao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={avaliacao.descricao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resultado">Resultado:</label>
                        <textarea
                            id="resultado"
                            name="resultado"
                            value={avaliacao.resultado}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Atualizar Avaliação</button>
                </form>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default AtualizarAvaliacao;
