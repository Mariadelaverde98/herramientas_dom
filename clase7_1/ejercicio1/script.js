/* 1. Número de enlaces de la página
2. Dirección a la que enlaza el penúltimo enlace
3. Numero de enlaces que enlazan a http://prueba
4. Número de enlaces del tercer párrafo*/

var numEnlaces = document.getElementsByTagName("a").length;
alert(numEnlaces);

var direccion = document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2].href;
console.log(direccion);

var enlaces = document.getElementsByTagName("a");
var numEnlaces2 = 0;
for(let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba/") {
        numEnlaces2++;
    }
}
alert(numEnlaces2);

var tercerParrafo = document.getElementsByTagName("p")[2];
var numEnlaces3p = tercerParrafo.getElementsByTagName("a").length;
console.log(numEnlaces3p);