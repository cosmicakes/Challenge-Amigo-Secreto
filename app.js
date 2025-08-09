// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let nombreAmigo = amigo.value;

    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombreAmigo);
    amigo.value = '';

    mostrarAmigos();
}

// Implementa una función para actualizar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un amigo para poder sortear.');
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '¡El amigo secreto es: <strong>${amigoSorteado}</Strong>!';
}

