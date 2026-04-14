let polizas = [
    { id: "POL-001", cliente: "Ana", tipo: "Gold", prima: 350, activa: true, agente: "Pedro" },
    { id: "POL-002", cliente: "Luis", tipo: "Silver", prima: 200, activa: true, agente: "Pedro" },
    { id: "POL-003", cliente: "María", tipo: "Gold", prima: 350, activa: false, agente: "Sofía" },
    { id: "POL-004", cliente: "Carlos", tipo: "Bronze", prima: 100, activa: true, agente: "Sofía" },
    { id: "POL-005", cliente: "Rosa", tipo: "Gold", prima: 350, activa: true, agente: "Diego" },
    { id: "POL-006", cliente: "Jorge", tipo: "Silver", prima: 200, activa: false, agente: "Diego" }
]


// Traduce cada afirmación a símbolos lógicos Y a código JavaScript:
// A) "Todas las pólizas activas tienen prima mayor a 0"
    let primaMayorA0 = polizas.every(p => {
        if (p.activa) {
            if (p.prima > 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    })
    console.log(primaMayorA0)
// B) "Existe alguna póliza Gold que no está activa"
    let goldInactiva = polizas.some(p => { 
        if (p.tipo === "Gold" ) {
            if (!(p.activa)) {
                return true
            } else { 
                return false 
            }
        }
    })
    console.log(goldInactiva)
// C) "Ninguna póliza Bronze tiene prima mayor a 200"
    let primaMayorA200 = polizas.every(p => !(p.prima > 200))
    console.log(primaMayorA200)
// D) "Todo agente tiene al menos una póliza activa"
    let agentes = [...new Set(polizas.map(p => p.agente))]

    let agentePoliza = agentes.every(agente => polizas.some(p => p.agente === agente && p.activa))
    console.log(agentePoliza)
// E) "No todas las pólizas de Pedro están activas"

let agentePedro = agentes.every(agente => polizas.some(p => p.agente === "Pedro" && !p.activa))
console.log(agentePedro)