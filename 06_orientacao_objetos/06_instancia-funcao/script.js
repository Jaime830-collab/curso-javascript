//instanciando por função

function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au au au")
    }
    return cachorro;
}

let caramelo = criaCachorro('Caramelo', 4, 'caramelo');

console.log(caramelo);
caramelo.latir();





