import { useState, useEffect } from 'react';
import './styles.css';

function EditarIntervencao({ idIntervencao }) {
    const [criancaId, setCriancaId] = useState('');
    const [fonoaudiologoId, setFonoaudiologoId] = useState('');
    const [dataIntervencao, setDataIntervencao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [resultadosObtidos, setResultadosObtidos] = useState('');

    useEffect(() => {
        // Carregar os dados da intervenção pelo id
        // fetch(`/api/intervencoes/${idIntervencao}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setCriancaId(data.criancaId);
        //         setFonoaudiologoId(data.fonoaudiologoId);
        //         setDataIntervencao(data.data_intervencao);
        //         setDescricao(data.descricao);
        //         setResultadosObtidos(data.resultados_obtidos);
        //     });
    }, [idIntervencao]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const intervencaoAtualizada = {
            criancaId,
            fonoaudiologoId,
            data_intervencao: dataIntervencao,
            descricao,
            resultados_obtidos: resultadosObtidos,
        };
        console.log('Intervenção atualizada:', intervencaoAtualizada);
        // Integrar com o backend usando intervencaoController
    };

    return (
        <div className="editar-intervencao-container">
            <h2>Editar Intervenção</h2>
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
                    <label htmlFor="dataIntervencao">Data da Intervenção:</label>
                    <input
                        type="date"
                        id="dataIntervencao"
                        value={dataIntervencao}
                        onChange={(e) => setDataIntervencao(e.target.value)}
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
                    <label htmlFor="resultadosObtidos">Resultados Obtidos:</label>
                    <textarea
                        id="resultadosObtidos"
                        value={resultadosObtidos}
                        onChange={(e) => setResultadosObtidos(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarIntervencao;
