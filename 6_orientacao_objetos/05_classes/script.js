//prototype é como se fosse a classe pai 
const carro = {
    portas: 4,
    marca: 'Fiat',
    estado: function() {
        console.log('Seminovo');
    }

}

const novoCarro = Object.create(carro);

novoCarro.estado();

novoCarro.marca = 'Honda';

console.log(novoCarro.marca);
console.log(carro.marca);

const outroCarro = Object.create(carro);

outroCarro.estado();

outroCarro.marca = 'Ford';

console.log(outroCarro.marca);







