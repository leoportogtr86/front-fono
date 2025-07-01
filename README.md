# Clínica de Terapia Fonoaudiológica Infantil

Este repositório reúne a versão web em React.js e o aplicativo mobile desenvolvido com **React Native** utilizando **Expo**. O sistema permite gerenciar crianças, fonoaudiólogos, avaliações e intervenções terapêuticas de maneira prática.

## Tecnologias Utilizadas

- **React.js** - Utilizado na versão web do projeto.
- **React Native** e **Expo** - Base do aplicativo mobile localizado em `expo-app`.
- **CSS Puro** - Estilização da interface web.
- **React Router DOM** - Para gerenciamento de rotas na versão web.
- **Axios (opcional)** - Para realizar chamadas HTTP (pode ser substituído por `fetch`).

## Funcionalidades

- **Cadastro de Crianças** - Cadastrar novos pacientes.
- **Atualização de Crianças** - Atualizar os dados dos pacientes.
- **Cadastro de Fonoaudiólogos** - Gerenciar os profissionais da clínica.
- **Gerenciamento de Avaliações** - Adicionar, buscar, atualizar e deletar avaliações.
- **Gerenciamento de Intervenções** - Adicionar, buscar, atualizar e deletar intervenções.

## Requisitos

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Scripts Disponíveis

Estes são os comandos mais comuns durante o desenvolvimento:

| Comando       | Descrição                         |
|---------------|-----------------------------------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite |
| `npm run build` | Gera os arquivos de produção      |
| `npm run preview` | Visualiza localmente o build gerado |
| `npm run lint` | Executa a análise estática de código |

## Como Executar o Projeto Web

Siga os passos abaixo para rodar a versão web do projeto. Antes de iniciar,
altere o arquivo `src/service/fonoaudiologoService.js` substituindo `API_URL`
pelo endereço do seu backend:

### 1. Clonar o Repositório

```bash
git clone https://github.com/leoportogtr86/front-fono.git
cd front-fono
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Executar o Projeto

```bash
npm run dev
```

O projeto será iniciado e estará disponível no endereço [http://localhost:3000](http://localhost:3000).

### 4. Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados ficarão na pasta `build/`.

## Como Executar o App Mobile

Para rodar o aplicativo mobile desenvolvido com React Native e Expo:

```bash
cd expo-app
npm install
npx expo start
```

Esse comando abrirá o servidor do Expo, permitindo a execução em emuladores ou dispositivos físicos.

## Estrutura de Pastas

Abaixo está a estrutura principal de pastas do projeto:

```bash
src/
│
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
│   ├── criancas/       # Páginas para gerenciar crianças
│   ├── fonoaudiologos/ # Páginas para gerenciar fonoaudiólogos
│   ├── avaliacoes/     # Páginas para gerenciar avaliações
│   ├── intervencoes/   # Páginas para gerenciar intervenções
│   ├── Login.js        # Página de login
│   ├── Home.js         # Página inicial
│   └── Contato.js      # Página de contato
├── App.js              # Configuração principal de rotas
├── index.js            # Ponto de entrada da aplicação
├── assets/             # Arquivos estáticos (imagens, ícones)
└── styles/             # Arquivos de estilos (CSS)
expo-app/               # Aplicativo mobile em React Native (Expo)
```

## Principais Páginas

- **/usuarios/cadastrar**: Tela de cadastro de novos usuários.
- **/criancas/cadastrar**: Página para cadastrar novas crianças.
- **/avaliacoes/hub**: Hub para gerenciar avaliações (buscar, cadastrar, atualizar, deletar).
- **/intervencoes/hub**: Hub para gerenciar intervenções (buscar, cadastrar, atualizar, deletar).

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para sua branch: `git push origin minha-feature`
5. Abra um Pull Request.

