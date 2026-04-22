// En palabras simples: si una clase hija reemplaza a la clase padre, el código debe seguir funcionando correctamente.
// Ejemplo que viola L:

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
    }
    area() { return this.ancho * this.alto }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado)
    }
    
    // ✗ Esto rompe Liskov
    setAncho(ancho) {
        this.ancho = ancho
        this.alto = ancho  // cambia ambos
    }
}

// El problema:
let rectangulo = new Rectangulo(5, 10)
rectangulo.setAncho(20)  // ancho=20, alto=10, área=200

let cuadrado = new Cuadrado(10)
cuadrado.setAncho(20)    // ancho=20, alto=20, área=400 ← comportamiento diferente