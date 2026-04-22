const numeros = [1,2,3]
const [primeNumro, segundoNumero, tecerNumero, cuartoNumero] = numeros
console.log(primeNumro)
console.log(segundoNumero)
console.log(tecerNumero)
console.log(cuartoNumero)

// Sin destructuración
let a = 10
let b = 5

let aux = a;
a = b
b = aux;

// con destruturación
let a = 10;
let b = 5;

[a, b] = [b, a]

