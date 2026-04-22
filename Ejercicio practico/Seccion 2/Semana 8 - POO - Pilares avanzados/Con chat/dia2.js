class Empleado {
    constructor (nombre, ciudadDeResidencia, edad) {
        this.nombre = nombre
        this.ciudadDeResidencia = ciudadDeResidencia
        this.edad = edad
    }
}

class Agente extends Empleado {
    constructor (nombre, ciudadDeResidencia, edad, departamento) {
        super(nombre, ciudadDeResidencia, edad)
        this.departamento = departamento
    }
}

let juan = new Agente ("Juan Caicedo", "Barranquilla", 27, "Ventas") 