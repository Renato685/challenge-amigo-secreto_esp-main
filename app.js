// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function reiniciarJuego() {
  listaAmigos = [];  // vaciar array
  actualizarLista(); // limpiar pantalla automáticamente
  panelResultado.innerHTML = "";   
   nombreIngresado.value = ""; 
  alert("Juego reiniciado , empieza de nuevo.");
}

const nombreIngresado = document.getElementById("amigo");
const panelAmigos = document.getElementById("listaAmigos");
const panelResultado = document.getElementById("resultado");


function agregarAmigo() {
    // 1. Verificar que el campo no esté vacío
    if (nombreIngresado.value.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 2. Agregar el nombre al array
    listaAmigos.push(nombreIngresado.value);

    // 3. Mostrar el nombre en la lista de la interfaz
    panelAmigos.innerHTML += `<li>${nombreIngresado.value}</li>`;

    // 4. Limpiar el campo de entrada
    nombreIngresado.value = "";
}


function sortearAmigo() {
    // Validar que haya al menos un amigo
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Agrega nombres antes de sortear.");
        return;
    }

     if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Generar índice aleatorio válido
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener amigo secreto
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar resultado en pantalla
    panelResultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

function actualizarLista() {
  panelAmigos.innerHTML = ""; // limpiar pantalla
  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    panelAmigos.appendChild(li);
  });
}

