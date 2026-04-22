// Este código viola D:
class Carrito {
    constructor(impuesto) {
        this.calculadora = impuesto
    }
    
    totalConImpuesto(precio) {
        return this.calculadora.calcular(precio)
    }
}

class CalculadoraImpuesto {
    calcular(precio) { return precio * 1.19 }  // IVA 19%
}

class CalculadoraImpuestoReducido {
    calcular(precio) { return precio * 1.05}
}

// Prueba
let carrito1 = new Carrito(new CalculadoraImpuesto())
console.log(carrito1.totalConImpuesto(100000))  // 119000

let carrito2 = new Carrito(new CalculadoraImpuestoReducido())
console.log(carrito2.totalConImpuesto(100000))  // 105000

// Refactorízalo para que Carrito reciba la calculadora por parámetro
// y puedas cambiar entre diferentes tipos de impuesto sin tocar Carrito