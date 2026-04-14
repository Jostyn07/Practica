function cuentaRegresiva(n) {
    // Caso base: cuando llega a 0, se detiene
    if (n === 0) {
        console.log("¡Despegue!")
        return
    }

    // Caso recursivo: imprime y se llama con n-1
    console.log(n)
    cuentaRegresiva(n - 1)
}

cuentaRegresiva(5)

function factorial(n){
    if (n <= 1) return 1
    console.log(n)
    return n * factorial(n-1)
}
console.log(factorial(5))

function fibonacci(n) {
    if (n === 0) return 0 //Caso base 1
    if (n === 1) return 1 //Caso base 2
    console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2) //Caso recursivo
}

console.log(fibonacci(7))

function sumarArray(array) {
    //caso base: array vacio
    if (array.length === 0) return 0

    console.log(array)
    // Caso recursivo: primer elemento + suma del resto
    return array[0] + sumarArray(array.slice(1))
}

console.log(sumarArray([3, 5, 2, 8]))