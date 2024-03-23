const validaMarca = /Marca: (Nike|Adidas|Puma|Vans)/;

console.log(validaMarca.test("Marca: Nike"));
// true
console.log(validaMarca.test("Marca: Kichute"));
// false
console.log(validaMarca.test("Marca: "));
// false
console.log(validaMarca.test("Nike"));
// false
console.log(validaMarca.test("B2"));
// false
console.log(validaMarca.test("Marca: Puma")); 
// true