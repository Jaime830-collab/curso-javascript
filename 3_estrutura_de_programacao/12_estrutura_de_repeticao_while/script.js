let i = 10;

while(i > 0) {
    console.log("O i é " + i);
    i = i - 1;
}//saida decrescente de 10 ao 1 pois i é maior que 0, quando a instrução for verdadeira

let j = 0;

while(j <= 10) {
    console.log(j);
    j = j + 1;
}//saida crescente de 0 ao 10, quando a instrução for verdadeira

let k = 10;

while(k > 0) {
    console.log(k);
    k--;//sem essa encrementação da loop infinito
}