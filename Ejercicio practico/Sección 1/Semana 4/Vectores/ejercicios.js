// Ejercicio 2
// A) Escribe la función sumarVectores
    function sumarVectores(a,b) {
        let resultado = []
        for (let i = 0; i < a.length; i++) {
            resultado.push(a[i] + b[i])
        }
        return resultado
    }

// B) Escribe la función magnitud
function magnitud(a) {
    let resultado = 0

    for (let i = 0; i < a.length; i++) {
        resultado += a[i]**2
    }
    return Math.sqrt(resultado)
}
// C) Escribe la función productoPunto
    function productoPunto(a,b) {
        let resultado = 0

        for (let i = 0; i < a.length; i++) {
            resultado += a[i] * b[i]
        }
        return resultado
    }
// Prueba con:
console.log(sumarVectores([10, 20], [5, -10]))  // [15, 10]
console.log(magnitud([3, 4]))                    // 5
console.log(productoPunto([1, 2], [3, 4]))       // 11

// Un agente tiene estos datos de rendimiento mensual:
// [pólizas_vendidas, clientes_atendidos, reclamos_resueltos]

let pedro = [15, 45, 8]
let sofia = [12, 50, 12]
let diego = [20, 35, 5]

// A) ¿Cuál es la magnitud del vector de cada agente?
//    (una medida general de rendimiento)
    function medida(operador) {
        let resultado = 0

        for (let i = 0; i < operador.length; i++) {
            resultado += operador[i] ** 2
        }
        return Math.sqrt(resultado)
    }
    console.log(medida(pedro))
    console.log(medida(sofia))
    console.log(medida(diego))

// B) ¿Qué tan similar es el perfil de Pedro al de Sofía?
//    (producto punto)
        function perfil(a,b) {
            let resultado = 0
            for (let i = 0; i < a.length; i++) {
                resultado += a[i] * b[i]
            }
            return resultado
        }
        console.log(perfil(pedro, sofia))
// C) El promedio del equipo es la suma de los 3 vectores dividida entre 3
//    Calcula el vector promedio
function promedio(a,b,d) {
    let resultado = []

    for (let i = 0; i < a.length; i++) {
        resultado.push((a[i] + b[i] + d[i])/3) 
    }
    return resultado
}
let cod = promedio(diego, sofia, pedro)
console.log(cod)