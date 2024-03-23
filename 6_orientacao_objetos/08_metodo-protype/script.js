//criando método pelo prototype

function Gato(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Gato.prototype.falar =  function(){
    console.log("Miauuu")
}

let  criaGato = new Gato('Persa', 4, 'branco');


criaGato.falar();





