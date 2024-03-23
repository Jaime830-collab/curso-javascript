//instanciando por função

function Gato(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.falar = function(){
        console.log("Miauuu")
    }
    
}

let  criaGato = new Gato('Persa', 4, 'branco');


criaGato.falar();





