console.log("Me parece una falta de respeto");


setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
    //console.log("Me parece una falta de respecto");
    // Estoy asignando a una variable de h2
    let frase = document.getElementsByTagName("h2")[1].innerHTML;

    if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre") {
        //frase = "Impongo moda para las niñas!";
        document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
    } else {
        //frase = "Ganando como siempre";
        document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre";
    }
    console.log("frase :" + frase);
}
