
export function validarCadastroAdm(infos){
    if(!infos.nome)
    throw new Error('É necessário informar o nome');
    
    if(!infos.email)
    throw new Error('É necessário informar o email');
    
    if(!infos.senha)
    throw new Error('É necessário informar a senha');
 
    if(infos.senha.length <= 7)
    throw new Error('A senha deve ter no mínimo 8 caracteres');
 
    
    

}

export function validarAdmLogin(infos){
    if(!infos.senha)
        throw new Error('É necessário informar a senha');
    if(!infos.email)
        throw new Error("É necessário informar o email");
    
}

export function validarPermissaoAdm(id_adm,id_requerido){
    if(!id_adm)
        throw new Error('ADM não encontrado');
    
    
    if(!id_requerido)
        throw new Error('Usuario não encontrado');
    

}