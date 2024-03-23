class ContaBanco {

    constructor(saldo) {
        this.saldo = saldo;
    }

   
    deposito(valor){
        this.saldo = this.saldo + valor;
        if(this.saldo <= 0) {
            console.log(`saldo de ${this.saldo}, faça um deposito!`);
        }else {
            console.log(`saldo de ${this.saldo}, pode sacar!`)
        }
    }
    sacar(valor){
        this.saldo = this.saldo - valor;
        if(this.saldo <= 0) {
            console.log(`saldo de ${this.saldo}, faça um deposito!`);
        }else {
            console.log(`saldo de ${this.saldo}, pode sacar!`)
        }
    }

   
};

let conta = new ContaBanco(1000);
conta.deposito(1000);

conta.sacar(2000);



