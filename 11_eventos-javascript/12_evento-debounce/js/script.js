//debounce é um suavisador de eventos, da pra controlar o tempo de cada evento

let timeOut;
window.addEventListener('mousemove', function(e) {

    //irá limpar os evento do setTimeout
    clearTimeout(timeOut);

    timeOut = setTimeout(function(){
        console.log(e.x);
    }, 500)

    
})
