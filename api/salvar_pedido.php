<?php

require_once("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$total = $dados["total"];

$stmt = $pdo->prepare(
"INSERT INTO pedidos(total) VALUES(?)"
);

$stmt->execute([$total]);

echo json_encode([
    "status"=>"ok"
]);

?>