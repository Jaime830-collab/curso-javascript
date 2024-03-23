let novoElemento = document.createElement('p');
let texto = document.createTextNode('Texto criado no javascript');

novoElemento.appendChild(texto);

let paragrafo = document.querySelector('#paragrafo-principal');
let pai = paragrafo.parentNode;

pai.appendChild(novoElemento);