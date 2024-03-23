let numeros = [5, 6, 3, 4, 9, 1, 2, 7, 0, 8];

//busca o valor a partit do indice 2 e para no indice 5
console.log(numeros.slice(2,5));
//[ 3, 4, 9 ]

//busca o valor a partir do indice 4 e para no indice 6
console.log(numeros.slice(4,6));
//[ 9, 1 ]

//pega todos os elementos a partir do indice 2
console.log(numeros.slice(2));
//[3, 4, 9, 1,2, 7, 0, 8]

//busca o valor contando de do fim pro começo e pega o valor a partir deste indice
console.log(numeros.slice(-2));
//[ 0, 8 ]


