let contador = 1

while (contador <= 5) {
    console.log(contador)
    contador = contador + 1
}

// Tabla de multiplicar
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i + " x " + j + " = " + (i * j))
    }
}

// Veririficar numero pares dentro de un Array

let numero = [4, 7, 2, 9, 1, 8, 3]
let contadorPares = 0

for (i=0; i <= numero.length; i++) {
    if (numero[i] % 2 == 0) {
        contadorPares++
    }
}
console.log(contadorPares)

// Sumar dentro de un array
let ventas = [2000, 3000, 5000, 20000, 2000]
let totalVentas = 0

for (i=0; i<ventas.length; i++) {
    totalVentas += ventas[i]
}
console.log(totalVentas)

// Uso de break, ayuda a optimizar recursos, pero que termina de recorrer el array cuando encuentra lo buscando
let usuarios = ["Ana", "Carlos", "Jostyn", "Maria", "Pedro"]

for (let i=0; i < usuarios.length; i++) {
    if (usuarios[i] === "Jostyn") {
        console.log("Encontrado en posición " + i)
        break //No necesito buscar mas
    }
}

// Coninue - Salta a la siguiente iteracion sin ejecutar el resto del bloque
let transaccion = [500, -200, 1000, -50, 300]
let totalIngresos = 0

for (let i = 0; i <= transaccion.length; i++) {
    if (transaccion[i] < 0) {
        continue //Ignora los negativos
    }
    totalIngresos += transaccion[i]
}

console.log("Total ingresos $" + totalIngresos)

// Modificar el array mientras lo recorres

let numeros = [1,2,3,4,5]
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numeros.splice(i, 1)
    }
    console.log(numeros)
}

let numeross = []
for (let i=1; i<= 100; i++) {
    numeross.push(i)
}

for (let i=0; i <= numeross.length; i++) {
    if (numeross[i] % 3 === 0) {
        if (numeross[i] % 5 === 0) {
         console.log(numeross[i] + " Es FizzBuzz")
        }
    } else if (numeross[i] % 5 === 0) {
        console.log(numeross[i] + " Es Buzz")
    } else {
         console.log(numeross[i] + " Es Fizz")
    }
}

let ventass = [1500, 50, 2300, 80, 900, 30, 4200, 1100, 60]
let totalVentass = 0
let promedio = 0 
let numPromedio = 0
for(let i=0; i <ventass.length; i++) {
    if (ventass[i] <100) {
        continue
    }
    numPromedio++
    totalVentass += ventass[i]
}
promedio = totalVentass / numPromedio
console.log(promedio)

// Ejercicio 1
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Ejercicio 2
for (let i = 20; i >= 0; i--) {
    if (i !== 0) {
        console.log(i)
    } else {
        console.log("¡Despegue!")
    }
}

// Ejercicio 3
let temperaturas = [28, 35, 22, 31, 40, 19, 33, 27] 
for (let i=0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 30) {
        console.log(temperaturas[i])
    }
}

// Ejercicio 4 
let edades = [15, 22, 8, 34, 17, 19, 12, 45, 16, 28]
let mayorEdad = 0
let menorEdad = 0
for (let i = 0; i<edades.length; i++) {
    if (edades[i] >= 18) {
        mayorEdad++
    } else {
        menorEdad++
    }
}
console.log("Hay " + mayorEdad +  " mayores de edad y " + menorEdad + " menores de edad")

// Ejercicio 6
let palabras = ["sol", "casa", "programación", "luz", "extraordinario"]

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 6) {
        console.log(palabras[i] + " tiene mas de 6 letras")
        break
    }
}

// Ejercicio 6
let numeroo = 7
let factorial = numeroo

for (let i=1; i < numeroo; i++) {
    factorial = factorial * i
}
console.log(factorial)

// Ejercicio 7
let saldoInicial = 10000
let transacciones = [2000, -3500, -4000, 1500, -7000, 500, -200]

for(let i = 0; i < transacciones.length; i++) {
    if (saldoInicial > 0) {
        saldoInicial += transacciones[i]
        if (saldoInicial <= 0) {
            console.log("Saldo insuficiente")
            break
        }
        console.log("Saldo: " + saldoInicial)
    }
}

// Ejercicio 8
let asteriscos = ""
for (let i = 0; i < 5; i++) {
    asteriscos = asteriscos + "*"
    console.log(asteriscos)
}

// Ejercicio 9
let numeros3 = [3, 5, 2, 7, 8, 1]
let resultado = 0

for (let i = 0; i < numeros3.length; i++) {
    for (let y = 0; y < numeros3.length; y++) {
        if ((numeros3[i] + numeros3[y]) == 10 ) {
            resultado = numeros3[i] + numeros3[y] 
            console.log(numeros3[i] + " + " + numeros3[y] + " = " + `${numeros3[i]+numeros3[y]}`)
            break
        }
    }
    if (resultado == 10) {
        break
    }
}
