let grafo = {
    "1": ["2", "3"],
    "2": ["1", "4", "5"],
    "3": ["1", "6"],
    "4": ["2"],
    "5": ["2", "6"],
    "6": ["3", "5"]
}

function visita(grafo, inicio) {
    let fila = [inicio]
    let visitado = new Set()
    visitado.add(inicio)
    let orden = []


    while (fila.length > 0) {
        let persona = fila.shift()
        orden.push(persona)

        grafo[persona].forEach(a => { 
            if (!visitado.has(a)) {
                visitado.add(a)
                fila.push(a)
            }
        });
    }
    return orden
}

console.log(visita(grafo, "1"))

let redSocial = {
    "Pedro":  ["Ana", "Luis", "Carlos"],
    "Ana":    ["Pedro", "María"],
    "Luis":   ["Pedro", "Rosa"],
    "Carlos": ["Pedro"],
    "María":  ["Ana", "Jorge"],
    "Rosa":   ["Luis"],
    "Jorge":  ["María"]
}

function visita2(grafo, inicio, destino) {
    let fila = [inicio]
    let visitados = new Set()
    visitados.add(inicio)
    let orden = []
    let padre = {}
    padre[inicio] = null

    while (fila.length > 0) {
        let persona = fila.shift()
        orden.push(persona)
        console.log("Buscamos los amigos de que no hayan sido visitados " + persona)

        if (persona === destino) {
            let camino = []                 // Se crea un array para almacenar el camino
            let actual = destino            // Se crea varibable con el valor del destino, para que tome desde ahí y vaya hacia atras

            while (actual !== null) {       // Cuando actual sea diferente a null 
                camino.unshift(actual)      // Se sube de primero el valor de "actual"
                actual = padre[actual]      // Se da un nuevo valor a actual que sera el del padre
            }
            return camino
        }

        grafo[persona].forEach(a => {
            if (!visitados.has(a)) {
                visitados.add(a)
                padre[a] = persona
                fila.push(a)
                console.log("El padre de "+ a + " Es " + padre[a])
            }
        })
    }
    return null
}
console.log(visita2(redSocial,"Pedro", "Jorge"))
// A) Usa BFS para encontrar el camino más corto entre Pedro y Jorge

// B) ¿A cuántos pasos está Jorge de Pedro?
// C) ¿Quiénes están a exactamente 2 pasos de Pedro?