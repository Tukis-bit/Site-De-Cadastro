import { cadastrarAdm, logarAdm, permitirAdm } from "../../repository/cadastro_adm/cadastroAdm.js";
import { validarAdmLogin, validarCadastroAdm, validarPermissaoAdm } from "../../validation/cadastro_adm/cadastroAdm.js";


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

export async function permitirAdmService(id_adm,id_requerido){
    try {
      validarPermissaoAdm(id_adm,id_requerido);
      
      const resposta = await permitirAdm(id_adm,id_requerido);

      return resposta;
    } 
    catch (error) {
        throw error;
    }
}