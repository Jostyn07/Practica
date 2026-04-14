const { act } = require("react");

let referidos = [
    { origen: "Pedro", destino: "Ana" },
    { origen: "Pedro", destino: "Luis" },
    { origen: "Ana", destino: "María" },
    { origen: "Ana", destino: "Carlos" },
    { origen: "Luis", destino: "Rosa" },
    { origen: "María", destino: "Jorge" },
    { origen: "Rosa", destino: "Diana" }
]

// A) Construye el grafo como lista de adyacencia (dirigido)
    let grafo = {
        "Pedro": ["Ana", "Luis"],
        "Ana": ["Pedro","Maria", "Carlos"],
        "Luis": ["Pedro","Rosa"],
        "Maria": ["Ana","Jorge"],
        "Carlos": ["Ana"],
        "Rosa": ["Luis","Diana"],
        "Jorge": ["Maria"],
        "Diana": ["Rosa"]
    }
// B) Usa BFS desde Pedro: ¿en qué orden descubre a los referidos?
    function desucbreReferidos(grafo, inicio) {
        let fila = [inicio];
        let visitados = new Set();
        visitados.add(inicio);
        let orden = []

        while (fila.length > 0) {
            let persona = fila.shift()
            orden.push(persona)

            grafo[persona].forEach(r => {
                if (!visitados.has(r)) {
                    visitados.add(r);
                    fila.push(r)
                }
            });
        }
        return orden
    }
    console.log(desucbreReferidos(grafo, "Pedro"))

// C) ¿A cuántos pasos de Pedro está Diana?
        function pasos(grafo, inicio, destino) {
        let fila = [inicio];
        let visitados = new Set();
        visitados.add(inicio);
        let padre = {}
        padre[inicio] = null

        while (fila.length > 0) {
            let persona = fila.shift()

            if (persona === destino) {
                let camino = [destino]
                let actual = padre[actual]
                camino.unshift(actual)
            }

            grafo[persona].forEach(r => {
                if (!visitados.has(r)) {
                    visitados.add(r);
                    fila.push(r)
                    padre[r] = persona
                }
            });
        return camino

        }
    return null
    }
    console.log(pasos(grafo, "Pedro", "Diana"))
// D) ¿Cuál es el camino más corto de Pedro a Jorge?