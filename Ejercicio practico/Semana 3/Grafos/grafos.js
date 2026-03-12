// let polizas = [
//     { id: "POL-001", cliente: "Ana", agente: "Pedro" },
//     { id: "POL-002", cliente: "Luis", agente: "Pedro" },
//     { id: "POL-003", cliente: "María", agente: "Sofía" },
//     { id: "POL-004", cliente: "Carlos", agente: "Sofía" },
//     { id: "POL-005", cliente: "Rosa", agente: "Diego" },
//     { id: "POL-006", cliente: "Jorge", agente: "Diego" }
// ]
// ```
// ```
// A) Dibuja el grafo de relación agente → cliente (texto es suficiente)
    // Pedro        Sofia          Diego
    // |    |       |       |      |   |
    // Ana  Luis    Maria   Carlos Rosa Jorge
// B) ¿Es dirigido o no dirigido? ¿Por qué?
        // Es dirigido, porque el agente es quien atiende al cliente, no lo contrario
// C) ¿Cuál es el grado de cada agente?
    // 2
// D) ¿Es conexo? ¿Por qué?
    // No es conexo, porque no hay relación entre todos
// E) ¿Dos clientes de agentes diferentes están conectados entre sí?
    // No
// ```

// **Parte 3 — Clasificación:**

// Para cada ejemplo, indica si es dirigido o no dirigido, y si es ponderado o no:
// ```
// 1. Red de amigos en Facebook -> No dirigido
// 2. Calles de una ciudad con distancias -> No dirigido
// 3. Organigrama de una empresa (quién es jefe de quién) -> Dirigido
// 4. Red WiFi: dispositivos conectados al mismo router -> Dirigido
// 5. Envío de emails entre empleados -> Dirigido