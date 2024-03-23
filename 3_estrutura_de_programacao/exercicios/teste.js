let a = 3; 
let b = new Number(3);
let c =3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

const obj1 = {Name: "Hello", Age: 16};
const obj2 = {Name: "Hello", Age: 16};
console.log(obj1 === obj2);

const numbrs =[1,2,3];
numbrs[10] = 11;
console.log(numbrs);

const set = new Set();
set.add(5);
set.add('Hello');
set.add({ name: 'Jayme'});

for (let item of set) {
    console.log(item + 6)
}

function test(...args) {
    console.log(typeof args)
}
test(12 );

let x = Math.max();
let y = Math.min();
console.log(x)
console.log(y)