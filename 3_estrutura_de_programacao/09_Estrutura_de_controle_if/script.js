let idade = 19;

if(idade == 19) {
    console.log("A idade é = 19"); // A idade é = 19
}

if(idade > 25) {
    console.log("A idade é maior que 25");
}

let nome = "Ludmilo";

if(nome == "Ludimilo" && idade < 35) {
    console.log("Liberado!"); // Liberado!
}

let passaporte = true;

if((nome == "Ludmilo" && idade > 30) || passaporte === true) {
    console.log("Liberado 2!"); // Liberado 2!
}