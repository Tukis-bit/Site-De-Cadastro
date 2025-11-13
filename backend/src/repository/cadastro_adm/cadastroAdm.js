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