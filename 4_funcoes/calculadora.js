//calculadora

let n1 = Number(prompt('primeiro número'))
let n2 = Number(prompt('segundo número'))

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

let operacao = String(prompt(`Qual operação deseja fazer:
        soma [ + ] :
        subtracação [ - ] :
        multiplicação [ * ] :
        divisão [ / ]:
    `));
/*
let operacao = Number(prompt(`Qual operação deseja fazer:
        1 pra somar:
        2 pra subtrair:
        3 pra multiplicar:
        4 pra dividir:
    `));
*/
let resultado;
//let soma = '+';
//let subtracao = '-';
//let divisao = '/';
//let multiplicacao = 'x';

/*
switch (operacao) {

    case 1:
        resultado = somar(n1,n2)
        alert(resultado)
        break;
    
    case 2:
        resultado = subtrair(n1, n2)
        alert(resultado)
        break;

    case 3:
        resultado = multiplicar(n1, n2)
        alert(resultado)
        break;

    case 4:
        resultado = dividir(n1, n2)
        alert(resultado)
        break;
    
    default:
        alert('operação invalida! ');
        break;
}*/
    
switch (operacao) {

    case '+':
        resultado = somar(n1,n2)
        alert(resultado)
        break;
    
    case '-':
        resultado = subtrair(n1, n2)
        alert(resultado)
        break;

    case '*':
        resultado = multiplicar(n1, n2)
        alert(resultado)
        break;

    case '/':
        resultado = dividir(n1, n2)
        alert(resultado)
        break;
    
    default:
        alert('operação invalida! ');
        break;
}
