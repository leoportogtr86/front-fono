import { useState } from 'react';
import './styles.css';

function AtualizarIntervencao() {
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

    const handleUpdate = (event) => {
        event.preventDefault();
        setErro('');
        setMensagemSucesso('');
        // Simulação de atualização (substituir por chamada real ao backend)
        if (intervencao) {
            console.log('Intervenção atualizada:', intervencao);
            setMensagemSucesso('Intervenção atualizada com sucesso.');
        }
    };

    const handleChange = (e) => {
        setIntervencao({
            ...intervencao,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="atualizar-intervencao-container">
            <h2>Atualizar Intervenção</h2>
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
                <form onSubmit={handleUpdate} className="update-form">
                    <div className="form-group">
                        <label htmlFor="crianca">Nome da Criança:</label>
                        <input
                            type="text"
                            id="crianca"
                            name="crianca"
                            value={intervencao.crianca}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dataIntervencao">Data da Intervenção:</label>
                        <input
                            type="date"
                            id="dataIntervencao"
                            name="dataIntervencao"
                            value={intervencao.dataIntervencao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={intervencao.descricao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resultados">Resultados Obtidos:</label>
                        <textarea
                            id="resultados"
                            name="resultados"
                            value={intervencao.resultados}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Atualizar Intervenção</button>
                </form>
            )}

            {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
        </div>
    );
}

export default AtualizarIntervencao;
