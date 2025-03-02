let amigos = [];
let amigosInput = document.getElementById('amigo');
let impresionResultado = document.getElementById('resultado');
// Retorna un array con los elementos que tengan la clase button-draw, por eso se accede al primer elemento
let botonSorteo = document.getElementsByClassName('button-draw')[0]; 
impresionResultado.innerHTML = '';
amigosInput.focus();


function validarAmigo(){
    let amigo = amigosInput.value;
    if(amigo == ''){
        alert('Debes ingresar un nombre.');
        return false;
    }
    if(amigos.includes(amigo)){
        alert('Este amigo ya fue agregado');
        return false;
    }
    // Validaciones de longitud
    if (amigo.length < 2){
        alert('El nombre debe tener al menos 2 caracteres');
        return false;
    }
    if (amigo.length > 20){
        alert('El nombre no puede tener más de 20 caracteres');
        return false;
    }
    // Validamos que solo se ingresen letras
    /*Desgloce de la expresión regular /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-]+$/
        ^: Inicio de la cadena
        a-z A-Z: Rango de letras minúsculas y mayúsculas
        áéíóúÁÉÍÓÚ: Vocales tildadas minúsculas y mayúsculas
        ñÑ: Letras ñ y Ñ
        üÜ: Letras ü y Ü
        -': Guion y comilla simple
        +: Uno o más caracteres
        $: Fin de la cadena
    */
    /*
        El método .test() es una función de las expresiones regulares en JavaScript que
        devuelve true si la cadena pasada como argumento (amigo) coincide con el patrón de la
        expresión regular, y false en caso contrario.
    */
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-]+$/.test(amigo)){ // Prueba si el nombre contiene solo caracteres válidos
        alert('El nombre solo puede contener letras');
        return false
    }
    return true;
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        let li = document.createElement('li'); // Crea un elemento li
        li.textContent = amigo; // Agrega el nombre del amigo al elemento li al final de la lista
        listaAmigos.appendChild(li); // Agrega el elemento li a la lista de amigos
    });
    return;
}

function agregarAmigo(){
    if(validarAmigo()){
        amigos.push(amigosInput.value); // Agrega el nombre del amigo al array amigos si es válido
        amigosInput.value = '';
        amigosInput.focus();
        mostrarAmigos();
    }
    return;
}

function sortearAmigo(){
    if(amigos.length < 2){ // Si hay menos de 2 amigos, no se puede realizar el sorteo
        alert('Debes agregar al menos 2 amigos');
        return; // Sale de la función
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona el nombre al azar
    impresionResultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    // Cambia el texto del botón
    botonSorteo.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear otro amigo';
    return;
}

function reiniciarLista(){
    amigos = []; // Limpia la lista de amigos
    mostrarAmigos();// Limpia la lista de amigos en pantalla
    impresionResultado.innerHTML = '';
    // Regresa el texto original del botón
    botonSorteo.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
    return;
}
