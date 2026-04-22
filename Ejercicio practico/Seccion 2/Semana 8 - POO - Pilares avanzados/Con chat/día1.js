class CuentaBancaria {
    #saldo

    constructor (saldo, nombre) {
        this.#saldo = saldo
        this.nombre = nombre
        this.movimientos = []
    }

    depositar(valor) {
        this.#saldo += valor
        return `Saldo actual: ${this.#saldo}`
    }

    retirar(valor) {
        if (this.#saldo < valor) {
            return "No hay saldo suficiente"
        } else {
            this.#saldo -= valor
            return `Saldo actual: ${this.#saldo}`
        }
    }
};

let jose = new CuentaBancaria(2500,"Jose salomon");
console.log(jose.depositar(1500))
console.log(jose.retirar(1500))
console.log(jose.retirar(5000))