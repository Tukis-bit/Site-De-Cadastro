import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Login } from "./pages/login";




export default function Navegação(){

    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/logar" element={<Login/>}/>

        </Routes>
        </BrowserRouter>

    )
}
