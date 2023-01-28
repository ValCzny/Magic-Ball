// Variables
let botoncito = document.getElementById("button");
let span_de_respuesta = document.getElementById("span-answer");
let random_number;

botoncito.addEventListener("click", aleatorio)

function aleatorio() {
    random_number = Math.floor(Math.random()*(30-1)+1);
    console.log(random_number);
    respuesta();
}

function respuesta() {
    if (random_number == 1) {
        span_de_respuesta.firstChild.nodeValue = "Es decididamente así"
    } else if (random_number == 2){
        span_de_respuesta.firstChild.nodeValue = "Sin lugar a dudas"
    } else if (random_number == 3){
        span_de_respuesta.firstChild.nodeValue = "Si, definitivamente"
    } else if (random_number == 4){
        span_de_respuesta.firstChild.nodeValue = "Como yo lo veo, si"
    } else if (random_number == 5){
        span_de_respuesta.firstChild.nodeValue = "Si"
    } else if (random_number == 6){
        span_de_respuesta.firstChild.nodeValue = "Las señales apuntan que si"
    } else if (random_number == 7){
        span_de_respuesta.firstChild.nodeValue = "Clara-Mente"
    } else if (random_number == 8){
        span_de_respuesta.firstChild.nodeValue = "Mejor no decirte ahora"
    } else if (random_number == 9){
        span_de_respuesta.firstChild.nodeValue = "No podría predecirte eso ahora"
    } else if (random_number == 10){
        span_de_respuesta.firstChild.nodeValue = "Concentrate y vuelve a preguntar"
    } else if (random_number == 11){
        span_de_respuesta.firstChild.nodeValue = "Vuelve a preguntar más tarde"
    } else if (random_number == 12){
        span_de_respuesta.firstChild.nodeValue = "Mi respuesta es no"
    } else if (random_number == 13){
        span_de_respuesta.firstChild.nodeValue = "Mis fuentes dicen que no"
    } else if (random_number == 14){
        span_de_respuesta.firstChild.nodeValue = "Las perspectivas no son buenas"
    } else if (random_number == 15){
        span_de_respuesta.firstChild.nodeValue = "Por supuesto que no, mi ciela"
    } else if (random_number == 16){
        span_de_respuesta.firstChild.nodeValue = "Los astros me dicen que si"
    } else if (random_number == 17){
        span_de_respuesta.firstChild.nodeValue = "Mejor ni te digo"
    } else if (random_number == 18){
        span_de_respuesta.firstChild.nodeValue = "Diosito no quiere que sepas"
    } else if (random_number == 19){
        span_de_respuesta.firstChild.nodeValue = "Messi"
    } else if (random_number == 20){
        span_de_respuesta.firstChild.nodeValue = "Amiga, date cuenta"
    } else if (random_number == 21){
        span_de_respuesta.firstChild.nodeValue = "Mejor tomate un té"
    } else if (random_number == 22){
        span_de_respuesta.firstChild.nodeValue = "Mejor consultalo con los astros"
    } else if (random_number == 23){
        span_de_respuesta.firstChild.nodeValue = "D10sito dice que no"
    } else if (random_number == 24){
        span_de_respuesta.firstChild.nodeValue = "D10sito dice que si"
    } else if (random_number == 25){
        span_de_respuesta.firstChild.nodeValue = "Consultemoslo con la almohada"
    } else if (random_number == 26){
        span_de_respuesta.firstChild.nodeValue = "¿Cómo me vas a preguntar eso?"
    } else if (random_number == 27){
        span_de_respuesta.firstChild.nodeValue = "Los astros están de tu lado"
    } else if (random_number == 28){
        span_de_respuesta.firstChild.nodeValue = "Los astros no están de tu lado"
    } else if (random_number == 29){
        span_de_respuesta.firstChild.nodeValue = "Por supuesto que si, mi ciela"
    }
    else {
        span_de_respuesta.firstChild.nodeValue = "Vuelve a preguntar"
    }
}