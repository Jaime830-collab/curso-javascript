//mutation cria um objeto referenciando o antigo

let pessoa = {
    nome: "Mussarelo"
};

//cria um objeto identico com referencia ao antigo
let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Calabreso"
};

console.log(pessoa == pessoa2) 
console.log(pessoa3 == pessoa) 
console.log(pessoa3 == pessoa2)

pessoa2.nome = "Ludmilo";
console.log(pessoa.nome); 
pessoa.nome = "Tangerina";
console.log(pessoa2.nome); 

 