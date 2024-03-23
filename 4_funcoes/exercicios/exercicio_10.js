//imprimindo numeros pares

function imprimiPares(num) {

    let pares;
    let cont = num;
    
    while (cont >= 0) {
        if (cont % 2 == 0) {
            pares = cont;
            console.log(pares);
        }
        cont --;
    }
    
}

imprimiPares(10)