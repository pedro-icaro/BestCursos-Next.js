<?php

include "conexao.php";

$usuario = $_POST["usuario"];
$senha = $_POST["senha"];

$query = "SELECT * FROM `dados` WHERE usuario = {$usuario} AND senha = {$senha}";
$resultado = mysqli_query($conn,$query);
$user = mysqli_fetch_assoc($resultado);

if(mysqli_num_rows($resultado) > 0){
    session_start();
    $_SESSION['id'] = $user['id'];
    $_SESSION['nome'] = $user['nome'];
    header('./home/page.tsx');
}else{
    header('./page.tsx');
}


?>