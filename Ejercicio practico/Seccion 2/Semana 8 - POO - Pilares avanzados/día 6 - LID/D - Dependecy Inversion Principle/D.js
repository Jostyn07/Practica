// ✗ Orden depende directamente de EmailNotificador
class Orden {
    constructor() {
        this.notificador = new EmailNotificador()  // ← implementación concreta
    }
    
    procesar() {
        // lógica de la orden
        this.notificador.enviar("Orden procesada")
    }
}

class EmailNotificador {
    enviar(mensaje) { console.log(`Email: ${mensaje}`) }
}

// Si mañana quieres cambiar a SMS, tienes que modificar Orden. Eso viola D.
