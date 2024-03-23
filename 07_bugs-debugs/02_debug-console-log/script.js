//debug com console.log, é sempre importante retirar o console.log quando 
//for mandar o sistema pr aprodução

let x = 1;
let y = 2;
let z = 3;

if(z > x) {
    x = y;
    console.log(x);// 2
}

for(let i = 5; i > 0; i--) {
    y++;
    x = x + z + 1;
    z += 2;
    console.log(x);
}
// 6, 12, 20, 30, 42

if(y == x) {
    x++;
} else {
    x = x + y + z;
}

console.log(x);// 62

x = x * y;

console.log(x); // 434