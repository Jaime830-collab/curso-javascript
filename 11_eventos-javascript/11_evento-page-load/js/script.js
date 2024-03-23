//sempre a janela for carregada este evento é carregado 
//eforeunload é usado quando o usuário está com alguma informação salva na tela
//e ainda não salvou no banco de dados do sistema, não é pra importunalo apenas avisa-lo

/*
window.addEventListener('load', function() {
    alert("Aceita cookies!");
});
*/
window.addEventListener('beforeunload', function() {
    event.returnValue = null;
})
