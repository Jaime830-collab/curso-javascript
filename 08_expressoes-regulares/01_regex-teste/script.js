//cria uma variavel ou contante recebendo new RegExp('bola') com um parametro a ser procurado
//é usado pra encontrar uma frase por exemplo uma string um texto por exemplo

const reg1 = new RegExp('pão');

console.log(reg1.test("Tem pão?"));// true
console.log(reg1.test("Não tem"));// false


//outra forma de criar uma expressão regular
const reg2 = /pão/;

let text = 'No céu tem pão';

console.log(reg2.test("Tem pão?"));// true
console.log(reg2.test("Não tem"));// false
console.log(reg2.test(text));// true

console.log(/quadrada/.test("Onde está a minha bola quadrada"));// true
console.log(/quadrada/.test("3423442323434quadrada2342323424332"));// true