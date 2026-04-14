let numeros = [1, 2, 3, 4, 5]

// forEach
numeros.forEach(n => console.log(n*2)) 
numeros.forEach(n => n*2) // No retorna nada

// map -  Transforma, retorna un array nuevo
let dobles = numeros.map( n=> n * 2)
console.log(dobles)

// filter - Filtra si cumplen
let pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

// find - retorna el primero que cumple
let primeroMayor3 = numeros.find(n => n > 3)

// some - ¿Alguno cumple?
let hayMayor10 = numeros.some( n => n > 10)

// every - ¿Todos cumplen?
let todosMayorCero = numeros.every(n => n > 0)

// reduce - acumula en un valor
let suma = numeros.reduce((total,n) => total + n, 0)
// 15 <- 1 + 2 + 3 + 4 + 5

let polizas = [
    { id: 1, cliente: "Ana",    tipo: "Gold",   prima: 350, activa: true  },
    { id: 2, cliente: "Luis",   tipo: "Silver", prima: 200, activa: false },
    { id: 3, cliente: "María",  tipo: "Gold",   prima: 350, activa: true  },
    { id: 4, cliente: "Carlos", tipo: "Bronze", prima: 100, activa: false },
    { id: 5, cliente: "Rosa",   tipo: "Silver", prima: 200, activa: true  }
]

// .forEach() - Imprime el cliente y tipo de cada poliza
polizas.forEach(n => console.log(
    `Nombre: ${n.cliente} Tipo: ${n.tipo}`
))

polizas.forEach(n => console.log(n.cliente + " - " + n.tipo)
)

let id = polizas.map(n => n.id)
console.log(id)
polizas.map(n => n.id) // No crea un array, solo lo recorre. ¿Pero como afecta?

// .filter() - Retorna solo las polizas activas
let polizasActivas = polizas.filter(n => n.activa === true)
console.log(polizasActivas)

// .find() - Encuentra la poliza con id 3
let polizaId3 = polizas.find(n => n.id === 3)
console.log(polizaId3)

// .some() - ¿Hay alguna poliza Bronze?
let polizaBronze = polizas.some(n => n.tipo === "Bronze")
console.log(polizaBronze)

// .every() - ¿Todas las polizas tienen una prima mayor a 0?
let primaMayor0 = polizas.every(n => n.prima > 0)
console.log(primaMayor0)

// .reduce() - suma total de primas de polizas activas
let totalPrimasActivas = polizasActivas.reduce((total, n) => total + n.prima, 0)
console.log(totalPrimasActivas)

// Encadenado - obtén los clientes de las polizas Gold Activas
let goldActivas = polizasActivas.filter(n => n.tipo === "Gold").map(n => n.cliente)
console.log(goldActivas)