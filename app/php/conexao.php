<?php

$conn = new mysqli("localhost","root","","./bd_bookshare");
// Checando conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Se chegar aqui, a conexão deu certo
?>