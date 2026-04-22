// Sistema de Procesamiento de Pagos
class MetodoPago {
    procesarMonto(precio) {
        throw new Error("Debes implementar procesar()")
    }
}

class PagoTarjeta extends MetodoPago{
    procesarMonto(precio) {
        console.log(`Se realiza pago de: ${precio}`)
    }
}

class PagoPayPal extends MetodoPago{
    procesarMonto(precio) {
        console.log(`Se realiza pago de: ${precio}`)

    }
}

class PagoTransferencia extends MetodoPago{
    procesarMonto(precio) {
        console.log(`Se realiza pago de: ${precio}`)
    }
}

// ==================================
// Seccion de descuento
// ==================================

class Descuento {
    calcularDescuento() {
        throw new Error("No esta definido")
    }
}

class DescuentoEstudiante extends Descuento {
    calcularDescuento(precio) {
        return precio * 0.15
    }
}

class DescuentoEmpleado extends Descuento {
    calcularDescuento(precio) {
        return precio * 0.20
    }
}

class DescuentoBlackFriday extends Descuento {
    calcularDescuento(precio) {
        return precio * 0.30
    }
}

// ==================================
// Calcular comision por pago procesado
// ==================================

class Comision {
    calcularComision() {
        throw new Error("Usar correctamente calcularComision()")
    }
}

class ComisionPorTarjeta extends Comision{
    calcularComision(precio) {
        return precio * 0.02
    }
}

class ComisionPorPayPal extends Comision{
    calcularComision(precio) {
        return precio * 0.05
    }
}

class ComisionPorTransferencia extends Comision{
    calcularComision(precio) {
        return precio * 0.01
    }
}


class Notificaciones {
    notificar() {
        throw new Error("usar enviar()")
    }
}

class NotificacionEmail extends Notificaciones{
    notificar(precio) {
        return `Se le realiza un debito de ${precio}`
    }
}

class NotificacionSms extends Notificaciones{
    notificar(precio) {
        return `Se le realiza un debito de ${precio}`
    }
}

class ProcesarPago {
    constructor (metodoPago, comision, notificacion) {
        this.metodoPago = metodoPago
        this.comision = comision
        this.notificacion = notificacion
    }
    realizarDescuento(descuento, precio) {
        return descuento.calcularDescuento(precio)
    }

    realizarComision(comision, precio) {
        return comision.calcularComision(precio)
    }

    enviarNotifiacion(notificacion, valor) {
        return notificacion.enviarNotifiacion(precio)
    }

    metodoDePagoSeleccionado(metodo, precio) {
        return metodo.procesar(precio)
    }

    realizarPago(metodoDePago, descuento, comision, notificacion, precio) {
        let valor = precio - this.realizarDescuento(descuento, precio) + this.realizarComision(comision, precio) 
        console.log(this.enviarNotifiacion(notificacion, valor))
        console.log(this.metodoDePagoSeleccionado(metodoDePago, valor))
    }
}
// Requisitos:
// 1. Diferentes métodos de pago (Tarjeta, PayPal, Transferencia)
// 2. Diferentes tipos de descuento (Estudiante, Empleado, Black Friday)
// 3. Calculadora de comisiones según el método de pago
// 4. Notificaciones al finalizar (Email y SMS)
// 5. Todo debe cumplir SOLID

// Clases que debes crear:
// - MetodoPago (abstracta)
// - PagoTarjeta, PagoPayPal, PagoTransferencia
// - Descuento (abstracta)
// - DescuentoEstudiante, DescuentoEmpleado, DescuentoBlackFriday
// - CalculadoraComision (recibe el método de pago)
// - Notificador (usa composición)
// - ProcesadorPago (orquesta todo)

// Flujo:
// 1. Crear un pago con monto y método
// 2. Aplicar descuento si existe
// 3. Calcular comisión según el método
// 4. Procesar el pago
// 5. Enviar notificación