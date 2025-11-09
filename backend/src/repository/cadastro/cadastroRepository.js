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