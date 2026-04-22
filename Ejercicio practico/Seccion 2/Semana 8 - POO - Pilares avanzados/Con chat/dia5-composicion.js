class Motor {
    encender() {
        return "Motor encendido"
    }
}

class Carro {
    constructor (motor) {
        this.motor = motor
    }

    arrancar() {
        return this.motor.encender()
    }
}

let motor = new Motor()
let carro = new Carro(motor)

console.log(carro.arrancar())

class Pago {
    constructor (nombreUsuario, saldo) {
    this.nombreUsuario = nombreUsuario;
    this.saldo = saldo
    } 
        procesarPago(valor) {
        throw new Error("No esta bien definido");
    }  
    
    verificarSaldo(valor){
    return valor <= this.saldo 
    }
}

class Teclado {
    escribir () {
        return "Escribiendo..."
    }
}

class Computador {
    constructor(teclado) {
        this.teclado = teclado
    }

    usar() {
        return this.teclado.escribir()
    }
}

class Cocina {
    preparar() {
        return "Preparando comida..."
    }
}

class Restaurante {
    constructor (cocina) {
        this.cocina = cocina
    }

    abrir() {
       return this.cocina.preparar()
    }
}

let cocina = new Cocina()
let restaurante = new Restaurante(cocina)
console.log(restaurante.abrir())