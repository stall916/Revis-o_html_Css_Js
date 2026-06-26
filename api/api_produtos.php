<?php

header("Content-Type: application/json");

require_once("../db/conexao.php");

$sql = $pdo->query("SELECT * FROM produtos");

echo json_encode(
    $sql->fetchAll(PDO::FETCH_ASSOC)
);

?>