//FUNÇÕES

function multiPlicarTresNum (x, y, z) {
    return x * y * z;
}

console.log(multiPlicarTresNum(2, 5, 9));

const  multiplicar = multiPlicarTresNum(5, 98, 478)
console.log(`O valor multiplicado é ${multiplicar}`);

function podeDirigir ( idade, cnh ) {
    if (idade >= 18 && cnh == true) {
        console.log('Pode dirigir!')
    }else {
        console.log('Não pode dirigir!');
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, false));
//as atribuições Booleanas também podem ser usadas 0 ou 1
console.log(podeDirigir(32, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));