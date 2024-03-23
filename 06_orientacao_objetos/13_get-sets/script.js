//Get: serva para resgatar o valor de uma propriedade
//Set: serva para alterar o valor de uma propriedade


//classe
class SmartTv {

    // Construtor
    constructor(marca, polegas, resolucao) {
        this.marca = marca;
        this.polegas = polegas;
        this.resolucao = resolucao;
    }
    //método
    ligado() {
        console.log('Está ligada? ' + true);
    }
    //método get
    get getMarca() {
        return this.marca;
    }
    //método set
    set setMarca(marca) {
        this.marca = marca;
    }
};

let minhaTv = new SmartTv('LG', 32, 'Full HD');

console.log(minhaTv);

//set é pra entrada de dado
minhaTv.setMarca = 'Samsung'
//get pra pegar o valor setado e mostrar
console.log(minhaTv.getMarca);


