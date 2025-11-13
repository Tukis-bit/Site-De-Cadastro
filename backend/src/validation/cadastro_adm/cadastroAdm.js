
export function validarCadastroAdm(infos){
    if(!infos.nome)
    throw new Error('É necessário informar o nome');
    
    if(!infos.email)
    throw new Error('É necessário informar o email');
    
    if(!infos.senha)
    throw new Error('É necessário informar a senha');
 
    
    

}