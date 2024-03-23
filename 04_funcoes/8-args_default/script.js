//se o usuario não passar o valor automaticamente expo atribui a 2

function potencia(base, expo=2) {
    return Math.pow(expo, base)
    
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2,3));