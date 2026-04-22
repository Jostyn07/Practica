class Pago {
    constructor(pago) {
        this.pago = pago
    }
    procesarPago() {
        throw new Error("Este metodo de pago no es aceptado")
    }
}

class PagoTarjeta {
    constructor () {
        this.pagos = []
    }
}

class PagoEfectivo {

}

class PagoTransferencia {

}