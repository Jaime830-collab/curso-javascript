// o operador question (?) faz com que um digito seja opcional

//neste caso a ? foi antes do i então o i é opcional
const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));// true
console.log(padrao.test("Abacai"));// true

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));// true
console.log(padrao2.test("123a"));// true
console.log(padrao2.test("123 "));// true