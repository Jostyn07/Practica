// Tienes esta clase que viola S:
class Poliza {
    constructor(id, cliente, tipo, prima) {
        this.id = id
        this.cliente = cliente
        this.tipo = tipo
        this.prima = prima
        this.activa = true
    }

    activar()  { this.activa = true }
    cancelar() { this.activa = false }

    // ✗ Estas dos no deberían estar aquí
    guardarEnDB() {
        console.log(`Guardando póliza ${this.id} en base de datos...`)
    }

    enviarConfirmacion() {
        console.log(`Enviando email de confirmación a ${this.cliente}`)
    }
}

class PolizaEnviar {
    guardarEnDB(poliza) {
        console.log(`Enviando email de confirmación a ${poliza.cliente}`)
    }
}

class PolizaGuardar {
    enviarConfirmacion(poliza) {
        console.log(`Guardando póliza ${poliza.id} en base de datos...`)
    }
}