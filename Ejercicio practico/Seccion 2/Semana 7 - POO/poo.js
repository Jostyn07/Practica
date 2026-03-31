// Subobjetivo 1: Definir la clase y su contructor
class Vehiculo {
    constructor(marca, modelo, año) {
        // "this" hace referencia al objeto que se esta creando
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false; // valor por defecto 
    }
    // Subojetivo 2: Métodos que modifican el estado del objeto
    encender() {
        if(this.encendido) {
            console.log(`${this.marca} ya está encendido`);
            return
        }
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} encendido`)
    }

    apagar() {
        this.encendido = false
        console.log(`${this.marca} ${this.modelo} apagado`)
    }

    // Subobjetivo 3: Metodo que describe el objeto
    info() {
        console.log(`${this.año} ${this.marca} ${this.modelo}`)
    }

}

// Subobjetivo 4: Crear instancias y usarlas
const carro1 = new Vehiculo("Chevrolet", "Spark", 2019);
const carro2 = new Vehiculo("Renault", "Logan", 2021);

carro1.info();      // 2019 Chevrolet Spark
carro1.encender();  // Chevrolet Spark encendido
carro1.encender();  // Chevrolet Spark ya está encendido.
carro2.info();      // 2021 Renault Logan