import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Login } from "./pages/login";
import OlaUsuario from "./pages/pos-cad";
import { CadastrarAdm } from "./pages/cadastro_adm";
import { LoginAdm } from "./pages/loginAdm";
import PosCadAdm from "./pages/pos-cadAdm";




export default function Navegação(){

    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/logar" element={<Login/>}/>
            <Route path="/olaUsuario" element={<OlaUsuario/>}/>
            <Route path="/cadastrarAdm" element={<CadastrarAdm/>}/>
            <Route path="/logarAdm" element={<LoginAdm/>}/>
            <Route path="/pos-cadAdm" element={<PosCadAdm/>}/>

        </Routes>
        </BrowserRouter>

    )
}
