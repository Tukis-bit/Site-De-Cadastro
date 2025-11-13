create database cadastro;
use cadastro;

create table cadastro_user(
id int primary key auto_increment,
nome varchar (150),
nascimento date,
cpf char (14),
email varchar(150),
sexo enum('Masculino','Feminino','Outros'),
senha varchar(200)
);

create table cadastro_adm(
id int primary key auto_increment,
nome varchar (200),
email varchar(200),
senha varchar(200),
permissao boolean
);
