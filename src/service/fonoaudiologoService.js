const API_URL = 'http://seu-backend-url/api/fonoaudiologos'; // Substitua pelo URL do seu backend

export const cadastrarFonoaudiologo = async (fonoaudiologo) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fonoaudiologo),
    });

    if (!response.ok) {
        throw new Error('Erro ao cadastrar fonoaudiólogo');
    }

    return response.json();
};
