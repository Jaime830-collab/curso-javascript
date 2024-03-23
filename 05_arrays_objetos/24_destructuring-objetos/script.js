//com o DESTRUCTURING podemos difir variaveis com propriedades do objeto

let carro ={
    marca: "fiat",
    rodas: 4,
    portas: 5,
    som: true,
};

const {'marca': vMarca, 'rodas': vRodas, 'portas': vPortas, 'som': vSom} = carro;

console.log(vMarca);
console.log(vRodas);
console.log(vPortas);
console.log(vSom);



