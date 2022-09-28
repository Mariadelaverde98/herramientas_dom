/*Completar la función muestra de JavaScript para que
 realice lo siguiente:
    1. Ocultar el enlace Seguir leyendo.
    2. Mostrar el texto incluido dentro del span*/

var enlace1 = document.getElementById("enlace1");
var enlace2 = document.getElementById("enlace2");
var span = document.getElementsByTagName("span")[0];

function muestra() {
    enlace1.setAttribute("class", "oculto");
    span.setAttribute("class", "visible");
 }

function muestraEnlace2() {
    enlace2.setAttribute("class", "visible");
}

/* Crear un nuevo evento en el enlace2 que llamará a la función oculta().
Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo*/
function oculta() {
    enlace2.setAttribute("class", "oculto");
    span.setAttribute("class", "oculto");
    enlace1.setAttribute("class", "visible");
}
