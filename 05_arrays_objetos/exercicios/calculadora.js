
class Calculadora {

    somar(n1,n2) {
        return n1 + n2;
    }

    subtrair(n1, n2) {
        return n1 - n2;
    }

    dividir(n1, n2) {
        return n1 / n2;
    }
    multiplicar(n1, n2) {
        return n1 * n2;
    }
}

let calculadora1 = new Calculadora()
console.log(calculadora1.somar(5,2))

let calculadora2 = new Calculadora()
console.log(calculadora2.subtrair(5,2))

let calculadora3 = new Calculadora()
console.log(calculadora3.multiplicar(5,2))

let calculadora4 = new Calculadora()
console.log(calculadora4.dividir(5,5))