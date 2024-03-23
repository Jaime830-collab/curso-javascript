//as exception abortam o programa pra mostrar os erros

function saudacao(nome) {
    //se o tipo do valor informado pelo usuário não for String, mostra a frase de Error
    if(typeof nome != 'string') {
        throw new Error("O parâmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Mussarelo");
saudacao(5);
// 217-Exception.js:3
//         throw new Error("o parâmetro nome precisa ser string");
// Error: o parâmetro nome precisa ser string

console.log("testando");