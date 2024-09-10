import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import CadastroAvaliacao from "./pages/CadastroAvaliacao/index.jsx";
import CadastroCrianca from "./pages/CadastroCrianca/index.jsx";
import CadastroFonoaudiologo from "./pages/CadastroFonoaudiologo/index.jsx";
import CadastroIntervencao from "./pages/CadastroIntervencao/index.jsx";
import EditarAvaliacao from "./pages/EditarAvaliacao/index.jsx";
import EditarCrianca from "./pages/EditarCrianca/index.jsx";
import EditarIntervencao from "./pages/EditarIntervencao/index.jsx";
import Header from "./components/Header/index.jsx";
import Login from "./pages/Login/index.jsx";
import Contato from "./pages/Contato/index.jsx";
import HubAvaliacoes from "./pages/HubAvaliacoes/index.jsx";
import HubCriancas from "./pages/HubCriancas/index.jsx";
import HubIntervencoes from "./pages/HubIntervencoes/index.jsx";
import BuscarAvaliacoes from "./pages/BuscarAvaliacoes/index.jsx";
import AtualizarAvaliacao from "./pages/AtualizarAvaliacao/index.jsx";
import DeletarAvaliacao from "./pages/DeletarAvaliacao/index.jsx";
import BuscarCrianca from "./pages/BuscarCrianca/index.jsx";
import AtualizarCrianca from "./pages/AtualizarCrianca/index.jsx";
import DeletarCrianca from "./pages/DeletarCrianca/index.jsx";
import BuscarIntervencao from "./pages/BuscarIntervencao/index.jsx";
import AtualizarIntervencao from "./pages/AtualizarIntervencao/index.jsx";
import DeletarIntervencao from "./pages/DeletarIntervencao/index.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/avaliacoes"} element={<HubAvaliacoes/>}/>
                <Route path={"/buscar-avaliacoes"} element={<BuscarAvaliacoes/>}/>
                <Route path={"/atualizar-avaliacao"} element={<AtualizarAvaliacao/>}/>
                <Route path={"/deletar-avaliacao"} element={<DeletarAvaliacao/>}/>
                <Route path={"/criancas"} element={<HubCriancas/>}/>
                <Route path={"/buscar-crianca"} element={<BuscarCrianca/>}/>
                <Route path={"/atualizar-crianca"} element={<AtualizarCrianca/>}/>
                <Route path={"/deletar-crianca"} element={<DeletarCrianca/>}/>
                <Route path={"/intervencoes"} element={<HubIntervencoes/>}/>
                <Route path={"/buscar-intervencao"} element={<BuscarIntervencao/>}/>
                <Route path={"/atualizar-intervencao"} element={<AtualizarIntervencao/>}/>
                <Route path={"/deletar-intervencao"} element={<DeletarIntervencao/>}/>
                <Route path={"/cadastro-avaliacao"} element={<CadastroAvaliacao/>}/>
                <Route path={"/cadastro-crianca"} element={<CadastroCrianca/>}/>
                <Route path={"/cadastro-fonoaudiologo"} element={<CadastroFonoaudiologo/>}/>
                <Route path={"/cadastro-intervencao"} element={<CadastroIntervencao/>}/>
                <Route path={"/editar-avaliacao"} element={<EditarAvaliacao/>}/>
                <Route path={"/editar-crianca"} element={<EditarCrianca/>}/>
                <Route path={"/editar-intervencao"} element={<EditarIntervencao/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/contato"} element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
