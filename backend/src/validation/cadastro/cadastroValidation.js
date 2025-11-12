
export function validarCadastro(informacoes){
    if(!informacoes.nome)
        throw new Error('É necessário informar o nome');
    
    if(!informacoes.nascimento)
        throw new Error('É necessário informar a data de nascimento');
    
    if(!informacoes.cpf)
        throw new Error('É necessário informar o CPF');
    
    if(!informacoes.email)
        throw new Error('É necessário informar o email');
    
    if(!informacoes.sexo)
        throw new Error('É necessário informar o sexo');
    
    if(!informacoes.senha)
        throw new Error('É necessário informar a senha');
    
    if(informacoes.senha.length <= 7)
        throw new Error('A senha tem que ter pelo menos 8 caracteres');
    
}

export function validarLogin(infos){
    if(!infos.senha)
        throw new Error('É necessário informar a senha');
    if(!infos.email)
        throw new Error("É necessário informar o email");
}

export function validarPegarNome(id){
    if(!id)
        throw new Error('Usuário não encontrado');
}