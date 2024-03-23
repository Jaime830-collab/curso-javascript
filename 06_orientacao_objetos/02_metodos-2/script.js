//como criar um método
const papagaio = {
    nome:'Loro José',

    falar: function () { 
        console.log('Eu vou tomar um tacacá!')
    },

    chorar: function () {
        console.log('Pi pi pi pi pi!')
    },

    setNome: function (nome) {
        this.nome = nome;
    },

    getNome: function () {
        return `O nome é ${this.nome}`;
    }
}

console.log(papagaio.nome); 

papagaio.falar();
papagaio.chorar();
papagaio.setNome('Loro João'); 

console.log(papagaio.nome); 
console.log(papagaio.getNome());