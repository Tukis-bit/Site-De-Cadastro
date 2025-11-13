import { cadastrarAdm } from "../../repository/cadastro_adm/cadastroAdm.js";
import { validarCadastroAdm } from "../../validation/cadastro_adm/cadastroAdm.js";


export async function cadastrarAdmService(infos){
    try {
        validarCadastroAdm(infos);

        const resposta = await cadastrarAdm(infos);
         
        return resposta
    } 
    catch (error) {
        throw error;
    }
}