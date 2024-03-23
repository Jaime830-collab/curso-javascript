let par = 0;
let impar = 0;
let num = 50;

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        par = i;
        console.log(`o número ${par} é par`);
    }else {
        impar = i;
        console.log(`o número ${impar} é impar`);
    }
}