let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("calabreso_123")); 
// true

console.log(validarNomeUsuario.test("id")); 
// false
console.log(validarNomeUsuario.test("11111111111111111111111111111"));
// false