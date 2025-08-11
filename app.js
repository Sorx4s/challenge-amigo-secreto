// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres de los amigos ingresados
let amigos = [];

// Borra el texto ingresado en el input(caja de texto)
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
//Botón para agregar nombres
function agregarAmigo() {
    //DOM del botón "añadir" en html
    let validacion = document.getElementById('amigo').value;
    // Condicional (si validación no es igual a un campo vacio, agregar amigo, encaso contrario pedir que se agrege un nombre)
    if (validacion !== "" && isNaN(validacion)) {
        //Se agrega un amigo (actualiza el array de amigos)
        amigos.push(); //PENDIENTE ***_**❓
        console.log(`Se agrego un nombre`);
        //Limpia el nombre ingresado en la caja de texto
        limpiarCaja();
    //En caso contrario, lanza una alerta que pida un nombre
    } else {
        console.log("");
        // Alerta en caso de dejar la caja de texto vacia
        alert("Por favor, inserte un nombre");
    }
}

