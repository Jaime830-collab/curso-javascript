//o bloco try catch irá tentar executar o código, caso não consiga
//então pode retornar o erro que o código gerou


try {
    let num2;
    let num1 = 2 + num2;

} catch(error) {
    //mostrando uma frase de erro pro usuário
    //porque a variável num2 não foi definida
    console.log(error + ' cade a variável Ludmilo?');
    //throw new Error(error);

}
// ReferenceError: num2 is not defined

//quando a variável num2 é definida imprime está mensagem
console.log('Está funcionando normalmente!');

