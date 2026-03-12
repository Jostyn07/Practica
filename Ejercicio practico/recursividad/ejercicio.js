// A) sumaHasta(n) → Retorna la suma de todos los números desde 1 hasta n. 
// Ejemplo: sumaHasta(5) → 15 (1+2+3+4+5).

function sumaHasta(n) {
    if ( n <= 1) return 1
    return n + sumaHasta(n-1)
}
console.log(sumaHasta(10))

// B) invertirString(texto) → Retorna el texto al revés. 
// Ejemplo: invertirString("hola") → "aloh". Tip: texto[0] da el primer carácter, texto.slice(1) 
// da el resto.

function invertirString(texto) {
    if (texto.length === 0) return ""
    
    return invertirString(texto.slice(1)) + texto[0] 
}
console.log(invertirString("Hola"))

// C) potenciaRecursiva(base, exponente) → Calcula la potencia sin bucles. 
// Ejemplo: potenciaRecursiva(2, 4) → 16. Piensa: 2⁴ = 2 × 2³.

function potenciaRecursiva(base, exponente) {
    if (exponente === 0) return 1
    return base * potenciaRecursiva(base, exponente - 1)
}
console.log(potenciaRecursiva(2,4))

// D) contarDigitos(numero) → Cuenta cuántos dígitos tiene un número. 
// Ejemplo: contarDigitos(4523) → 4. Tip: Math.floor(numero / 10) elimina el último dígito.

function contarDigitos(numero) {
    if (numero === 0) return 0
    
    return 1 + contarDigitos(Math.floor(numero/10))
}
console.log(contarDigitos(12345))

// 1) repetirSaludo(n) → Imprime "Hola" n veces. Ejemplo: repetirSaludo(3) imprime "Hola" tres veces.
function repetirSaludo(n) {
    if (n === 0) return ""
    return "Hola" + repetirSaludo(n - 1)
} 
console.log(repetirSaludo(3))

// 2) cuentaRegresiva(n) → Imprime los números de n hasta 1 y al final "¡Boom!". Ejemplo: cuentaRegresiva(3) → 3, 2, 1, ¡Boom!
function cuentaRegresiva(n) {
    if (n === 0) return "¡Boom!"
    return n + "," + cuentaRegresiva( n - 1)
}
console.log(cuentaRegresiva(5))

// multiplicar(a, b) → Multiplica dos números sin usar *. Solo sumas. Piensa: 4 × 3 = 4 + 4 + 4 = 4 + (4 × 2). Ejemplo: multiplicar(4, 3) → 12

function multiplicar(a, b) {
    if (b <= 1) return a
    
    return a + multiplicar(a, b - 1)
}
console.log(multiplicar(3,7))

// 4) sumarArray(array) → Retorna la suma de todos los elementos. Sin bucles. Tip: array[0] es el primero, 
// array.slice(1) es el resto. Ejemplo: sumarArray([3, 5, 2]) → 10

function sumarArray(array) {
    if (array.length === 0 ) return 0
    
    return array[0] + sumarArray(array.slice(1))
}
console.log(sumarArray([3,4,5,6,7]))

// 5) largo(texto) → Retorna la longitud de un string sin usar .length. 
// Tip: si le quitas un carácter al texto y cuentas 1... Ejemplo: largo("hola") → 4

function largo(texto) {
    if (texto.length === 0) return ""

    return 1 + Math.floor(largo(texto.slice(1)))
}
console.log(largo("Adiosito"))

// potencia(base, exponente) → Calcula la potencia sin * ni **. Puedes usar tu función multiplicar del ejercicio 3. 
// Ejemplo: potencia(2, 4) → 16
function potencia(base, exponente) {
    if (exponente === 0) return 1
    if (exponente === 1) return base
    function multiplicar(a, b) {
        if (b <= 1) return a
        
        return a + multiplicar(a, b - 1)
    }
    return multiplicar(base,  potencia(base, exponente - 1))
}
console.log(potencia(2,5))

// 7) incluye(array, valor) → Retorna true si el valor está en el array, false si no. Sin bucles ni .includes(). 
// Ejemplo: incluye([5, 3, 8, 1], 8) → true