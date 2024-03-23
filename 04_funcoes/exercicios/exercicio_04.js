//retornando números aleatórios até p limite passado no parametro

function retornoNumAleatorio(num) {
    //para arredonda um número pra baixo e com + 1 o número fica inteiro
    return Math.floor(Math.random() * num) + 1;
}

console.log(retornoNumAleatorio(10));
console.log(retornoNumAleatorio(100));
console.log(retornoNumAleatorio(50));