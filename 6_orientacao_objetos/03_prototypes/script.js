//prototype é como se fosse a classe pai 
const carro = {
    portas: 4
}

//O Object.getPrototypeOf procura qual é o prototype dele ou o pai
console.log(Object.getPrototypeOf(carro)); 
console.log(Object.getPrototypeOf(carro) === Object.prototype);

console.log(carro.hasOwnProperty('portas'));