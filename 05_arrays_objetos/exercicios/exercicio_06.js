let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = ['a', 'b', 'c', 'd']

function verifica (lista) {
    if (lista.length >= 5) {
        console.log('Muitos elementos');
    }else {
        console.log('Poucos elementos');
    }
}

verifica(arr1);
verifica(arr2);