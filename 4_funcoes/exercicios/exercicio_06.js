//função que detecta o tupo do parametro

function detectaTipo(dado) {
    
    if (typeof dado === 'string') {
        console.log(`O valor ${dado} é do tipo String`);
    }else if (typeof dado === 'number'){
        console.log(`O valor ${dado} é do tipo Number`);
    }else if (typeof dado === 'boolean'){
        console.log(`O valor ${dado} é do tipo Boolean`);
    }else{
        console.log(`Valor ${dado}, digite um vslor valido!`);
    }
    
}

detectaTipo(true);
detectaTipo(182);
detectaTipo('Ludmilo');
detectaTipo();
