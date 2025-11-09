import { cadastrar } from "../../repository/cadastro/cadastroRepository.js";
import { validarCadastro } from "../../validation/cadastro/cadastroValidation.js";

export async function cadastrarService(informacoes){
    try {
    validarCadastro(informacoes);
    
    const resposta = await cadastrar(informacoes);

    return resposta;

    } 
    catch (error) {
    throw error    

    }
}