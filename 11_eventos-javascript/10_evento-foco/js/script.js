//focus seleciona o campo ao qual o usuario está digitando
//blur sai do eevento input 

let input = document.querySelector("#input1");

input.addEventListener("focus", function() {
    console.log("Entrou no input");
});

input.addEventListener("blur", function() {
    console.log("Saiu do input");
});

