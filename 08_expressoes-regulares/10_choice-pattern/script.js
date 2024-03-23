// a expressão Choice Pattern funciona como o operador ou (||) 
//usa- se uma barra ( | )

const reg = /\w+: (Calabreso|Ludmilo|Iphono)/; 

console.log(reg.test("Nome: Calabreso")); 
// true
console.log(reg.test("Nome: Mussarelo")); 
// false
console.log(reg.test("Nome: Ludmilo"));
// true
