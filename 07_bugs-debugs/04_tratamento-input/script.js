//usar o isNaN pra checar se o valor da variavel é um número

function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor, passe só números para o programa!");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('Ludmilo');

let number = prompt("Digite um número");

checarNumero(number);