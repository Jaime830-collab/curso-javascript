class Endereco {

    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    };

    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    
    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }

}

let endereco = new Endereco('José de Assis', 'Venda Nova', 'Itapipoca','ES');

console.log(endereco);

endereco.novaRua = "Rua dos Pardais";
endereco.novoBairro = 'Vila Do Chaves';
endereco.cidade = 'Tangamandapio';
endereco.estado = 'MG';

console.log(endereco);

