import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Login } from "./pages/login";
import OlaUsuario from "./pages/pos-cad";




export default function Navegação(){

    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/logar" element={<Login/>}/>
            <Route path="/olaUsuario" element={<OlaUsuario/>}/>

        </Routes>
        </BrowserRouter>

    )
}
