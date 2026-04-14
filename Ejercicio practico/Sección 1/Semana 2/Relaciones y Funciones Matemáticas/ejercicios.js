let empleados = [
    { id: 1, nombre: "Ana", cargo: "Agente", jefe: 3 },
    { id: 2, nombre: "Luis", cargo: "Agente", jefe: 3 },
    { id: 3, nombre: "Carlos", cargo: "Supervisor", jefe: 5 },
    { id: 4, nombre: "María", cargo: "Agente", jefe: 3 },
    { id: 5, nombre: "Pedro", cargo: "Director", jefe: null }
]

// A) Agrupa los empleados por cargo (clases de equivalencia)
    let cargo = {}

    empleados.forEach(e => {
        if(!cargo[e.cargo]){
            cargo[e.cargo] = []
        }
        cargo[e.cargo].push(e.nombre)
    })
    console.log(cargo)
// B) Encuentra todos los empleados que reportan a Carlos (id: 3)
    let reporta = {}
    empleados.forEach(e=> {
        if (!reporta[e.jefe]) {
            reporta[e.jefe] = []
        }
        if (reporta[e.jefe]) {
            reporta[e.jefe].push(e.nombre)
        }
    })
    console.log(reporta)
// C) ¿La relación "reporta a" es transitiva? Si Ana reporta a Carlos
    
//    y Carlos reporta a Pedro, ¿Ana reporta a Pedro?
//    Escribe una función que verifique esto.