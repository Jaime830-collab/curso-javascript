//usado pra utilizar as teclas por exemplo a tecla Enter
//a função KEYDOWN - pode causar um loop infinito pois a tecla esta sendo clicada
// pra resolver usa-se a função KEYUP - pode QUE É QUANDO A TECLA SE LEVANTA 

window.addEventListener("keydown", function(e) {

    if(e.key == 'q') {
        console.log("Apertou a tecla q");
    }else {
        console.log("Apertou Enter");
    }

});

window.addEventListener("keyup", function(e) {

    if(e.key == 'Enter') {
        console.log("Soltou o Enter");
    }

});    

