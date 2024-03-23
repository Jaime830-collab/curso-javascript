// funciona como o metodo exec (d+) usado pra procurar digitos numeros em uma string
//porém é usado direto na variavel com string por exemplo

const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);
//saida
// [ '100', index: 9, input: 'O número 100 está aqui', groups: undefined ]

console.log(frase2);
//saida
// null
 

