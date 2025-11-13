import connection from "../connection.js";

export async function cadastrarAdm(infos){
    const comando =`
    select * from cadastro_adm
    `

    const [registros] = await connection.query(comando);

if(registros.length === 0){
    
    const comando = `
    insert into cadastro_adm (nome,email,senha, permissao)
    values
    (?,?,MD5(?),true)
    ` 

   await connection.query(comando,[infos.nome,infos.email,infos.senha]);

    return 'Usuario permitido'

}

else{
const comando = `
    insert into cadastro_adm (nome,email,senha,permissao)
    values
    (?,?,MD5(?),false)
    ` 

   await connection.query(comando,[infos.nome,infos.email,infos.senha]);

    return 'Aguardar permissão'
}
}

export async function logarAdm(infos){
    const comando = `
    select permissao from cadastro_Adm
    where email = ?
    and senha = MD5(?)
    `

    const [registro] = await connection.query(comando,[infos.email,infos.senha]);
    
    if(registro.length === 0)
        throw new Error('Email Ou Senha invalidos');
    
    if(registro[0].permissao === 1){
    
    const comando = `
    select * from cadastro_adm 
    where email = ?
    and senha = MD5(?)
    `
    const [registros] = await connection.query(comando,[infos.email,infos.senha]);

    return registros[0];
}

else{
    throw new Error('Você não tem permissão para logar como ADM');
}
}