import cad from "./controller/cadastro/cadastroController.js";
import cadAdm from "./controller/cadastro_adm/cadastroAdmController.js";

export function Rotas(api){
    api.use(cad)
    api.use(cadAdm)
}