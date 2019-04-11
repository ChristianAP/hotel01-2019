var cuartos = [];
var clientes = [];
function enviar() {
    if (clientes.length == 0) {
        let numero = document.getElementById('numero').value;
    let ubicacion = document.getElementById('ubicacion').value;
    let fecha = document.getElementById('fecha').value;
    let nombre = document.getElementById('nombre').value;
    let dni = document.getElementById('dni').value;

    var obj_client = {
        num:numero,
        nom:nombre,
        ubi:ubicacion,
        dni:dni,
        fec:fecha,
    }
    clientes.push(obj_client);
    listar_cliente();

    document.getElementById("numero").disabled = "disabled";
    document.getElementById("nombre").disabled = "disabled";
    document.getElementById("fecha").disabled = "disabled";
    document.getElementById("ubicacion").disabled = "disabled";
    document.getElementById("dni").disabled = "disabled";
    

    
    }

    tabla2();
    function listar_cliente(){
        for (let i = 0; i < clientes.length; i++) {
            const element = clientes[i];
            document.getElementsByTagName('tbody')[0].innerHTML = "<tr><td>"+element.num+"</td><td>"+element.nom+"</td><td>"+element.dni+"</td><td>"+element.fec+"</td><td>"+element.ubi+"</td></tr>";

        }
    }
    function tabla2(){
    let tipo = document.getElementById('tipo').value;
    let personas = document.getElementById('personas').value;
    let precio = 0;
    if (tipo=="individual") {
        precio = 100;
    }else if (tipo=="doble") {
        precio=150;
    }else{
        precio=200;
    }
    var objRoom= {
        tip:tipo,
        per:personas,
        pri:precio,
    }
    cuartos.push(objRoom);
    listarcuartos();
}
    }
    function listarcuartos(){
        let total=0;
        let contenedor = " ";
        for (let i = 0; i < cuartos.length; i++) {
            const element = cuartos[i];
            total += (element.per*element.pri);
            contenedor+="<tr><td>"+(i+1)+"</td><td>"+element.tip+"</td><td>"+element.pri+"</td><td>"+element.per+'</td><td><img src="imagenes/icons8-cancel-48.png" width="30px" onclick="delete_room(' + i +')"></td></tr>';
            
        }
        document.getElementsByTagName("tbody")[1].innerHTML = contenedor;
        document.getElementById("personas").value=0;
    }
    function reset(){
            document.getElementsByTagName('tbody')[0].innerHTML = "";
            document.getElementsByTagName('tbody')[1].innerHTML = "";
            clientes.splice(0, clientes.length);
            cuartos.splice(0, cuartos.length);
            document.getElementById('ubicacion').disabled = false;
            document.getElementById('nombre').disabled = false;
            document.getElementById('dni').disabled = false;
            document.getElementById('numero').disabled = false;
            document.getElementById('fecha').disabled = false;
            document.getElementById('ubicacion').value = "";
            document.getElementById('nombre').value = "";
            document.getElementById('dni').value = "";
            document.getElementById('numero').value = "";
        
    }
    function delete_room(i){
        console.log(i);
        if (confirm("Confirmar elimiacion")) {
            cuartos.splice(i,1);
            listarcuartos();
            
        }
    }


