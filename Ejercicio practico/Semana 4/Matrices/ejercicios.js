// A) Suma:
//    [ 2  4 ]   [ 1  3 ]   [3 7]
//    [ 6  8 ] + [ 5  7 ] = [11 15]

// B) Escalar:
//    2 × [ 3  1 ]   [6 2]
//        [ 0  5 ] = [0 10]

// C) Multiplicación:
//    [ 1  2 ]   [ 5  6 ]   [33 45]
//    [ 3  4 ] × [ 7  8 ] = [77 105]


// A) Función que sume dos matrices
    function sumarMatrices(a,b) {
        let resultado = []
        for (let i = 0; i < a.length; i++) {
            let fila = []
            for (let j = 0; j < b[0].length; j++) {
                fila.push(a[i][j] + b[i][j])
            }
            resultado.push(fila)
        }
        return resultado
    }
// B) Función que multiplique una matriz por un escalar
    function matrizEscalar(matriz, n) {
        let resultado = []
        for (let i = 0; i < matriz.length; i++) {
            let fila = []
            for (let j = 0; j < matriz[0].length; j++) {
                fila.push(n * matriz[i][j])
            }
            resultado.push(fila)
        }
        return resultado
    }
// C) Función que calcule el total por fila y por columna
    function filaColumna(a) {
        let totalFila = []
        let totalColumna = []
        let sumaFila = 0
        let sumaColumna = 0

        for (let i = 0; i < a.length; i++) {
            let fila = []
            for (let j = 0; j < a[0].length; j++) {
                sumaFila += a[i][j]
                sumaColumna += a[j][i]
            }
            totalFila.push(sumaFila);
            sumaFila = 0
            totalColumna.push(sumaColumna);
            sumaColumna = 0
        }
        return `Total fila: ${totalFila} \n\n Total columna: ${totalColumna}`
    }
// Prueba con estas ventas:
let ventas = [
    [10, 15, 12],   // Pedro: Ene, Feb, Mar
    [8,  12, 14],   // Sofía
    [15, 10, 9]     // Diego
]
console.log(sumarMatrices(ventas,ventas))
console.log(matrizEscalar(ventas, 3))
console.log(filaColumna(ventas))

// ¿Quién vendió más en total?
// Pedro
// ¿Cuál fue el mejor mes?
// Febrero