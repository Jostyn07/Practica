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
        try {
            return `Enviando email a ${this.destinatario}: ${this.mensaje}`
        } catch (error){
            console.error(error.message)
        }        
    }
}

class NotificacionSMS extends Notificacion {
    constructor (destinatario, mensaje) {
        super(destinatario, mensaje)
    }
    enviar() {
        try {
            return `Enviando SMS a ${this.destinatario}: ${this.mensaje}`
        } catch (error){
            console.error(error.message)
        }
    }
}

class NotificacionWhatsapp extends Notificacion {
    constructor (destinatario, mensaje, nombreContacto) {
        super(destinatario, mensaje)
        this.nombreContacto = nombreContacto
    }

    enviar() {
        try {
            if (this.nombreContacto) {
                return `Enviando Whatsapp a ${this.nombreContacto} (${this.destinatario}): ${this.mensaje}`
            } else {
                return `Enviando Whatsapp a ${this.destinatario}: ${this.mensaje}`
            }
        } catch (error) {
            console.error(error.message)
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
        try {
            return this.notificaciones.forEach(n => console.log(n.enviar()))
        } catch (error) {
            console.error(error.message)
        }
    }

    filtrarPorTipo(tipo) {
        try {
            return this.notificaciones.filter(n => n.constructor.name === tipo)
        } catch (error) {
            console.error(error.message)
        }
    }
}

class NotificacionRota extends Notificacion {
    enviar() {
        throw new Error("Servicio no disponible")
    }
}

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

// Prueba:
let gestor1 = new GestorNotificaciones()
gestor1.agregarNotificacion(new NotificacionEmail("ana@mail.com", "Hola"))
gestor1.agregarNotificacion(new NotificacionRota("roto@mail.com", "Hola"))
gestor1.agregarNotificacion(new NotificacionSMS("+573001234567", "Hola"))

gestor1.enviarTodas()
// Agrega try/catch al GestorNotificaciones

// 1. En enviarTodas() — si una notificación falla al enviar,
//    muestra el error pero continúa con las demás

// 2. Crea una clase NotificacionRota que extiende Notificacion
//    pero su enviar() siempre lanza un error:
//    throw new Error("Servicio no disponible")

// Prueba:
let gestor = new GestorNotificaciones()
gestor.agregarNotificacion(new NotificacionEmail("ana@mail.com", "Hola"))
gestor.agregarNotificacion(new NotificacionRota("roto@mail.com", "Hola"))
gestor.agregarNotificacion(new NotificacionSMS("+573001234567", "Hola"))

gestor.enviarTodas()
// Esperado:
// Enviando email a ana@mail.com: Hola
// Error al enviar: Servicio no disponible
// Enviando SMS a +573001234567: Hola