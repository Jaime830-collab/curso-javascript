async function somar(x, y) {
    return x + y;
}

console.log(somar(5, 10));
//executa primeiro
// Promise { 15 }


somar(10,20).then(value => {
    console.log(value);
})
//30