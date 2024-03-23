//cria uma variavel ou contante recebendo new RegExp('bola') com um parametro a ser procurado
//é usado pra encontrar uma frase por exemplo uma string um texto por exemplo

const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));// false
console.log(reg1.test("Temos o número 2"));// true
console.log(reg1.test("Temos o número 23"));// true
console.log(reg1.test("Temos o número 60"));// false

//ver se tem número de 0 a 9
const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 65448484884848484"));// true
console.log(reg1.test("Temos o número"));// false