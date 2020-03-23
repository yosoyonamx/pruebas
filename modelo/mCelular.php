<?php

require_once "../config/conexion.php";

class mCelular
{

    private $base;

    public function __construct()
    {
        global $conexion;
        $this->base = $conexion;
    }

    private function list_result($sql)
    {
        return mysqli_query($this->base, $sql);
    }

    public function list_phone()
    {
        return $this->list_result('SELECT * FROM celulares');
    }
}
