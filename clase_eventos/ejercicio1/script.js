//1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
//2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
//3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
//4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:propiedad innerHTML)

function muestraOculta(num) {
    var parrafo = document.getElementById("contenidos_" + num);
    var enlace = document.getElementById("enlace_" + num);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenido";
    }
    else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenido";
    }
}

window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for(let i=1; i <=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta("+ i +")");
    }
}