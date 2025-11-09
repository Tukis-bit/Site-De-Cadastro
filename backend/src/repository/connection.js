import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tukis0108",
    database: "cadastro"
});

export default connection;
