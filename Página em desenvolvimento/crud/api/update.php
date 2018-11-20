<?php

$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

$id = $_POST["id"];
$nome = $_POST["nome"];
$login_usuario = $_POST["login"];
$senha_usuario = $_POST["senha"];
$cpf = $_POST["cpf"];

try {
	$result = mysqli_query($connect, "UPDATE usuario SET login_usuario = '$login_usuario', senha_usuario = '$senha_usuario', CPF = '$cpf', nome = '$nome' WHERE id_usuario = '$id'");
	echo "Usuário atualizado";
} catch(Exception $ex) {
	die("Não foi possível atualizar os dados do usuário. Erro: ") . $ex->getMessage();
}

