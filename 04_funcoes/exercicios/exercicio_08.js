//função recebe um string e retorna o limite do texto

function textoLimite(texto) {
    //não conta os expaços
    if (texto.length <= 10) {
        console.log("Texto dentro do limite");
    }else {
        console.log("Texto acima do limite");
    }
    console.log(texto.length);
}

textoLimite("A noite é escura de longa!")
textoLimite("Carpe diem!")
textoLimite("Calabrezo!")