import { cadastrar, logar, pegarNome } from "../../repository/cadastro/cadastroRepository.js";
import { validarCadastro, validarLogin, validarPegarNome } from "../../validation/cadastro/cadastroValidation.js";
import { converterDataBrasileiraParaISO } from "../../utils/datatime.js";

export async function cadastrarService(informacoes){
    try {
    validarCadastro(informacoes);

    
    if (informacoes.nascimento) {
        informacoes.nascimento = converterDataBrasileiraParaISO(informacoes.nascimento);
    }

    const resposta = await cadastrar(informacoes);

    return resposta;

    }
    catch (error) {
    throw error

    }
}

export async function logarService(infos){
    try {
    validarLogin(infos);
    
    const conta = await logar(infos);

    return conta;
    } 
    catch (error) {
        throw error
    }
}

export async function pegarNomeService(id){
    try {
    validarPegarNome(id);
    
    const nome = await pegarNome(id);

    return nome;

    } 
    catch (error) {
    throw error;    
    }
} 
