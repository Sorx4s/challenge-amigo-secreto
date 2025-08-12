// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres de los amigos ingresados
let amigos = [];

// Borra el texto ingresado en el input(caja de texto)
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
//Botón de agregar nombres
function agregarAmigo() {
    //DOM del botón "añadir" en html
    let nombreAmigo = document.getElementById('amigo').value;
    // Condicional (si el nombre no es igual a un campo vacio o número entonces se agrega amigo, encaso contrario pedir nombre valido)
    if (nombreAmigo !== "" && isNaN(nombreAmigo)) {
        //Se agrega un amigo (actualiza el array de amigos)
        amigos.push(nombreAmigo); //PENDIENTE ***_**❓ lista,
        //Muestra en consola que se agrego el nombre del amigo
        console.log(`Se agrego: ${nombreAmigo}`);
        //Limpia el nombre ingresado en la caja de texto
        limpiarCaja();
        //Llama a la función para agregar el elemento lista con el nombre introducido
        actualizarLista();
    //En caso contrario, lanza una alerta que pida un nombre
    } else {
        console.log("");
        // Alerta en caso de dejar la caja de texto vacia
        alert("Por favor, inserte un nombre");
    }
}

// Funcion para actualizar la lista de amigos
function actualizarLista(){
    //Obtiene el elemento ul donde se mostraran los amigos
    let lista = document.getElementById('listaAmigos');
    //Limpia la lista previa
    lista.innerHTML = "";

    //Bucle que recorre todo el array "amigos"
    for (let i = 0; i < amigos.length; i++) {
        //Crea un elemento HTML  <li> en (elementoLista)
        let elementoLista = document.createElement('li');
        //Asigna el texto del amigo reciente (amigos[i]) como contenido de  <li>
        elementoLista.textContent = amigos[i];
        // Agrega el li creado como hijo del elemento lista
        lista.appendChild(elementoLista);
    } 
}