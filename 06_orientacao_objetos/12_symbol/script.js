//sempre que criamos uma proproedade a um objeto
//é criada ima idêntoca no Prototype (classe pai)

//classes e métodos

//classe
class SmartTv {

    // Construtor
    constructor(marca, polegas) {
        this.marca = marca;
        this.polegas = polegas;
    }
    //método
    ligado() {
        console.log('Está ligada? ' + true);
    }
};

SmartTv.prototype.marca = 'LG';

let resolucao = Symbol();

SmartTv.prototype[resolucao] = '4k';

const minhaTv = new SmartTv('Philco', 32);

console.log(minhaTv);
minhaTv.ligado();

console.log(SmartTv.prototype.marca);
console.log(minhaTv.marca);

//acessando o Symbol
console.log(SmartTv.prototype[resolucao]);
console.log(minhaTv[resolucao]);


