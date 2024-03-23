//nesse exemplo a variavel num criada no escopo global também sera imprimida normalmente 
// a variavel num criada dentro do bloco if também fica isolada do resto do código
//e por conseguinte não ira sobreescrevrer a outra variavel
let num = 10;

if (num > 5) {
    let num = 20;
    num ++;
    console.log(num);
}


console.log(num);