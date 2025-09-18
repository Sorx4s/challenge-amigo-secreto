// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres de los amigos ingresados
let amigos = [];
let amigosMinimo = 2;

// Borra el texto ingresado en el input(caja de texto)
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
//Botón de agregar nombre de amigos
function agregarAmigo() {
    //DOM del botón "añadir" en html
    let nombreAmigo = document.getElementById('amigo').value.trim();
    // Condicional (si el nombre no es igual a un campo vacio o número entonces se agrega amigo, encaso contrario pedir nombre valido)
    if (nombreAmigo === "") {
        console.log("Se ingreso un campo vacio");
        // Alerta en caso de dejar la caja de texto vacia
        alert("Por favor, ingresa un nombre");
        return;
    } 

    // Condicional que comprueba que el nombre no sea número
    if(/\d/.test(nombreAmigo)){
       console.log("Se ingreso un número");
       alert("Por favor, ingresa un nombre sin números");
       return; 
    } 
    //Condicional que comprueba que el nombre ingresado no este repetido
    if(amigos.includes(nombreAmigo)){
       console.log("Se ingreso un número");
       alert("Ese nombre ya este en uso. Por favor, ingresa otro");
       return; 
    } 

    //Valia que el nombre del amigo sea mayor a dos caracteres
    if(nombreAmigo.length < 2){
        alert('El nombre del amigo debe tener al menos 2 caracteres.');
        return;
    }

     //Se agrega un amigo (actualiza el array de amigos)
    amigos.push(nombreAmigo);
    //Muestra en consola que se agrego el nombre del amigo
    console.log(`Se agrego: ${nombreAmigo}`);
    //Limpia el nombre ingresado en la caja de texto
    limpiarCaja();
    //Llama a la función para agregar el elemento lista con el nombre introducido
    actualizarLista();
}
//Permite que se ingrese el amigo con la tecla enter
  document.getElementById('amigo').addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            console.log('Presiono la tecla enter');
            agregarAmigo();          
        }
    });

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

//Función para sortear
function sortearAmigo(){
    // Comprueba que existan minimo 2 amigos en el array
    if (amigos.length < amigosMinimo) {
        console.log("Faltan amigos");
        //Muestra un mensaje en pantalla 
        document.getElementById("p-mensaje").innerHTML = "Agrega al menos 2 amigos para realizar el sorteo ";
        //Marca el mensaje de color rojo
    } else {
        //Selecciona un indice aleatorio
        let sorteoGenerado = Math.floor(Math.random()*amigos.length);
        //Se accede al nombre del amigo
        let amigoSecreto = amigos[sorteoGenerado];
        console.log(sorteoGenerado);
        
        //Mostrar el resultado
        let resultado = document.getElementById('p-mensaje').innerHTML = `🎉 Tu amigo secreto es ${amigoSecreto} 🎉`;
        //Cambia el color del parrafo para dar el resultado
        document.getElementById('p-mensaje').style.color='#369a00ff'
        //Hace que el texto este en negrita
        document.getElementById('p-mensaje').style.fontWeight='bold'
        //Elimina la lista de nombres ingresados en pantalla
        document.getElementById('listaAmigos').innerHTML="";
        //let resultado = document.getElementById('resultado');
        return resultado
    }
}

//Función para volver a jugar de nuevo
function reiniciarJuego(){
    //Elimina los elementos del array amigos
    let elementosRemovidos = amigos.splice(0, amigos.length);
    console.log(`Lista de amigos removidos: ${elementosRemovidos}`);
    //Limpia la lista de participantes
    document.getElementById('listaAmigos').innerHTML="";
    //Elimina el mensaje de texto en pantalla
    document.getElementById('p-mensaje').innerHTML="";
    //Elimina el color del texto
    document.getElementById('p-mensaje').style.color="";
    //Elimina el texto en negrita
    document.getElementById('p-mensaje').style.fontWeight="";
    limpiarCaja();
    alert("Juego reiniciado");
}
