<?php

require_once "../modelo/mCelular.php";

$option = $_GET['op'];

switch ($option) {
    case 1:
        listar_celulares();
        break;
}

function listar_celulares()
{
    $celulares = new mCelular;
    $sentencia = $celulares->list_phone();

    $array = [];

    while ($celular = mysqli_fetch_object($sentencia)) {
        array_push($array, array("id"=>$celular->idcel,"marca"=>$celular->marca,"model"=>$celular->modelo,"stock"=>$celular->stock));
    }

    echo json_encode($array);
}
