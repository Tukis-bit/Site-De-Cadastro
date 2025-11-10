import { cadastrar } from "../../repository/cadastro/cadastroRepository.js";
import { validarCadastro } from "../../validation/cadastro/cadastroValidation.js";
import { converterDataBrasileiraParaISO } from "../../utils/datatime.js";

export async function cadastrarService(informacoes){
    try {
    validarCadastro(informacoes);

    // Converter data de nascimento para formato ISO
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
