class Figura {
    area() {
        throw new Error("Debes implementar area() en la clase hija")
    }
}

class Circulo extends Figura {
    constructor (radio) {
        super()
        this.radio = radio
    }

    area() {
        return Math.PI * this.radio ** 2
    }
}

let circulo =  new Circulo (10)
console.log(circulo.area())