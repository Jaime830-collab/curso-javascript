//Se a Arrow Function tiver um parametro pode-se remover os parenteses

let multiplicar= (x) => {
    return x * 2;
};

console.log(multiplicar(2));

//essa forma não é tão correta de se usar
const  multiplicarPorDois = x => x * 2;
    
console.log(multiplicarPorDois(4));
