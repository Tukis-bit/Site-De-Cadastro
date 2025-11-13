import { cadastrarAdm, logarAdm } from "../../repository/cadastro_adm/cadastroAdm.js";
import { validarAdmLogin, validarCadastroAdm } from "../../validation/cadastro_adm/cadastroAdm.js";


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

export async function logarAdmService(infos) {
    try {
    validarAdmLogin(infos);
    
    const registros = await logarAdm(infos);

    return registros;
    } 
    catch (error) {
        throw error;
    }
}