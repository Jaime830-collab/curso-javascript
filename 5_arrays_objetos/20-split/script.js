//função usando o split 
//usado nos sites quando o usuario de escreve 
//e a tela de bem vindo só aparece o primeiro nome

let frase = "Smells Like Teen Spirit";
console.log(frase.split(" "));

let palavras = frase.split(" ");
console.log(palavras);

let frutas = "Banana;Maçã;Jaca;Pera;Bola;Tapete";
console.log(frutas.split(";"));

function getFirstname(name, splitChar) {
    //irá separar os nome em vetores e pegara o vetor da posição 0
    let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstname("Silos Malafaio de Jesus", " ");
console.log("Seja bem vindo " + userName);