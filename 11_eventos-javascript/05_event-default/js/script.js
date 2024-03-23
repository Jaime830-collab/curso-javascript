//neste exemplo sem o stopPropagation ao clicar fora no botão 
//o que neste caso é a tag p poi ele esta dentro da tag, o mesmo é acionado 

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
    console.log('Clicou no botão!');
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function (event) {
    console.log(event);
});

p.addEventListener("click", function () {
    console.log('Clicou no paragrafo!');
});



