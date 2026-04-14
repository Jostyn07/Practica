    // ### Ejercicio práctico

    // **Parte 1 — Construye la matriz de adyacencia** para este grafo:

    // A --- B --- C
    // |         |
    // D ------- E
    // A conecta con B y D. B conecta con A y C. C conecta con B y E. D conecta con A y E. E conecta con C y D.
    // Escribe la matriz como array de arrays en JavaScript.

    let matriz = [
        [0, 1, 0, 1, 0],   // A conecta con B y D
        [1, 0, 1, 0, 0],   // B conecta con A y C
        [0, 1, 0, 0, 1],   // C conecta con B y E
        [1, 0, 0, 0, 1],   // D conecta con A y E
        [0, 0, 1, 1, 0]    // E conecta con C y D
    ]

    // ¿A está conectado con B?
    console.log(matriz[0][1])   // 1 → sí

    // ¿A está conectado con C?
    console.log(matriz[0][2])   // 0 → no
    // Parte 2 — Construye la lista de adyacencia del mismo grafo como objeto en JavaScript.
    let grafo = {
        "A": ["B", "D"],
        "B": ["A", "C"],
        "C": ["B", "E"],
        "D": ["A", "E"],
        "E": ["C", "D"]
    }
    // Parte 3 — Desde datos reales:

    let rutas = [
        { origen: "Barranquilla", destino: "Bogotá", km: 980 },
        { origen: "Bogotá", destino: "Medellín", km: 400 },
        { origen: "Bogotá", destino: "Cali", km: 460 },
        { origen: "Medellín", destino: "Cartagena", km: 650 },
        { origen: "Cali", destino: "Cartagena", km: 1000 }
    ]

    // A) Construye un grafo no dirigido ponderado (lista de adyacencia)
    //    Recuerda: si Barranquilla→Bogotá existe, Bogotá→Barranquilla tambié
    let grafo2 = {}
    rutas.forEach(r => {
        if (!grafo2[r.origen]) {
            grafo2[r.origen] = []
        }

        if (!grafo2[r.destino]) {
            grafo2[r.destino] = []
        }
        grafo2[r.destino].push({destino: r.origen, distancia: r.km})
        grafo2[r.origen].push({destino: r.destino, distancia: r.km })

    })
    console.log(grafo2)

    // B) Escribe una función vecinos(ciudad) que retorne
    //    las ciudades conectadas y sus distancias
    function vecinos(ciudad) {
        return grafo2[ciudad]
    }
    console.log(vecinos("Bogotá"))
    // C) Escribe una función estaConectado(ciudadA, ciudadB) que retorne
    //    true si hay conexión directa entre ellas

    function estaConectado(ciudadA, ciudadB) {
        return grafo2[ciudadA].some(e => e.destino === ciudadB)
    }
    console.log(estaConectado("Barranquilla", "Bogotá"))
    console.log(estaConectado("Bogotá", "Cartagena"))
    // **Parte 4 — Pregunta conceptual:**

    // Para cada caso, ¿usarías matriz o lista de adyacencia? Justifica:
    // ```
    // 1. Red social con 1 millón de usuarios donde cada uno tiene ~200 amigos
    // 2. Tablero de ajedrez 8×8 donde cada casilla se conecta con las adyacentes
    // 3. Sistema de agentes-clientes con 10 agentes y 500 clientesv