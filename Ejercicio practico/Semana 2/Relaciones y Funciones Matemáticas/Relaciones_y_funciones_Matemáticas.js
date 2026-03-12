let clientes = [
    { nombre: "Ana", compania: "Blue Cross" },
    { nombre: "Luis", compania: "Aetna" },
    { nombre: "María", compania: "Blue Cross" },
    { nombre: "Carlos", compania: "Cigna" },
    { nombre: "Pedro", compania: "Aetna" }
]

// Agrupar por compañía = clases de equivalencia
let grupos = {}
clientes.forEach(c => {
    if (!grupos[c.compania]) {
        grupos[c.compania] = []
    }
    grupos[c.compania].push(c.nombre)
})

console.log(grupos)