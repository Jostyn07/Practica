// Tienes este calculador de descuentos que viola O:

class CalculadorDescuento {
    calcular(descuento, precio) {
        return descuento.calcular(precio)
    }
}

class CalcularDescuentoEstudiante extends CalculadorDescuento {
    calcular(precio) {
        return precio * 0.8      // 20% descuento
    }
}

class CalcularDescuentoEmpleado extends CalculadorDescuento {
    calcular(precio) {
       return precio * 0.7      // 30% descuento
    }
}

class CalcularDescuentoVip extends CalculadorDescuento {
    calcular(precio) {
        return precio * 0.5      // 50% descuento
    }
}

let calculador = new CalculadorDescuento()
console.log(calculador.calcular(new CalcularDescuentoEstudiante(), 100000))
console.log(calculador.calcular(new CalcularDescuentoEmpleado(), 100000))
console.log(calculador.calcular(new CalcularDescuentoVip(), 100000))
// Cada vez que agregan un tipo nuevo, hay que modificar esta clase.
// Refactorízalo aplicando O — cada tipo de descuento debe ser
// su propia clase, y CalculadorDescuento no debe cambiar
// cuando se agrega uno nuevo.

