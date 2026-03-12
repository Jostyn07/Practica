// ### Ejercicio 6 — Integración completa

// Un sistema de reclamos necesita validar si un reclamo es procesable. Las reglas son:

// 1. La póliza debe estar activa
// 2. El cliente debe tener documentación completa
// 3. Si la póliza es Gold, se aprueba automáticamente
// 4. Si la póliza es Silver o Bronze, debe pasar revisión manual
// 5. Ningún reclamo de póliza inactiva puede procesarse

let polizas = [
    { id: "POL-001", cliente: "Ana", tipo: "Gold", prima: 350, activa: true, agente: "Pedro" },
    { id: "POL-002", cliente: "Luis", tipo: "Silver", prima: 200, activa: true, agente: "Pedro" },
    { id: "POL-003", cliente: "María", tipo: "Gold", prima: 350, activa: false, agente: "Sofía" },
    { id: "POL-004", cliente: "Carlos", tipo: "Bronze", prima: 100, activa: true, agente: "Sofía" },
    { id: "POL-005", cliente: "Rosa", tipo: "Gold", prima: 350, activa: true, agente: "Diego" },
    { id: "POL-006", cliente: "Jorge", tipo: "Silver", prima: 200, activa: false, agente: "Diego" }
]

let reclamos = [
    { cliente: "Ana", poliza: "POL-001", documentos: true, monto: 5000 },
    { cliente: "Luis", poliza: "POL-002", documentos: true, monto: 3000 },
    { cliente: "María", poliza: "POL-003", documentos: true, monto: 4000 },
    { cliente: "Carlos", poliza: "POL-004", documentos: false, monto: 1000 },
    { cliente: "Rosa", poliza: "POL-005", documentos: true, monto: 8000 }
]

// A) Escribe la expresión lógica formal para cada regla
//    usando los símbolos que aprendiste (∀, ∃, →, ∧, ∨, ¬)
    // 1) activa ->
    // 2) docComppleta ->
    // 3) gold -> 
    // 4) Silver v Bronze ->
    // 5) ¬activa -> Rechazada

// B) Escribe una función procesarReclamo(reclamo, polizas)
//    que reciba un reclamo y el array de pólizas, y retorne:
//    - "Aprobado automáticamente" (Gold + activa + documentos)
//    - "Enviado a revisión" (Silver/Bronze + activa + documentos)
//    - "Rechazado: póliza inactiva"
//    - "Rechazado: documentación incompleta"

function procesarReclamo(reclamo, polizas) {
    let poliza = polizas.find(p => p.id === reclamo.poliza)

    // Guard clause 1: póliza inactiva
    if (!poliza.activa) {
        return "Rechazado: póliza inactiva"
    }

    // Guard clause 2: sin documentos
    if (!reclamo.documentos) {
        return "Rechazado: documentación incompleta"
    }

    // Gold = aprobado automáticamente
    if (poliza.tipo === "Gold") {
        return "Aprobado automáticamente"
    }

    // Silver o Bronze = revisión
    return "Enviado a revisión"
}
// C) Aplica la función a todos los reclamos y muestra los resultados
reclamos.forEach(r => {
    let resultado = procesarReclamo(r, polizas)
    console.log(r.cliente + ": " + resultado)
})
// D) Usando cuantificadores, verifica:
//    - ¿Todos los reclamos tienen documentos completos?
//    - ¿Algún reclamo fue rechazado?
//    - ¿Ningún reclamo de póliza Gold fue rechazado?

// Primero procesamos todos los resultados
let resultados = reclamos.map(r => ({
    cliente: r.cliente,
    resultado: procesarReclamo(r, polizas)
}))

// ¿Todos tienen documentos completos?
let todosDocumentos = reclamos.every(r => r.documentos)
console.log(todosDocumentos)   // false (Carlos no tiene)

// ¿Algún reclamo fue rechazado?
let algunRechazado = resultados.some(r => r.resultado.includes("Rechazado"))
console.log(algunRechazado)    // true (María y Carlos)

// ¿Ningún reclamo Gold fue rechazado?
let ningunGoldRechazado = resultados.every(r => {
    let poliza = polizas.find(p => p.id === reclamos.find(rec => rec.cliente === r.cliente).poliza)
    if (poliza.tipo === "Gold") {
        return !r.resultado.includes("Rechazado")
    }
    return true
})
console.log(ningunGoldRechazado)   // false (María es Gold y fue rechazada)