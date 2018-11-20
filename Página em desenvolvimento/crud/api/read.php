<?php

try {
	$connect = mysqli_connect("localhost", "root", "", "usuarioPI");

	$result = mysqli_query($connect, "SELECT * FROM Usuario");
	$arrayResult = mysqli_fetch_all($result, MYSQLI_ASSOC);
	echo "Deu bom" . " = " . json_encode($arrayResult);
} catch (Exception $ex) {
	die("Não foi possível listar o(s) usuário(s). Erro: ") . $ex->getMessage();
}

// $connect = mysqli_connect("localhost", "root", "", "usuarioPI");

// function sendResults($connect){
//     $result = mysqli_query($connect, "SELECT * FROM Usuario");

//     $arrayResult = $result->fetchAll(PDO::FETCH_ASSOC);

//     if(empty($arrayResult)){
//         $arrayResult = ['Nenhum resultado encontrado'];
//     }

//     echo json_encode($arrayResult);
// }

// try {
//	   sendResults($bd);
// 	   echo "Deu bom";
// }
// catch(Exception $ex){
//     die ("Não foi possível listar os usuários: " . $ex->getMessage());
// }