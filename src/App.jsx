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

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/cadastro-avaliacao"} element={<CadastroAvaliacao/>}/>
                <Route path={"/cadastro-crianca"} element={<CadastroCrianca/>}/>
                <Route path={"/cadastro-fonoaudiologo"} element={<CadastroFonoaudiologo/>}/>
                <Route path={"/cadastro-intervencao"} element={<CadastroIntervencao/>}/>
                <Route path={"/editar-avaliacao"} element={<EditarAvaliacao/>}/>
                <Route path={"/editar-crianca"} element={<EditarCrianca/>}/>
                <Route path={"/editar-intervencao"} element={<EditarIntervencao/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
