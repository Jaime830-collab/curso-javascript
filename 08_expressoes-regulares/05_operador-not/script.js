// a expressão /[^ab]/ não aceita letras de a ou b o resto aceito
const notab = /[^ab]/;

//retornou true porque aceitou a letra c se fosse a ou b seria false
console.log(notab.test("c"));// true
//aqui contém espaço então aceita e retorna true
console.log(notab.test("Aqui tem a"));// true

// a expressão /[^a-z]/ não aceita letras de a até z o resto aceito
const nottoaz = /[^a-z]/;

//retornou true porque contém números
console.log(nottoaz.test("123 as"));// true
//retorna false porque contém somente letras
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));// false

// a expressão /[a-z]/  aceita letras de a até z 
const az = /[a-z]/;

console.log(nottoaz.test("asd123asdad"));// true

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));// true
console.log(umOuMaisNumeros.test(""));// false
console.log(umOuMaisNumeros.test("asdasdas"));// false
console.log(umOuMaisNumeros.test("1"));// true
console.log(umOuMaisNumeros.test("1511231231233123121323123121238"));// true