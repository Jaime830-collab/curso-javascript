// metodo exec (d+) usado pra procurar digitos numeros em uma string
 
const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));
//saida
// [ '100', index: 13, input: 'Tem o número 100 aqui', groups: undefined ]

console.log(digitos.exec("Tem o número aqui"));
//saida
// null

