//validando dominios

const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
// true
console.log(validaDominio.test("www.programador.com.br"));
// true
console.log(validaDominio.test("www.programador"));
// false
console.log(validaDominio.test("programador.com.br"));
// true