let x = 10;
x = 'Que texto bonito';

console.log(x);

if (true) {
    var passouPorAqui = 'SIM';
}

console.log(passouPorAqui);

calcular();

function calcular() {
    console.log('Calculando...');


}
const total = '10' - 15 + 5;

console.log(total);


    /*function Pessoa(nome) {
        this.nome = nome
    }

    Pessoa.prototype.falarSeuNome = function () {
        console.log(`Meu nome é ${this.nome}`)
    }//

    const renan = new Pessoa('renan')
    renan.falarSeuNome()
    */
    const jaime = {
        nome: 'Jaime'
    }

    renan.__proto__ = {
        idade: 30
    }

    console.log(jaime.idade)
