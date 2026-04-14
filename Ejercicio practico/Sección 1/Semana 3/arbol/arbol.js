function crearNodo(valor) {
    return {valor: valor, izq: null, der:null}
}

let raiz = crearNodo(8)
raiz.izq = crearNodo(4)
raiz.izq.izq = crearNodo(2)
raiz.izq.der = crearNodo(6)
raiz.der = crearNodo(12)
raiz.der.izq = crearNodo(10)
raiz.der.der = crearNodo(14)

console.log(raiz)

let cantNodos = 0
function contarNodos(nodos) {
    if (nodos === null) return
    console.log(nodos.valor)
    contarNodos(nodos.izq)
    contarNodos(nodos.der)
    cantNodos += 1
}
contarNodos(raiz)
console.log(cantNodos)

function buscarNodo(nodo, valor = null) {
    console.log(nodo)
}
console.log(buscarNodo(raiz))