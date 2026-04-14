function crearIdentidad(n) {
    let matriz = []
    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(i === j ? 1 : 0)
        }
        matriz.push(fila)
    }
    return matriz
}

console.log(crearIdentidad(3))

// Matriz transpuesta

function transponer(matriz) {
    let fila = matriz.length;
    let columna = matriz[0].length
    let resultado = []

    for (let j = 0; j < columna; j++) {
        let nuevaFila = [];
        for (let i = 0; i < fila; i++) {
            nuevaFila.push(matriz[i][j])
        }
        resultado.push(nuevaFila) 
    }
    return resultado
}

console.log(transponer([[1, 2, 3], [4, 5, 6]]))

// ================= OPERACIONES CON MATRICES ===========================
// Suma de matrices - posicion a posicion
// Las matrices deen tener el mismo tamaño. Sumas cada elemento con su correspondiente 
// [1 2]   [5 6]   [1+5 2+6]   [6 8]
// [3 4] + [7 8] = [3+7 4+8] = [10 12]

function sumarMatrices(a,b) {
    let resultado = [];
    for (let i = 0; i < a.length; i++) {
        let fila = []
        for (let j = 0; j < b.length; j++) {
            fila.push(a[i][j] + b[i][j])
        }
        resultado.push(fila)
    }
    return resultado
}

let A = [[1, 2], [3, 4]]
let B = [[5, 6], [7, 8]]

console.log(sumarMatrices(A, B))   // [[6, 8], [10, 12]]

// 2. Multiplicación por escalar - Cada elemento por un numero
// 3 x [1 2] = [3 6]
//     [3 4]   [9 12]

function escalarMatriz(matriz, n) {
    let resultado = [];
    let columna = matriz[0].length
    for (let i = 0; i < matriz.length; i++) {
        let fila = []
        for (let j = 0; j < columna; j++) {
            fila.push(n * matriz[i][j])
        }
        resultado.push(fila)
    }
    return resultado
}
console.log(escalarMatriz([[1, 2], [3, 4]], 3))

// Multiplicacion de matrices - La mas compleja
// A (2×3):          B (3×2):
// [ 1  2  3 ]       [ 7   8 ]
// [ 4  5  6 ]       [ 9  10 ]
//                   [ 11  12 ]

// Resultado (2×2):
// Posición [0][0] = fila 0 de A · columna 0 de B
//                 = [1,2,3] · [7,9,11]
//                 = 1×7 + 2×9 + 3×11
//                 = 7 + 18 + 33
//                 = 58

// Posición [0][1] = fila 0 de A · columna 1 de B
//                 = [1,2,3] · [8,10,12]
//                 = 1×8 + 2×10 + 3×12
//                 = 8 + 20 + 36
//                 = 64

// Posición [1][0] = fila 1 de A · columna 0 de B
//                 = [4,5,6] · [7,9,11]
//                 = 4×7 + 5×9 + 6×11
//                 = 28 + 45 + 66
//                 = 139

// Posición [1][1] = fila 1 de A · columna 1 de B
//                 = [4,5,6] · [8,10,12]
//                 = 4×8 + 5×10 + 6×12
//                 = 32 + 50 + 72
//                 = 154

// Resultado:
// [ 58   64 ]
// [ 139  154 ]

function multiplicarMatrices(c,d) {
    let resultado = []
    for (let i = 0; i < c.length; i++) {
        let fila = []
        let resultMult = 0
        for (let j = 0; j < d[0].length; j++) {
            for (let k = 0; k< c[0].length; k++) {
                resultMult += (c[i][j] * d[j][i])
            }
            fila.push(resultMult)
        }
        resultado.push(fila)
    }
    return resultado
}

let C = [[1, 2, 3], [4, 5, 6]]
let D = [[7, 8], [9, 10], [11, 12]]
console.log(multiplicarMatrices(C, D))