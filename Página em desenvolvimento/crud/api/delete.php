<?php

$connect = mysqli_connect("localhost", "root", "", "usuarioPI");
$id = $_POST["id"];

try {
		$result = mysqli_query($connect, "DELETE FROM usuario Where id_usuario = '$id' LIMIT 1");
		echo "Um usuário foi excluído";
	} catch(Exception $ex) {
		die("Não foi possível excluir o usuário: ") . $ex->getMessage();
	}