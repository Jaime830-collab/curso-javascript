let nome = "Ludmilo";
let idade = 35;

if(nome != undefined && nome == "Calabreso") {
    console.log("Nome está definido");
    //nome.length > 5 analisa se o nome tem mais de 5 letras
} else if(nome == "Ludmilo" && nome.length > 5 && idade == 42) {
    console.log("O nome é o Ludmilo");
} else {
    console.log("Não é Ludmilo!");
}

if(1 > 2) {
    console.log("Teste");
} else if(1 == 1) {
    console.log("Testando");
}

/*
O nome é Ludmilo
Testando
*/