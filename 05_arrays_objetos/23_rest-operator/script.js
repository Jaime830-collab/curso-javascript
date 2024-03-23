let num1 = 2;
let num2 = 9;
let num3 = 4;
let num4 = 6;

//rest operator ums (...args)
function imprimirNumeroes(...args) {
    for (let i = 0; i < args.length; i++) { 
        console.log(args[i]);//
    }
}

imprimirNumeroes(num1, num2, num3);
console.log("pause");
imprimirNumeroes(num3, num4);
console.log("pause");
imprimirNumeroes(4, 5, 5, 8, 5, 6,44, 4,7,7, 8, 7);




