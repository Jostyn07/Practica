// **A)** Una función `esPar(numero)` que reciba un número y retorne `true` si es par, `false` 
// si es impar.

// Ejericico 1
function esPar(numero) {
    if (numero % 2 === 0) {
        return "par"
    }
    return "impar"
}
console.log(esPar(12))

// B) Una función `contarVocales(texto)` que reciba un string y retorne cuántas vocales tiene. 
// Ejemplo: `contarVocales("murcielago")` → 5

// Ejercicio 2
function contarVocales(texto) {
    let contador = 0
    let vocales = ["a", 'e', 'i', 'o', 'u', 'A', 'E', 'I','O','U']
    
    for (let i = 0; i < texto.length; i++) {
        for (let y = 0; y < vocales.length; y++) {
            if (texto[i] === vocales[y]) {
                contador++
            }
        }
    }
    return contador
}
console.log(contarVocales("Murcielago"))

// **D)** Una función `encontrarMayor(array)` que reciba un array de números y retorne el 
// número más grande. No uses `Math.max`.

function encontrarMayor(array) {
    let mayor = [0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

console.log(encontrarMayor([12,2,4,5,6,7,8,912,5]))

// **Parte 2 — Descomponer un problema**

// Construye un mini sistema de facturación con estas funciones separadas:

// - `calcularSubtotal(precio, cantidad)` → retorna precio × cantidad
// - `aplicarDescuento(subtotal, porcentaje)` → retorna el subtotal con descuento aplicado
// - `calcularIVA(monto)` → retorna el IVA (16%) del monto
// - `generarFactura(precio, cantidad, descuento)` → usa las tres funciones anteriores y retorna un string con el resumen

// Ejemplo de salida de `generarFactura(200, 5, 0.10)`:
// ```
// Subtotal: $1000
// Descuento (10%): -$100
// Subtotal con descuento: $900
// IVA (16%): $144
// Total: $1044

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad
}

function aplicarDescuento(subtotal, porcentaje) {
    return subtotal * porcentaje
}

function calcularIVA(monto) {
    return monto * 0.16
}

function generarFactura(precio, cantidad, descuento) {
    let subtotal = calcularSubtotal(precio, cantidad);
    let desc = aplicarDescuento(subtotal,descuento);
    let iva = calcularIVA(subtotal - desc)
    let total = subtotal - desc + iva
    console.log(total)

    return `Subtotal: ${subtotal}
    Descuento (${descuento * 100})%: ${desc}
    Subtotal con descuento: ${subtotal - desc}
    IVA (${0.16 * 100})%: ${iva}
    Total: ${total}`

}

console.log(generarFactura(15000, 5, 0.05))

// 1) Crea una función duplicar(numero) que retorne el número multiplicado por 2.

function duplicarNumero(numero) {
    return numero * 2
}
console.log(duplicarNumero(9))

// 2) Crea una función esPositivo(numero) que retorne true si el número es mayor a 0, false si no.

function esPositivo(numero) {
    if (numero > 0) {
        return true
    }
    return false
}
console.log(esPositivo(-3))

// Crea una función gritar(texto) que retorne el texto en mayúsculas con signos de exclamación. 
// Ejemplo: gritar("hola") → "¡HOLA!". Tip: investiga .toUpperCase().

function gritar(texto) {
    return `¡${texto.toUpperCase()}!`
}
console.log(gritar("hola"))

// Crea una función potencia(base, exponente) que calcule la potencia sin usar ** ni Math.pow. Usa un bucle. Ejemplo: potencia(2, 3)
function potencia(base, exponente){
    calculo = base
    for (let i=1; i <= exponente; i++) {
        calculo *=base
    }
    return calculo
}
console.log(potencia(5,7))

//5) Crea una función repetirTexto(texto, veces) que retorne el texto repetido N veces. Ejemplo: repetirTexto("Ja", 3) → "JaJaJa".

function repetirTexto(texto, cantidad) {
    let textoMuestra = ""
    for (let i = 1; i <= cantidad; i++) {
        textoMuestra += texto
    }
    return textoMuestra
}
console.log(repetirTexto("solo", 5))

// 6) Crea una función estaEnRango(numero, limite) que retorne true si el número está entre 0 y el límite (inclusive). 
// Ejemplo: estaEnRango(5, 10) → true, estaEnRango(15, 10) → false.

function estaEnRango (numero, limite) {
    if (numero > 0 && numero < limite) {
        return true
    }
    return false
}
console.log(estaEnRango(10,9))

// 7) Crea una función calcularEnvio(peso, precioPorKg = 5) que retorne el costo de envío. Si no se pasa precio por kg, usa 5. 
// Ejemplo: calcularEnvio(10) → 50, calcularEnvio(10, 8)

function calcularEnvio(peso, precioPorKg = 5) {
    return `Costo de envío: ${peso * precioPorKg}`
}
console.log(calcularEnvio(50))
console.log(calcularEnvio(50,10))

// 8) Crea una función crearUsuario(nombre, rol = "visitante", activo = true) 
// que retorne un string con formato: "[nombre] - Rol: [rol] - Activo: [activo]". Pruébala con estas tres llamadas:

function crearUsuario(nombre, rol = "visitante", activo = true) {
    return `${nombre} - Rol: ${rol} - Activo: ${activo}`
}
console.log(crearUsuario("Jostyn", "admin", true))
console.log(crearUsuario("Ana", "editor"))
console.log(crearUsuario("Carlos"))

// 9) Crea una función primerNegativo(array) que retorne el primer número negativo que encuentre. Si no hay negativos, retorne null. 
// Ejemplo: primerNegativo([5, 3, -2, 8, -7]) → -2.

function primerNegativo(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            return array[i]
        }
        return null
    }
}
console.log(primerNegativo([2,3,4,5]))
console.log(primerNegativo([2,3,4,5,-7,-8,-9]))

// 10) Crea una función filtrarMayores(array, minimo) que retorne un nuevo array solo con los números mayores al mínimo. 
// Ejemplo: filtrarMayores([10, 5, 20, 3, 15], 8) → [10, 20, 15]. 
// Tip: crea un array vacío, recorre el original, y haz .push() de los que cumplan la condición.

let filtro = []

function filtrarMayores (array, minimo) {
    filtro = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > minimo) {
            filtro.push(array[i])
        }
    }
    return filtro
}
console.log(filtrarMayores([2,15,23,16,18,19,25,14,27,10,35,60,27], 20))

// 11) Usando las funciones esPar del ejercicio A anterior y esPositivo del ejercicio 2, crea una función clasificarNumero(numero) que retorne:

// "par positivo" si es par y positivo
// "par negativo" si es par y negativo
// "impar positivo" si es impar y positivo
// "impar negativo" si es impar y negativo
// "cero" si es 0

function parPositivo(numero) {
    if (numero % 2 === 0 && numero > 0) {
        return "si es par y positivo"
    }
}

function parNegativo(numero) {
    if (numero % 2 === 0 && numero < 0) {
        return "si es par y negativo"
    }
}

function imparPositivo(numero) {
    if (numero % 2 !== 0 && numero > 0) {
        return "si es impar y negativo"
    }
}

function imparNegativo(numero) {
    if (numero % 2 !== 0 && numero < 0) {
        return "si es impar y negativo"
    }
}

function clasificarNuemero(numero) {
    let parPos = parPositivo(numero)
    let parNeg = parNegativo(numero)
    let impPos = imparPositivo(numero)
    let impNeg = imparNegativo(numero)

    return `El nuemro es ${parPos || parNeg || impPos || impNeg }`
}
console.log(clasificarNuemero(3))
console.log(clasificarNuemero(-3))
console.log(clasificarNuemero(2))
console.log(clasificarNuemero(-2))

// Crea estas tres funciones y úsalas juntas:

// calcularHorasExtra(horasTrabajadas) → si trabajó más de 8 horas, retorna las horas extra, sino retorna 0
// calcularPagoBase(horasTrabajadas, tarifaHora) → retorna el pago por las primeras 8 horas (o menos si trabajó menos)
// calcularPagoTotal(horasTrabajadas, tarifaHora) → usa las dos anteriores. Las horas extra se pagan al doble. 
// Ejemplo: calcularPagoTotal(10, 100) → 800 (base) + 400 (2 extras al doble) = 1200

function calcularHorasExtra (horasTrabajadas) {
    if (horasTrabajadas > 8) {
        let horasExtras = horasTrabajadas - 8
        return horasExtras
    }
}

function calcularPagoBase (horasTrabajadas, tarifaHora) {
    return (horasTrabajadas - calcularHorasExtra(horasTrabajadas)) * tarifaHora
}

function calcularPagoTotal (horasTrabajadas, tarifaHora) {
    let horasExtrasNum = calcularHorasExtra(horasTrabajadas)
    let totalPagoHorasExtras = horasExtrasNum * (tarifaHora * 2)
    let base = calcularPagoBase(horasTrabajadas, tarifaHora)
    let totalAPagar = totalPagoHorasExtras + base
    return `$${base} (Base) + $${totalPagoHorasExtras} (${horasExtrasNum} extras al doble) = $${totalAPagar}`
}

console.log(calcularPagoTotal(15, 10000))