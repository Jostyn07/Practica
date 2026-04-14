let polizas = [
    { id: "POL-001", cliente: "Ana", tipo: "Gold", prima: 350, activa: true, agente: "Pedro" },
    { id: "POL-002", cliente: "Luis", tipo: "Silver", prima: 200, activa: true, agente: "Pedro" },
    { id: "POL-003", cliente: "María", tipo: "Gold", prima: 350, activa: false, agente: "Sofía" },
    { id: "POL-004", cliente: "Carlos", tipo: "Bronze", prima: 100, activa: true, agente: "Sofía" },
    { id: "POL-005", cliente: "Rosa", tipo: "Gold", prima: 350, activa: true, agente: "Diego" },
    { id: "POL-006", cliente: "Jorge", tipo: "Silver", prima: 200, activa: false, agente: "Diego" }
]
// A) Crea el conjunto de pólizas Gold
    let polizasGold = {}

    polizas.forEach(e => {
        if (!polizasGold["Gold"]) {
            polizasGold["Gold"] = []
        }
        if (e.tipo === "Gold") {
            polizasGold["Gold"].push(e.cliente)
        }
    })
    console.log(polizasGold)
// B) Crea el conjunto de pólizas activas
    let polizasActivas = {}
    polizas.forEach(e => {
        if (!polizasActivas[true]) {
            polizasActivas[true] = []
        }
        if (e.activa === true) {
            polizasActivas[true].push(e.cliente)

        }
    })
    console.log(polizasActivas)
// C) Intersección: pólizas Gold Y activas
    let interseccion = {}
    interseccion["goldActivas"] = []

    polizas.forEach(e => {
        if (e.activa === true) {
            if (e.tipo === "Gold") {
                interseccion["goldActivas"].push(e.cliente)
            }
        }
    })
    console.log(interseccion)
// D) Diferencia: pólizas activas que NO son Gold
    let diferencia = {}
    polizas.forEach(e => {
        if (!diferencia["NoEsGold"]) {
            diferencia["NoEsGold"] = []
        }
        if (!(e.tipo === "Gold")) {
            diferencia["NoEsGold"].push(e.cliente)
        }
    })
    console.log(diferencia)
// E) Agrupa las pólizas por agente (clases de equivalencia)
    let agente = {}
    polizas.forEach(a => {
        if (!agente[a.agente]) {
            agente[a.agente] = []
        }
        agente[a.agente].push (a.cliente)
    })
    console.log(agente)
// F) ¿El conjunto de pólizas Gold es subconjunto del conjunto de pólizas activas?
    let subConjunto = polizas.every(s => s.tipo.includes(s))
    console.log(subConjunto)
