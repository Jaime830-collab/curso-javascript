/*"use strict" é um recurso do ES5 no JavaScript que transforma nosso 
código no Modo Estrito em funções ou scripts inteiros . O Modo Estrito 
nos ajuda a evitar erros no início de nosso código e adiciona 
restrições a ele. Restrições que o Modo Estrito nos fornece.
Atribuindo ou acessando uma variável que não é declarada.*/ 

"use strict"

let teste = 'testando';

//strict determina que não podemos deletar a propriedade prototype pois ela faz parte do javascript
// delete Object.prototype;

function testes() {
    "use strict"
    //não é possivel usar a varieavel sem declacar com (var, let ou const) então gera erros
    let testando = 'teste';
}

testes();

// false.prop = "";
// "teste".prop = "";
