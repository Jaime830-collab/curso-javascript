//só da pra adicionar uma propriedade na classe por meio do prototype

//classe
class SmartTv {

    // Construtor
    constructor(marca, polegadas) {
        this.marca = marca;
        this.polegadas = polegadas;
    }
    //método
    ligado() {
        console.log('Está ligada? ' + false);
    }
};
//adidiconando uma propriedade na classe
SmartTv.prototype.resolucao = '4k'

const minhaTv = new SmartTv('Philco', 32);
console.log(minhaTv);
console.log(minhaTv.resolucao);
minhaTv.ligado();




