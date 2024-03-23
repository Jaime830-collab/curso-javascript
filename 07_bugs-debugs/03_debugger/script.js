//debugger é usado quando o código está muito grande
//é usado pra testar partes do código, e também precisa tirar quando mandar  pra produção


let x = 1;
let y = 2;
let z = 3;

if(z > x) {
    x = y;
    debugger;
}

for(let i = 5; i > 0; i--) {
    y++;
    x = x + z + 1;
    z += 2;
    debugger;
}
// 6, 12, 20, 30, 42

if(y == x) {
    x++;
} else {
    x = x + y + z;
}

debugger;

x = x * y;

debugger;