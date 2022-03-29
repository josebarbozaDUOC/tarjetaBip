document.querySelector("#btnBuscar").addEventListener('click', function () {
    var numBip = document.getElementById("txtNumBip").value;
    console.log(numBip);
    obtener_registro(numBip);

});

function obtener_registro(numBip) {

    var datos = null;
    let url = 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numBip;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();


    api.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);

            // para obtener los primeros datos del json
            console.log(datos);
            console.log(datos.saldoTarjeta);


            var id_bip = datos.id;
            var estado = datos.estadoContrato;
            var saldo = datos.saldoTarjeta;
            // var fecha = datos.fechaSaldo;


            $('#id_bip').html(id_bip);
            $('#estado').html(estado);
            $('#saldo').html(saldo);
            $('#fecha').html(datos.fechaSaldo);

        }
    };
    api.open("GET", url, true);
    api.send();



}