class Animal {
    constructor (nombre, especie, edad) {
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
    }

    info() {
        return `${this.nombre} | ${this.especie} | ${this.edad}`
    }
}

class Paciente extends Animal {
    constructor (nombre, especie, edad, dueño, peso) {
        super(nombre, especie, edad)
        this.dueño = dueño
        this.peso = peso
    }

    info() {
       return super.info() + ` | ${this.dueño} | ${this.peso}`
    }
}

class Veterinario {
    constructor (nombre, especialidad) {
        this.nombre = nombre
        this.especialidad = especialidad
    }

    info() {
        return `${this.nombre} | ${this.especialidad}`
    }
}

class Consulta{
    constructor (paciente, veterinario, motivo, fecha) {
        this.paciente = paciente
        this.veterinario = veterinario
        this.motivo = motivo
        this.fecha = fecha
    }
    
    resumen() {
        return `Paciente: ${this.paciente.nombre} | Vet: ${this.veterinario.nombre} | Motivo: ${this.motivo} | Fecha: ${this.fecha}`
    }
}

class Clinica {
    constructor (nombre) {
        this.nombre = nombre
        this.consulta = []
    }

    registrarConsulta(consulta) {
        this.consulta.push(consulta)
    }

    buscarPorPaciente(nombre) {
        return this.consulta.filter( n => n.paciente.nombre === nombre)
    }

    totalConsultas() {
        return this.consulta.length
    }

    resumen() {
        return this.consulta.forEach(n => console.log(n.resumen()))
    }
}

let rex = new Paciente("Rex", "Perro", 3, "Juan", 25)
let michi = new Paciente("Michi", "Gato", 1, "Ana", 4)

console.log(rex.info())
console.log(michi.info())
let drJuan = new Veterinario("Dr. Juan", "Cirujano")
let consulta = new Consulta(rex, drJuan, "Revisión", "13/04/2026")
console.log(consulta.resumen())

// Clinica
let vetSalud = new Clinica("Vetsalud")
// Veterinario
let draVeronica = new Veterinario("Dra. Veronica", "General")
let drFabio = new Veterinario("Dra. Fabio", "Especialista")
// Pacientes
let bruno = new Paciente("Bruno", "Perro", 5, "Josefa", 10)
let Salomon = new Paciente("Salomon", "Gato", 2, "Francisco", 1)
let Simba = new Paciente("Simba", "Perro", 3, "Jostyn", 15)
// Registro de consultas
let consulta1 = new Consulta(bruno, draVeronica, "Revision", "14/04/2026")
let consulta2 = new Consulta(Salomon, draVeronica, "Revision", "14/04/2026")
let consulta3 = new Consulta(Simba, draVeronica, "Revision", "14/04/2026")
let consulta4 = new Consulta(bruno, drFabio, "Preparación para operación", "14/04/2026")

vetSalud.registrarConsulta(consulta1)
vetSalud.registrarConsulta(consulta2)
vetSalud.registrarConsulta(consulta3)
vetSalud.registrarConsulta(consulta4)
// Buscar consulta
console.log(vetSalud.buscarPorPaciente("Bruno"))
// Mostrar todas las consultas
vetSalud.resumen()
