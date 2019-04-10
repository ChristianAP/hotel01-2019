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
    
}

function listar(){
    let contenido = '';
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        contenido = contenido + '<tr><td>' + (i+1) + '</td><td>' + element.name + '</td><td>' + element.price + 
        '</td><td>' + element.nombre + '</td><td>' + element.fecha   + '</td><td>';
    }
    console.log(suma);
    let igv = suma*0.18;
    let total = suma + igv;
    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
    document.getElementById('total_sub').value = suma;
    document.getElementById('igv').value = igv;
    document.getElementById('total').value = total;
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
}

function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.classList.add('dato');
    }
}
