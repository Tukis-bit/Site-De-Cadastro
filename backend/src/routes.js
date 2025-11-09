import cad from "./controller/cadastro/cadastroController.js";

export function Rotas(api){
    api.use(cad)
}