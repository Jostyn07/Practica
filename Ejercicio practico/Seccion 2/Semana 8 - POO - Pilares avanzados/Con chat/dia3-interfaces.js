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

class PagoTarjeta extends Pago {
    constructor (nombreUsuario,saldo) {
        super(nombreUsuario, saldo)
    }

    procesarPago(valor) {
        if(this.verificarSaldo(valor)) {
            return "Compra realizada con exito"
        } else {
            return "Compra denegada"
        }
    }
}

class PagoEfectivo extends Pago {
    constructor (nombreUsuario,saldo) {
        super(nombreUsuario, saldo)
    }

    procesarPago(valor) {
        return "Compra realizada con exito"
    }
}


