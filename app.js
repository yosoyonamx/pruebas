$(function () {

    function borrar(id){
        alert(id);
    }

    function editar(datos){

    }

    contenido = document.querySelector('#contenido');

    extraccion();

    $('#calero').click(function () {
        contenido.innerHTML = '';
        extraccion();
    });

    function extraccion() {
        $.post('controller/cCelular.php?op=1', function (dato) {
            tablita(dato);
        }, "json");
    }

    function tablita(dato) {
        for (let valor of dato) {
            contenido.innerHTML += '<tr>' +
                '<td>' + valor.id + '</td>' +
                '<td>' + valor.marca + '</td>' +
                '<td>' + valor.model + '</td>' +
                '<td>' + valor.stock + '</td>' +
                '<td>' + '<button type="button" onclick="editar('+valor+')" class="btn btn-warning btn-sm">Editar</button>' + '</td>' +
                '<td>' + '<button type="button" onclick="borrar('+valor.id+');" class="btn btn-danger btn-sm">Eliminar</button>' + '</td>' +
                '</tr>';
        }
    }

});