import connection from "../connection.js";


export async function cadastrar(informacoes){
    const comando = `
    insert into cadastro_user (nome,nascimento,cpf,email,sexo,senha)
    values 
    (?,?,?,?,?,MD5(?))
    `
    await connection.query(comando,[informacoes.nome,informacoes.nascimento,informacoes.cpf,informacoes.email,informacoes.sexo,informacoes.senha]);

    return 'ok'
}

export async function logar(infos){
    const comando = `
    select * from cadastro_user 
    where email = ?
    and senha = MD5(?)
    `
    const [registros] = await connection.query(comando,[infos.email,infos.senha]);

    if(registros.length === 0)
        throw new Error('Email Ou Senha invalidos');

    return registros[0];
}

export async function pegarNome(id){
    const comando = `
    select nome from cadastro_user
    where id = ?
    ` 

    const [nome] = await connection.query(comando,[id]);

    return nome[0];
}