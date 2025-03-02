let amigos = [];
let amigosInput = document.getElementById('amigo');
let impresionResultado = document.getElementById('resultado');
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
    if (amigo.length < 3){
        alert('El nombre debe tener al menos 3 caracteres');
        return false;
    }
    if (amigo.length > 20){
        alert('El nombre no puede tener más de 20 caracteres');
        return false;
    }
    if (!isNaN(amigo)){
        alert('El nombre no puede ser un número');
        return false;
    }
    return true;
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    return;
}

function agregarAmigo(){
    if(validarAmigo()){
        amigos.push(amigosInput.value);
        amigosInput.value = '';
        amigosInput.focus();
        mostrarAmigos();
    }
    return;
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Debes agregar al menos 2 amigos');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    impresionResultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    botonSorteo.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear otro amigo';
    return;
}

function reiniciarLista(){
    amigos = [];
    mostrarAmigos();
    impresionResultado.innerHTML = '';
    botonSorteo.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
    return;
}