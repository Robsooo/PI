CREATE TABLE usuario(
    id_usuario SERIAL,
    login_usuario VARCHAR(45) NOT NULL,
    senha_usuario VARCHAR(45) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf INT(11) NOT NULL, 
    PRIMARY KEY(id_usuario)
);