//neste exemplo as variaveis dentro da função  e a variavel dentro do if ficam fica isoladas do escopo 

let a = 10;

function multiplicar (x, y) {
    let a = x *y;

    if (a > 10) {
        let a = 0;
        a++;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

multiplicar (3, 7)