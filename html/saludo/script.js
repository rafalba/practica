console.log("Me parece una falta de respeto");


setInterval(cambiarSaludo, 2000);

// Cambia la frase en el titulo h2
function cambiarSaludo() {
    let frase = document.getElementsByTagName("h2")[1];
    if (frase.innerText == "¡Ganando como siempre!") {
        frase.innerText = "¡Impongo moda para las niñas!";
    } else {
        .innerText = "¡Ganando como siempre!";
    }
    //console.log("frase :" + frase);
}
