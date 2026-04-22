const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Para acceder a un elemento, se debe especifcar en donde esta en la matriz
console.log(matriz[1][1])

// Se puede acceder medante un bucle
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}

// array de tres dimensiones
const cubo = 
[
    [
        [1,2],
        [3,4]
    ]
    [
        [5,6],
        [7,8]
    ]
]