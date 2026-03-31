function saludar(nombre) {
    return "Hola, " + nombre
}
console.log(saludar("Jostyn"))

// Se puede asignar un valor que se usa cuando no se asigna un parametro

function calcularImpuestos (precio, tasa = 0.16) {
    return precio * tasa
}
console.log(calcularImpuestos(1000))
console.log(calcularImpuestos(1000, 0.2))

// Como funciona el return
function verificarEdad(edad) {
    if (edad < 18) {
        return "Menor de edad"
        console.log("Esta línea NUNCA se ejecuta")  // código muerto
    }
    return "Mayor de edad"
}
console.log(verificarEdad(17))

// Lo que sucede si no se agrega return a la funcion
function saludar(nombre) {
    console.log("Hola, " + nombre)
    // no hay return
}

let resultado = saludar("Jostyn")   // imprime "Hola, Jostyn"
console.log(resultado)               // undefined

// Ejemplo
function calcularSubtotal (precio, cantidad) {
    return precio * cantidad
}

function calcularImpuestos (subtotal) {
    return subtotal * 0.16
}

function calcularDescuento (subtotal, porcentaje) {
    return subtotal * porcentaje
}

function generarFactura (precio, cantidad, descuento) {
    let subtotal = calcularSubtotal(precio, cantidad)
    let desc = calcularDescuento(subtotal, descuento)
    let subtotalConDescuento = subtotal - desc
    let impuesto = calcularImpuestos(subtotalConDescuento)
    let total = subtotalConDescuento + impuesto

    return {
        subtotal: subtotal,
        descuento: desc,
        impuesto: impuesto,
        total: total
    }
}

let factura = generarFactura(500, 3, 0.10)
console.log(factura)

