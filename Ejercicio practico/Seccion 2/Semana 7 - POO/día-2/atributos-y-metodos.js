// ========================= Atributos con valores por defecto =============================
// No todo viene con parametro. Algunos atributos empiezan con un valor fijo:

class Poliza {
    constructor(id, cliente, tipo, prima) {
        // Atributos que reciben valor de parametros
        this.id = id
        this.cliente = cliente
        this.tipo = tipo
        this.prima = prima

        // Atributos con valor por defecto (No son parametros)
        this.activa = true
        this.reclamos = []
        this.fechCreacion = new Date()
    }
}

let poliza = new Poliza(1, "Ana", "Gold", 350)
console.log(poliza.activa)          // true (siempre empieza así)
console.log(poliza.reclamos)        // [] (empieza vacío)
console.log(poliza.fechaCreacion)   // fecha actual

// ============================ Atributos calculados =======================================
// Un atributo cuyo valor depende de otro
class Producto {
    constructor(nombre, precioBase, impuesto) {
        this.nombre = nombre
        this.precioBase = precioBase
        this.impuesto = impuesto
        this.precioFinal = precioBase + (precioBase*impuesto)
    }
}

let laptop = new Producto("Laptop", 1000, 0.19)
console.log(laptop.precioFinal)   // 1190

// El problema: si cambias precioBase después, precioFinal no se actualiza. Para eso existen los getters, que veremos más adelante.

// ===================== Parámetros opcionales con valores por defecto ========================

class Cliente {
    constructor(nombre, edad, poliza = "Sin asignar", idioma = "Español") {
        this.nombre = nombre
        this.edad = edad
        this.poliza = poliza
        this.idioma = idioma
        this.información = `Nombre: ${this.nombre}\nEdad: ${this.edad}\nPoliza: ${this.poliza}\nIdioma: ${this.idioma}`
    }
}

let ana = new Cliente("Ana", 35, "Gold")         // idioma = "Español" por defecto
let john = new Cliente("John", 40, "Silver", "English")
let nuevo = new Cliente("Carlos", 28)             // poliza = "Sin asignar", idioma = "Español"

console.log(ana.información)

// Los parámetros con = son opcionales. Si no los pasas, usan el valor por defecto. Van siempre al final.

// ============== Métodos que modifican estado ==================
// Un método puede cambiar los atributos del objeto. El objeto recuerda los cambios:

class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular
        this.saldo = saldoInicial
        this.movimientos = []
    }
    depositar(monto){
        this.saldo += monto
        this.movimientos.push({ tipo: "deposito", monto: monto})
    }
    retirar(monto) {
        if (monto > this.saldo) {
            console.log("Saldo insuficiente")
            return
        }
        this.saldo -= monto
        this.movimientos.push({ tipo: "retiro", monto: monto})
    }

    verSaldo() {
        return this.titular + ": $" + this.saldo
    }
}

let cuenta = new CuentaBancaria("Ana", 1000)
cuenta.depositar(500)
cuenta.retirar(200)
console.log(cuenta.verSaldo())       // "Ana: $1300"
console.log(cuenta.movimientos)      // [{tipo: "depósito", monto: 500}, {tipo: "retiro", monto: 200}]

// =================== Métodos que usan otros métodos ================================
// Los métodos pueden llamarse entre sí con this:

class Poliza1 {
    constructor(id, cliente, tipo, prima) {
        this.id = id
        this.cliente = cliente
        this.tipo = tipo
        this.prima = prima
        this.activa = true
        this.reclamos = []
    }

    estaActiva() {
        return this.activa
    }

    hacerReclamo(monto, descripcion) {
        if (!this.estaActiva) {
            return "Póliza inactiva, no se puede reclamar"
        }

        let reclamo = {
            monto: monto,
            descripcion: descripcion,
            fecha: new Date().toLocaleDateString()
        }
        this.reclamos.push(reclamo)
        return "Reclamo de $" + monto + " registrado para " + this.cliente
    }

    totalReclamado() {
        let total = 0
        for (let i = 0; i < this.reclamos.length; i++) {
            total += this.reclamos[i].monto
        }
        return total
    }

    resumen() {
        return `${this.cliente} | ${this.tipo} | $${this.prima} | Reclamos: $${this.totalReclamado()}`
    }
}

let poliza1 = new Poliza1(1, "Ana", "Gold", 350)
console.log(poliza1.hacerReclamo(500, "Consulta médica"))
console.log(poliza1.hacerReclamo(200, "Medicamentos"))
console.log(poliza1.resumen())
// "Ana | Gold | Prima: $350 | Reclamos: $700"

poliza1.activa = false
console.log(poliza1.hacerReclamo(100, "Laboratorio"))
// "Póliza inactiva, no se puede reclamar"

// ==================== Métodos con validación ========================
// Los métodos deben proteger al objeto de datos inválidos:
class Agente {
    constructor(nombre, maxClientes) {
        this.nombre = nombre
        this.maxClientes = maxClientes
        this.Clientes = []
    }
    agregarCliente(cliente) {
        if (this.Clientes.length >= this.maxClientes) {
            return "No se puede agregar, " + this.nombre + " ya tiene el maximo de clientes"
        }

        if (this.Clientes.includes(cliente)) {
            return cliente + " ya s cliende de " + this.nombre
        }

        this.Clientes.push(cliente)
        return cliente + " asignado a " + this.nombre
    }

    removerCliente(cliente) {
        let indice = this.Clientes.indexOf(cliente)
        if (indice === -1) {
            return cliente + " no es cliente de " + this.nombre
        }
        this.Clientes.splice(indice, 1)
        return cliente + " removido de " + this.nombre
    }
    cargaDeTrabajo() {
        return this.Clientes.length + "/" + this.maxClientes
    }
}

let pedro = new Agente("Pedro", 3)
console.log(pedro.agregarCliente("Ana"))       // "Ana asignado a Pedro"
console.log(pedro.agregarCliente("Luis"))      // "Luis asignado a Pedro"
console.log(pedro.agregarCliente("Ana"))       // "Ana ya es cliente de Pedro"
console.log(pedro.agregarCliente("María"))     // "María asignado a Pedro"
console.log(pedro.agregarCliente("Carlos"))    // "No se puede agregar..."
console.log(pedro.cargaDeTrabajo())            // "3/3"