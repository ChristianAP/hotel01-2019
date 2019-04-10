var productos = [];
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

    var objProduct = {
        numero : numero,
        ubicacion : ubicacion,
        fecha : fecha,
        nombre : nombre,
        dni : dni,
        tipo : tipo,
        personas : personas,
    }

    document.getElementById("numero").value = "";
    document.getElementById("ubicacion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("personas").value = "";

    
}
