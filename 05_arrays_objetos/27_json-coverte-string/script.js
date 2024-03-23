//estrutura de json
//chave sem com aspas duplas " "

let pessoa = {
    "nome": "Ludmilo",
    "idade": 24,
    "profissao": "carteiro",
    "skills": ["rapido", "agil", "comuniocativo"]
};
//transforma em string as propriedades
let pessoaTexto= JSON.stringify(pessoa);
//assim não da pra acessar as propriedades
console.log(pessoaTexto);

//tranformando em Json novamente
let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);
console.log(pessoaJson.skills[0]);




