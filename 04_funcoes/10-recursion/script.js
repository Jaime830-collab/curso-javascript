//função recurssiva, ela chama ela mesma

function recurssao(n) {

    if(n - 1 < 2) {
        console.log("Recursão parou!");
    }else if (n % 2 != 0) {
        console.log(n + ": número impar");
        recurssao(n - 1);
    }else {
        console.log(n + ": número par!");
        recurssao(n - 2);
    }
    
}

recurssao(39);
recurssao(10);
recurssao(55);