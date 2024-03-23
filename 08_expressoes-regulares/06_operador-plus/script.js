// o operador plus /\d+/ irá aceitar que o elemento se repita mais de uma vez 
//nesse caso somente número pois o (d) está minusculo
const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));// true
//não aceita espaço vazio
console.log(umOuMaisNumeros.test(""));// false
console.log(umOuMaisNumeros.test("asdasdas"));// false
console.log(umOuMaisNumeros.test("1"));// true
console.log(umOuMaisNumeros.test("1511231231233123121323123121238"));// true