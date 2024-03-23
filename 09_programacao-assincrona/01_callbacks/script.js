let valor = Promise.resolve(5);

console.log("Outros códigos");

console.log(valor);

valor.then(value => value + 5)
    .then(value => {
    console.log(value)
});