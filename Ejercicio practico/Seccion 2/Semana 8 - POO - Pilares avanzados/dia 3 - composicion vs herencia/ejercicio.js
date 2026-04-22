// Sistema de pagos con composicion

class Direccion{
    constructor (calle, ciudad, pais) {
        this.calle = calle
        this.ciudad = ciudad
        this.pais = pais
    }

    info() {
        return `${this.calle}, ${this.ciudad}, ${this.pais}`
    }
}

class MetodoDePago {
    constructor(tipo, ultimos4Digitos) {
        this.tipo = tipo
        this.ultimos4Digitos = ultimos4Digitos
    }
    
    info() {
        return `${this.tipo} - **** **** **** ${this.ultimos4Digitos}`
    }
}

class Carrito {
    constructor () {
        this.item = []
    }

    agregar(nombre, precio) {
        this.item.push({nombre, precio})
    }

    resumen() {
    return this.item.map(n => `${n.nombre} $${n.precio}`).join(", ")
    }
}

class CarritoCalculadora {
    total(carrito) {
        return carrito.item.reduce((total, n) => total + n.precio, 0)
    }
    resumen(carrito) {
        return carrito.item.map(n => `${n.nombre} $${n.precio}`).join(", ")
    }
}

class Orden {
    constructor(id, cliente, direccion, metodoDePago, carrito) {
        this.id = id
        this.cliente = cliente
        this.direccion = direccion
        this.metodoDePago = metodoDePago
        this.carrito = carrito
        this.calculadora = new CarritoCalculadora()  // composición
    }

    resumen() {
        return `ID: ${this.id} | Cliente: ${this.cliente}
        Items: ${this.calculadora.resumen(this.carrito)}
        Total: $${this.calculadora.total(this.carrito)}
        Dirección: ${this.direccion.info()}
        Pago: ${this.metodoDePago.info()}`
    }
}

let pago = new MetodoDePago("MasterCard", 4321)
let direccion = new Direccion("Calle 43", "Barranquilla", "Colombia")

let jostyn = new Orden(123, "Jostyn Aragon", direccion, pago, "$30.00")

let carrito = new Carrito()
carrito.agregar("Arepa de choclo", 5000)
carrito.agregar("Jugo de lulo", 3000)
carrito.agregar("Bandeja paisa", 15000)

let orden = new Orden(124, "Jostyn", direccion, pago, carrito)
console.log(orden.resumen())
