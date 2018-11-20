<?php

$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

$login_usuario = $_POST["login"];
$senha_usuario = $_POST["senha"];
$cpf = $_POST["cpf"];
$nome = $_POST["nome"];

try {
	$result = mysqli_query($connect, "INSERT INTO usuario(login_usuario, senha_usuario, CPF, nome) VALUES 
	('$login_usuario', '$senha_usuario', '$cpf', '$nome') ");
	echo "Usuário adicionado";
} catch (Exception $ex) {
	die("Não foi possível adicionar o usuário") . $ex->getMessage();
}