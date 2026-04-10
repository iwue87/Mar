const texto = document.getElementById("texto-marquesina");

let posicion = window.innerWidth;

function moverMarquesina() {
    posicion--;

    if (posicion < -texto.offsetWidth) {
        posicion = window.innerWidth;
    }

    texto.style.left = posicion + "px";
}

setInterval(moverMarquesina, 10);