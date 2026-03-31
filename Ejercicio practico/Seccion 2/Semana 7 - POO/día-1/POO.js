class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.encendido = false
        this.velocidad = 0
    }

    encender() {
        this.encendido = true
        console.log(this.marca + " " + this.modelo + " encendido")
    }

    acelerar(kmh) {
        if (!this.encendido) {
            console.log("Primero enciende el carro")
            return
        }
        this.velocidad += kmh
        console.log("Velocidad: " + this.velocidad + " km/h")
    }

    frenar() {
        this.velocidad = 0
        console.log(this.marca + " se detuvo")
    }
}

let miCarro = new Carro("Toyota", "Corolla", 2024)

// // A) ¿Cuáles son los atributos?
//     marca
//     modeloaño
//     año

// // B) ¿Cuáles son los métodos?
//         this.marca = marca
//         this.modelo = modelo
//         this.año = año
// // C) ¿Qué imprime miCarro.encender()?
//     console.log(this.marca + " " + this.modelo + " encendido")
// // D) ¿Qué pasa si llamo miCarro.acelerar(50) SIN encender primero?
//     console.log("Primero enciende el carro")
// // E) Si enciendo y llamo acelerar(50) y después acelerar(30), ¿cuál es la velocidad?
// 80
// =========================================================================================================
// Crea la clase "Poliza" con:
// Atributos: id, cliente, tipo (Gold/Silver/Bronze), prima, activa
// Métodos:
//   - activar() → pone activa en true
//   - cancelar() → pone activa en false
//   - info() → retorna string con todos los datos

class Poliza {
    constructor(id, cliente, tipo, prima) {
        this.id = id
        this.cliente = cliente
        this.tipo = tipo
        this.prima = prima
        this.activa = true
    }
    activar() {
        this.activa = true
    }

    cancelar() {
        this.activa = false
    }

    info() {
        console.log(`id: ${this.id} | Nombre: ${this.cliente} | Tipo: ${this.tipo} | Prima: ${this.prima} | Activo: ${this.activa}`)
    }

    hacerReclamoMonto(a) {
        if (this.activa === true) {
            console.log(`Reclamo de $${a} procesado para ${this.cliente} `)
        } else {
            console.log("No se puede procesar, la poliza se encuentra inactiva")
        }
    }
}

let jostyn = new Poliza(1,"Jostyn Aragon", "Plata", 19)
let sandra = new Poliza(1,"Sandra Gonzalez", "Plata", 19)
let salome = new Poliza(1,"Salome Araujo", "Plata", 19)
jostyn.cancelar()
console.log(jostyn.info())
console.log(sandra.info())
console.log(salome.info())
jostyn.activar()
console.log(jostyn.info())
console.log(jostyn.hacerReclamoMonto(200))

// Crea 3 pólizas y prueba los métodos

// Agrega a la clase Poliza un método:
//   - hacerReclamo(monto) → solo funciona si la póliza está activa
//     Si está activa: imprime "Reclamo de $X procesado para [cliente]"
//     Si no está activa: imprime "No se puede procesar, póliza inactiva"