
<?php
/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == 'GET') {
	try {
		$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

		$result = mysqli_query($connect, "SELECT * FROM Usuario");
		$arrayResult = mysqli_fetch_all($result, MYSQLI_ASSOC);
		echo "Deu bom" . " = " . json_encode($arrayResult);
	} catch (Exception $ex) {
		die("Não foi possível listar o(s) usuário(s). Erro: ") . $ex->getMessage();
	}
}


if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

	$login_usuario = $_POST["login"];
	$senha_usuario = $_POST["senha"];
	$cpf = $_POST["cpf"];
	$nome = $_POST["nome"];

	try {
		$result = mysqli_query($connect, "INSERT INTO usuario(login_usuario, senha_usuario, CPF, nome) VALUES ('$login_usuario', '$senha_usuario', '$cpf', '$nome') ");
		echo "Usuário adicionado";
	} catch (Exception $ex) {
		die("Não foi possível adicionar o usuário") . $ex->getMessage();
	}
}

if($_SERVER['REQUEST_METHOD'] == 'PUT') {
	$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

	$id = $_GET["id"];
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
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
	$connect = mysqli_connect("localhost", "root", "", "usuarioPI");
	$id = $_POST["id"];

	try {
		$result = mysqli_query($connect, "DELETE FROM usuario Where id_usuario = '$id'");
		echo "Um usuário foi excluído";
	} catch(Exception $ex) {
		die("Não foi possível excluir o usuário: ") . $ex->getMessage();
	}
}
*/