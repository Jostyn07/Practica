let grafo = {
    "Pedro":  ["Ana", "Carlos"],
    "Ana":    ["Pedro", "María", "Luis"],
    "Carlos": ["Pedro", "Rosa"],
    "María":  ["Ana"],
    "Luis":   ["Ana", "Jorge"],
    "Rosa":   ["Carlos"],
    "Jorge":  ["Luis"]
}

function visitados(grafo, inicio) {
    let fila = [inicio];
    let visitados = new Set()
    visitados.add(inicio)
    let orden = []

    while (fila.length > 0 ) {
        let persona = fila.shift()
        orden.push(persona)

        grafo[persona].forEach(a => {
            if (!visitados.has(a)) {
                visitados.add(a)
                fila.push(a)
            }
        });
    }
    return orden
}

console.log(visitados(grafo, "Pedro"))

function caminoCorto(grafo, inicio, destino) {
    let fila = [inicio]
    let visitados = new Set()
    visitados.add(inicio)
    let padre = {}
    padre[inicio] = null
    
    while(fila.length > 0) {
        let persona = fila.shift()

        if (persona === destino) {
            let camino = []
            let actual = destino

            while (actual !== null) {
                camino.unshift(actual)
                actual = padre[actual]
            }
            return camino
        }
        grafo[persona].forEach(a => {
            if(!visitados.has(a)) {
                visitados.add(a)
                fila.push(a)
                padre[a] = persona
            }
        })
    }
    return null
}

console.log(caminoCorto(grafo, "Pedro", "Jorge"))