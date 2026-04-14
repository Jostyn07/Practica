const { act } = require("react")

let grafo = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D"],
    "D": ["B", "C", "F"],
    "E": ["B"],
    "F": ["D"]
}

function bfs(grafo, inicio) {
    let cola = [inicio]              // 1. Empezamos con el nodo inicial en la cola
    let visitados = new Set()        // 2. Registro de nodos visitados
    visitados.add(inicio)            // 3. Marcamos el inicio como visitado
    let orden = []                   // 4. Guardamos el orden de visita

    while (cola.length > 0) {       // 5. Mientras haya nodos por procesar
        let nodo = cola.shift()      // 6. Sacamos el primero de la cola
        orden.push(nodo)             // 7. Lo agregamos al resultado

        grafo[nodo].forEach(vecino => {       // 8. Para cada vecino
            if (!visitados.has(vecino)) {      // 9. Si no lo hemos visitado
                visitados.add(vecino)          // 10. Marcarlo como visitado
                cola.push(vecino)              // 11. Meterlo a la cola
            }
        })
    }

    return orden
}
console.log(bfs(grafo, "A"))   // ["A", "B", "C", "D", "E", "F"]
// 
// ```
// 
// ### Rastreemos la ejecución completa
// Inicio: cola = ["A"], visitados = {A}
// 
// Iteración 1:
//   nodo = "A" (sacamos de cola)
//   orden = ["A"]
//   vecinos de A: B, C
    // B no visitado → visitados = {A, B}, cola = ["B"]
    // C no visitado → visitados = {A, B, C}, cola = ["B", "C"]
// 
// Iteración 2:
//   nodo = "B" (sacamos de cola)
//   orden = ["A", "B"]
//   vecinos de B: A, D, E
    // A ya visitado → skip
    // D no visitado → visitados = {A, B, C, D}, cola = ["C", "D"]
    // E no visitado → visitados = {A, B, C, D, E}, cola = ["C", "D", "E"]
// 
// Iteración 3:
//   nodo = "C" (sacamos de cola)
//   orden = ["A", "B", "C"]
//   vecinos de C: A, D
    // A ya visitado → skip
    // D ya visitado → skip
//   cola = ["D", "E"]
// 
// Iteración 4:
//   nodo = "D" (sacamos de cola)
//   orden = ["A", "B", "C", "D"]
//   vecinos de D: B, C, F
    // B ya visitado → skip
    // C ya visitado → skip
    // F no visitado → visitados = {A, B, C, D, E, F}, cola = ["E", "F"]
// 
// Iteración 5:
//   nodo = "E" (sacamos de cola)
//   orden = ["A", "B", "C", "D", "E"]
//   vecinos de E: B
    // B ya visitado → skip
//   cola = ["F"]
// 
// Iteración 6:
//   nodo = "F" (sacamos de cola)
//   orden = ["A", "B", "C", "D", "E", "F"]
//   vecinos de F: D
    // D ya visitado → skip
//   cola = []
// 
// Cola vacía → terminamos
// Resultado: ["A", "B", "C", "D", "E", "F"]
// ```
// 

// ============================== CAMINO CORTO ============================
function caminoCorto(grafo, inicio, destino) {
    let cola = [inicio]
    let visitados = new Set()
    visitados.add(inicio)
    let padre = {}
    padre[inicio] = null

    while (cola.length > 0) {
        let nodo = cola.shift()

        if (nodo === destino) {
            let camino = []
            let actual = destino
            while (actual !== null) {
                camino.unshif(actual)
                actual = padre[actual]
            }
            return camino
        }

        grafo[nodo].forEach(vecino => {
            if (!visitados.has(vecino)) {{
                visitados.add(vecino)
                padre[vecino] = nodo
                cola.push(vecino)
            }}
        })
    }
    return null
}
console.log(caminoCorto(grafo, "A", "F"))
