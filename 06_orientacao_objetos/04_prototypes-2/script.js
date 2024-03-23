//prototype é como se fosse a classe pai 
const carro = {
    portas: 4
}

//O Object.getPrototypeOf procura qual é o prototype dele ou o pai
//O ira fazer com que carroNovo herde as proproedades da classe carro
const carroNovo = Object.create(carro);

console.log(carroNovo.portas);

//pergunta se carroNovo tem a propriedade portas
console.log(carroNovo.hasOwnProperty('portas'));

//para saber se carro é o prototype de carroNovo ou o Pai ao qual ele herdou as propriedades
console.log(Object.getPrototypeOf(carroNovo) === carro);



