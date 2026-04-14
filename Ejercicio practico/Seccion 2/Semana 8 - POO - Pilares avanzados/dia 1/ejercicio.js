class Notificacion {
    constructor(destinatario, mensaje) {
        this.destinatario = destinatario
        this.mensaje = mensaje
    }
    enviar() {
        throw new Error("Debes implementar enviar")
    }
}

class NotificacionEmail extends Notificacion {
    constructor (destinatario, mensaje) {
        super(destinatario, mensaje)
    }
    enviar() {
        return `Enviando email a ${this.destinatario}: ${this.mensaje}`
    }
}

class NotificacionSMS extends Notificacion {
    constructor (destinatario, mensaje) {
        super(destinatario, mensaje)
    }
    enviar() {
        return `Enviando SMS a ${this.destinatario}: ${this.mensaje}`
    }
}

// Crea una clase abstracta "Notificacion" con:
//   - constructor: destinatario, mensaje
//   - método enviar() → lanza error "Debes implementar enviar()"

// Crea 2 clases hijas:
//   - NotificacionEmail → enviar() retorna "Enviando email a [destinatario]: [mensaje]"
//   - NotificacionSMS   → enviar() retorna "Enviando SMS a [destinatario]: [mensaje]"

// Prueba:
let notis = [
    new NotificacionEmail("ana@mail.com", "Tu póliza fue aprobada"),
    new NotificacionSMS("+573001234567", "Tu póliza fue aprobada")
]

notis.forEach(n => console.log(n.enviar()))