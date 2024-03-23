//verificações no programa, que são utilizados para
//assegurar que tudo ocorra da forma esperada


let arr1  = [1,2,3,4,5];
let arr2 = [];

function iterarArray(arr1) {
    if(arr1.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento");
    } else {
        for(let i = 0; i < arr1.length; i++) {
            console.log(i);
        }
    }
}

function arrayVazio(arr1) {
    if(arr1.length > 0) {
        throw Error("O array não pode ter elementos");
    } else {
        console.log("Agora deu certo");
    }
}

iterarArray(arr1);
//0, 1, 2, 3, 4 
iterarArray(arr2);
//Error: O array precisa ter pelo menos um elemento


