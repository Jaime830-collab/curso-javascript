// A EXPRESSÃO  /\d\d/ PROCURA DOIS DIGITOS POR EXEMPLO O ANO É DOIS DIGITOS O  MÊS E O DIA TAMBÉM 
const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);// false
console.log(dia.test("asd")); // false
console.log(dia.test("05") && "05".length == 2);// true
console.log(dia.test("asd1"));// false


// A EXPRESSÃO /\w\w\w/ PROCURA TRE LETRAS OU MAIS
const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd")); // true
console.log(palavrasPeloMenosTresLetras.test("asdd"));// true
console.log(palavrasPeloMenosTresLetras.test("as"));// false