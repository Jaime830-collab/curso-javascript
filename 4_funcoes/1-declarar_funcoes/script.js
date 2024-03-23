//FUNÇÕES


//função sem parametro
function imprimirNoConsole () {
    console.log('Olá mundo!');
}

imprimirNoConsole();

//função comparametro
function imprimirNumero (num) {
    console.log(`O número é ${num}`);
}

imprimirNumero(5);
imprimirNumero(4);
imprimirNumero(3);
imprimirNumero(2);

//Função anonônima, cria uma variavel(let, var) ou uma conatante(const) 
//que irá receber uma função com ou sem parametro
const  numeroAleatorio = function () {
    console.log(Math.random().toFixed(2));
}

numeroAleatorio();
numeroAleatorio();