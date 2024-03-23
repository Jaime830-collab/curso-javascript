
//replace child irá trocar os elementos
let novoElemento = document.createElement('p');
let texto = document.createTextNode('Texto criado no javascript');

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

pai.appendChild(novoElemento, heading);