//o bloco try catch irá tentar executar o código, caso não consiga
//então pode retornar o erro que o código gerou
//finally é usado caso ocorro normalmente sem erro


try {
    let num2;
    let num1 = 2 + num2;

} catch(error) {
    //mostrando uma frase de erro pro usuário
    //porque a variável num2 não foi definida
    console.log(error + ' cade a variável Ludmilo?');
    //throw new Error(error);
//quando a variável num2 é definida imprime está mensagem
}finally{
    console.log('Executou normalmente Ludmilo!')
};
// ReferenceError: num2 is not defined

//quando a variável num2 é definida imprime está mensagem
//console.log('Está funcionando normalmente!');

