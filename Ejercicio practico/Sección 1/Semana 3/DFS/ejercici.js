let grafo = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "E", "F"],
    "D": ["B"],
    "E": ["C"],
    "F": ["C"]
}

function dfs(grafo, inicio) {
    let pila = [inicio]
    let visitados = new Set()
    visitados.add(inicio)
    let orden = []

    while (pila.length > 0) {
        let nodo = pila.pop()
        orden.push(nodo)

        grafo[nodo].slice().reverse().forEach(letra => {
            if (!visitados.has(letra)) {
                visitados.add(letra)
                pila.push(letra)
            }
        });
    }
    return orden
}

console.log(dfs(grafo, "A"))