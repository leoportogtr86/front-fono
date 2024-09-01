import { useState, useEffect } from 'react';
import './styles.css';

function EditarCrianca({ idCrianca }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [responsavelNome, setResponsavelNome] = useState('');
    const [responsavelContato, setResponsavelContato] = useState('');
    const [fonoaudiologoResponsavelId, setFonoaudiologoResponsavelId] = useState('');

    useEffect(() => {
        // Carregar os dados da criança pelo id
        // fetch(`/api/criancas/${idCrianca}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setNome(data.nome);
        //         setDataNascimento(data.data_nascimento);
        //         setResponsavelNome(data.responsavel_nome);
        //         setResponsavelContato(data.responsavel_contato);
        //         setFonoaudiologoResponsavelId(data.fonoaudiologo_responsavelId);
        //     });
    }, [idCrianca]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const criancaAtualizada = {
            nome,
            data_nascimento: dataNascimento,
            responsavel_nome: responsavelNome,
            responsavel_contato: responsavelContato,
            fonoaudiologo_responsavelId: fonoaudiologoResponsavelId,
        };
        console.log('Criança atualizada:', criancaAtualizada);
        // Integrar com o backend usando criancaController
    };

    return (
        <div className="editar-crianca-container">
            <h2>Editar Criança</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="responsavelNome">Nome do Responsável:</label>
                    <input
                        type="text"
                        id="responsavelNome"
                        value={responsavelNome}
                        onChange={(e) => setResponsavelNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="responsavelContato">Contato do Responsável:</label>
                    <input
                        type="text"
                        id="responsavelContato"
                        value={responsavelContato}
                        onChange={(e) => setResponsavelContato(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fonoaudiologoResponsavelId">ID do Fonoaudiólogo Responsável:</label>
                    <input
                        type="number"
                        id="fonoaudiologoResponsavelId"
                        value={fonoaudiologoResponsavelId}
                        onChange={(e) => setFonoaudiologoResponsavelId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditarCrianca;
