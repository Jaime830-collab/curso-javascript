for(let i = 10; i > 0; i = i - 1) {
    //vai pular os números pares
    if(i % 2 == 0) {
        console.log("Caiu no continue");
        continue;
    }

    console.log(i);

}
/* SAIDA NO CONSOLE
    Caiu no continue
    9
    Caiu no continue
    7
    Caiu no continue
    5
    Caiu no continue
    3
    Caiu no continue
    1
*/