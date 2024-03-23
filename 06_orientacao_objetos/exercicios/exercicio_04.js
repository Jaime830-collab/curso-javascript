class Carro {

    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litosConsumo  = km / this.consumo;
        
        this.gasolina = this.gasolina - litosConsumo;
    }

    abastecer(tanque) {
        
        this.gasolina += tanque;
    }
}

let carro = new Carro('Ford', 'Branco', 100, 10);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(20);

console.log(carro);

