// Suma de vectores
function sumarVectores(a, b) {
    let resultado = []
    for (let i = 0; i < a.length; i++ ) {
        resultado.push(a[i] + b[i])
    }
    return resultado
}
console.log(sumarVectores([2,3], [3,5]))

// Recta de vectores
function rectaVectores(a, b) {
    let resultado = []

    for (let i = 0; i < a.length; i++) {
        resultado.push(a[i]-b[i])
    }
    return resultado
}
console.log(rectaVectores([100,25], [10,20]))

// Multiplicacion de vectores
function multiplicacionVectores(a,b) {
    let resultado = []

    for (let i = 0; i < a.length; i++) {
        resultado.push(a[i]*b[i])
    }
    return resultado
}
console.log(multiplicacionVectores([5,5],[5,5]))

// Escalar
function escalar(vector,n) {
    let resultado = []

    for (i=0; i < vector.length; i++) {
        resultado.push(vector[i] * n)
    }
    return resultado
}
console.log(escalar([5,3], 4))

// Magnitudes
function magnitudes(magnitud) {
    let sumaCuarados = 0
    for (i = 0 ; i < magnitud.length; i++) {
        sumaCuarados += magnitud[i] ** 2
    }
    return Math.sqrt(sumaCuarados)
}

console.log(magnitudes([3,4]))
console.log(magnitudes([300,400]))

// Vector unitario - Dirección sin magnitud
function unitario(valor) {
    let mag = magnitudes(valor)
    return escalar(valor, 1/mag)
}

let dirección = unitario([3, 4])
let movimiento = escalar(dirección, 10)
console.log(dirección, movimiento)

function productoPunto(a,b) {
    let resultado = 0;
    for (let i = 0; i < a.length; i++) {
        resultado += a[i] * b[i]
    }
    return resultado
}

console.log(productoPunto([2, 3], [4, 1]))    // 11 (similar dirección)
console.log(productoPunto([1, 0], [0, 1]))    // 0 (perpendiculares)
console.log(productoPunto([1, 0], [-1, 0]))


// Cada cliente es un vector de [edad, ingresos, deuda, meses_como_cliente]
let clienteAna = [35, 3000000, 500000, 24]
let clienteLuis = [28, 2500000, 800000, 12]
let clienteCarlos = [45, 4000000, 200000, 36]

// ¿Qué tan similares son Ana y Luis?
// El producto punto da una medida de similitud
console.log(productoPunto(clienteAna, clienteLuis))

// La distancia entre dos clientes
let diferencia = rectaVectores(clienteAna, clienteLuis)
console.log(magnitudes(diferencia))   // "distancia" entre perfiles
