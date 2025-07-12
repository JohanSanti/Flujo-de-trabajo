// Selecciona el botón por su ID
const boton = document.getElementById('miBoton');

// Añade un evento de clic al botón
boton.addEventListener('click', () => {
    // Cambiar los etilos dinamicamente
    boton.style.backgroundColor = "blue";
    boton.style.color = "white";
    boton.style.fontSize = "20px";

    boton.innerHTML = "NO cambiar el color otra vez"

});