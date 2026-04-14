
// Construye un sistema con estas clases:
class Empleado {
    constructor (nombre, sueldo, region) {
        this.nombre = nombre
        this.sueldo = sueldo
        this.region = region
    }

    info() {
        return `${this.nombre} | ${this.sueldo} | ${this.region} `
    }
}

class Agente extends Empleado {
    constructor (nombre, sueldo, region) {
        super(nombre, sueldo, region)
    }
}

class Poliza {
    constructor (id, cliente, tipo, prima) {
        this.id = id
        this.cliente = cliente
        this.tipo = tipo
        this.prima = prima
        this.estado = true
    }

    activar() {
        this.estado = true
    }

    cancelar() {
        this.estado = false
    }

    resumen(cartera) {
        return `${this.id} | ${this.cliente} | ${this.tipo} | ${this.prima} | ${this.estado}`
    }
}

class Cartera {
    constructor (agente, polizas = []) {
        this.polizas = polizas || []
        this.agente = agente
    }

    agregarPoliza(poliza) {
        this.polizas.push(poliza) 
    }

    buscarId(id) {
       return this.polizas.find(n => n.id === id)
    }

    cancelarPoliza(id) {
        let poliza = this.buscarId(id)
        if(poliza) {
            poliza.cancelar()
        } else {
           return "No existe"
        }
    }

    polizasActivas() {
       return this.polizas.filter(n => n.estado === true)
    }

    totalPrimas() {
        return this.polizasActivas().reduce((totalPrimas, n) => totalPrimas + n.prima, 0)
    }

    resumen() {
        return `Agente: ${this.agente.nombre} | Polizas activas: ${this.polizasActivas().length} | Total primas: $${this.totalPrimas()}`
    }
}


// Prueba completa

// 1. Crea 2 agentes
let juanPerez = new Agente("Juan Perez", 2000000, "Atlantico")
let mariaLopez = new Agente("Maria Lopez", 2500000, "Bogota")

// 2. Crea una Cartera para cada agente
let carteraJuan = new Cartera(juanPerez)
let carteraMaria = new Cartera(mariaLopez)

// 3. Agrega 3 pólizas a cada cartera
carteraJuan.agregarPoliza(new Poliza(1, "Ana",    "Gold",   350))
carteraJuan.agregarPoliza(new Poliza(2, "Luis",   "Silver", 200))
carteraJuan.agregarPoliza(new Poliza(3, "Carlos", "Bronze", 100))

carteraMaria.agregarPoliza(new Poliza(4, "Rosa",   "Gold",   350))
carteraMaria.agregarPoliza(new Poliza(5, "Pedro",  "Silver", 200))
carteraMaria.agregarPoliza(new Poliza(6, "Diana",  "Bronze", 100))

// 4. Cancela 1 póliza de cada cartera
carteraJuan.cancelarPoliza(2)
carteraMaria.cancelarPoliza(5)

// 5. Muestra el resumen de cada cartera
console.log(carteraJuan.resumen())
console.log(carteraMaria.resumen())