//função a qual irá lembra das sua função principal ou escopo da função
//sempre que for trabalhar com CLOSURE precisa retornar um função
function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(5);
console.log(lsoma2(7));

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1);
meuContador();
meuContador();
meuContador();
meuContador();