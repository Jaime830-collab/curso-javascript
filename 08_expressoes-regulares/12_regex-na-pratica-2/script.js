//validando e-mail

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("iphono@gmail.com"));
// true
console.log(validarEmail.test("iphono@gmail"));
// false
console.log(validarEmail.test("gmail.com"));
// false
console.log(validarEmail.test("iphono@gmail.com.br"));
// true
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));
// true