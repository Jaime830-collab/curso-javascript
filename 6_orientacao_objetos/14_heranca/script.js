class Mamifero {

    constructor(patas) {
        this.patas = patas;
    }
}

let gato = new Mamifero(4);
console.log(gato.patas);

//herdando da as propriedades da classe Mamifero
class Cachorro extends Mamifero {

    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log('Au au au');
    }
}

//principal
let meuCao = new Cachorro(4, 'Caramelo');
console.log(meuCao.patas);

meuCao.latir();

//instanceof é usado pra saber de qual classe o objeto foi instanciado
console.log(new Cachorro instanceof Mamifero);
console.log(new gato instanceof Mamifero);
