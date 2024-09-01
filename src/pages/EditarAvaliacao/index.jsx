import { useState, useEffect } from 'react';
import './styles.css';

function EditarAvaliacao({ idAvaliacao }) {
    const [criancaId, setCriancaId] = useState('');
    const [fonoaudiologoId, setFonoaudiologoId] = useState('');
    const [dataAvaliacao, setDataAvaliacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        // Carregar os dados da avaliação pelo id
        // fetch(`/api/avaliacoes/${idAvaliacao}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setCriancaId(data.criancaId);
        //         setFonoaudiologoId(data.fonoaudiologoId);
        //         setDataAvaliacao(data.data_avaliacao);
        //         setDescricao(data.descricao);
        //         setResultado(data.resultado);
        //     });
    }, [idAvaliacao]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const avaliacaoAtualizada = {
            criancaId,
            fonoaudiologoId,
            data_avaliacao: dataAvaliacao,
            descricao,
            resultado,
        };
        console.log('Avaliação atualizada:', avaliacaoAtualizada);
        // Integrar com o backend usando avaliacaoController
    };

    return (
        <div className="editar-avaliacao-container">
            <h2>Editar Avaliação</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="criancaId">ID da Criança:</label>
                    <input
                        type="number"
                        id="criancaId"
                        value={criancaId}
                        onChange={(e) => setCriancaId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fonoaudiologoId">ID do Fonoaudiólogo:</label>
                    <input
                        type="number"
                        id="fonoaudiologoId"
                        value={fonoaudiologoId}
                        onChange={(e) => setFonoaudiologoId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dataAvaliacao">Data da Avaliação:</label>
                    <input
                        type="date"
                        id="dataAvaliacao"
                        value={dataAvaliacao}
                        onChange={(e) => setDataAvaliacao(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="resultado">Resultado:</label>
                    <textarea
                        id="resultado"
                        value={resultado}
                        onChange={(e) => setResultado(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarAvaliacao;
