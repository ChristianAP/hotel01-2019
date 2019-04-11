var productos = [];
var q=1;
function enviar() {
    let numero = document.getElementById('numero').value;
    let ubicacion = document.getElementById('ubicacion').value;
    let fecha = document.getElementById('fecha').value;
    let nombre = document.getElementById('nombre').value;
    let dni = document.getElementById('dni').value;
    let tipo = document.getElementById('tipo').value;
    let personas = document.getElementById('personas').value;

 

    console.log(numero);
    console.log(ubicacion);
    console.log(fecha);
    console.log(nombre);
    console.log(dni);
    console.log(tipo);
    console.log(personas);

    document.getElementById("numero").value = "";
    document.getElementById("ubicacion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("personas").value = "";

    document.getElementById("tabla_datos").insertRow(-1).innerHTML = "<td>"+q+"</td><td>"+nombre+"</td><td>"+dni+"</td><td>"+fecha+"</td><td>"+ubicacion+"</td>";
    q++;

}

