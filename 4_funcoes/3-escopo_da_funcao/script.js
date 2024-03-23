//O que acontece dentro de uma função fica separado do escopo da global que é todo o arquivo javascript
//no exemplo a variavel num criada com Let faz parte do escopo global e ao ser chamada imprime seu valor
// já a mesma variavem criada dentro da função fica separado do escopo, ou sejá só pertence a esse bloco da função
//e então ao ser invocada não irá sobrepor o valor da outra variavem 
let num = 10;

function imprimir() {
    let num = 182;
    console.log(num);
}

imprimir();
console.log(num);