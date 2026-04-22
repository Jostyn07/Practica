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

class NotificacionWhatsapp extends Notificacion {
    constructor (destinatario, mensaje, nombreContacto) {
        super(destinatario, mensaje)
        this.nombreContacto = nombreContacto
    }

    enviar() {
        if (this.nombreContacto) {
            return `Enviando Whatsapp a ${this.nombreContacto} (${this.destinatario}): ${this.mensaje}`
        } else {
            return `Enviando Whatsapp a ${this.destinatario}: ${this.mensaje}`
        }
    }    
}

class GestorNotificaciones {
    constructor () {
        this.notificaciones = []
    }
    agregarNotificacion(notificacion) {
        this.notificaciones.push(notificacion)
    }

    enviarTodas() {
        return this.notificaciones.forEach(n => console.log(n.enviar()))
    }

    filtrarPorTipo(tipo) {
        return this.notificaciones.filter(n => n.constructor.name === tipo)
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

let gestor = new GestorNotificaciones()
gestor.agregarNotificacion(new NotificacionEmail("ana@mail.com", "Póliza aprobada"))
gestor.agregarNotificacion(new NotificacionSMS("+573001234567", "Póliza aprobada"))
gestor.agregarNotificacion(new NotificacionWhatsapp("+573007654321", "Póliza aprobada", "Carlos"))

gestor.enviarTodas()
console.log(gestor.filtrarPorTipo("NotificacionEmail"))