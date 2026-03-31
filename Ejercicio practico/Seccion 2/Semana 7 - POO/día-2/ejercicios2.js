class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        return `Hola, soy ${this.nombre}`
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return "Es mayor de edad"
        } else {
            return "Es menor de edad"
        }
    }

    presentarse() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
    }

    cumplirAnios() {
        this.edad += 1
        return this.edad
    }
}

let jostyn = new Persona("Jostyn", 23)


console.log(jostyn.saludar())
console.log(jostyn.presentarse())
console.log(jostyn.esMayorDeEdad())
console.log(jostyn.cumplirAnios())