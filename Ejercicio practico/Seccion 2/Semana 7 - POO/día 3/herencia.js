class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre
        this.salario = salario
    }

    info() {
        return `Nombre: ${this.nombre} | Salario: ${this.salario}`
    }
}

class Agente extends Empleado {
    #region 
    constructor (nombre, salario, region) {
        super(nombre, salario)
        this.#region = region
    }

    getRegion() {
        return this.#region
    }

    setRegion(nuevaRegion) {
        if (nuevaRegion.length === 0) return "Región inválida"
        this.#region  = nuevaRegion
    }
    
    presentarse() {
        return `Soy ${this.nombre}, agente en ${this.#region}`
    }

    info() {
        return super.info() + ` | Región: ${this.#region}` 
    }
}

class Supervisor extends Agente {
    constructor (nombre, salario, region) {
        super(nombre, salario, region)
        this.equipo = []
    }

    agregarAgente(agente) {
        this.equipo.push(agente)
    }

    info() {
        return super.info() + ` | Equipo: ${this.equipo.length} agente(s)`
    }
}

class Director extends Empleado {
    constructor (nombre, salario, empresa) {
        super(nombre, salario)
        this.empresa = empresa
    }

    info() {
        return super.info() + ` | Empresa: ${this.empresa}`
    }

}
// Clase padre: Empleado
// Atributos: nombre, salario
// Método: info() → retorna "Nombre: X | Salario: $X"

// Clase hijo: Agente (extends Empleado)
// Atributos adicionales: region
// Método adicional: presentarse() → retorna "Soy X, agente en X"

// Agrega a tu código una clase Supervisor que extiende Agente
// Atributos adicionales: equipo (array de agentes)
// Override de info() que muestre todo + cantidad de agentes en su equipo
// Método: agregarAgente(agente) → agrega al array equipo

let equipo = [
   new Empleado("Luis", 2000000),
   new Agente("Pedro", 3000000, "Barranquilla"),
   new Supervisor("María", 5000000, "Bogotá"),
   new Director("Carlos", 8000000, "S&S Asesorías")
]
// Prueba:
let agente = new Agente("Pedro", 3000000, "Barranquilla")
console.log(agente.info())         // heredado de Empleado
console.log(agente.presentarse())  // propio de Agente

let super1 = new Supervisor("María", 5000000, "Bogotá")
super1.agregarAgente(agente)
console.log(super1.info())
// "Nombre: María | Salario: $5000000 | Región: Bogotá | Equipo: 1 agente(s)"

console.log(agente.getRegion())      // "Barranquilla"
console.log(agente.setRegion(""))                 // "Región inválida"
agente.setRegion("Bogotá")          
console.log(agente.getRegion())      // "Bogotá"
for (let i = 0; i < equipo.length; i++) {
    console.log(equipo[i].info())
}