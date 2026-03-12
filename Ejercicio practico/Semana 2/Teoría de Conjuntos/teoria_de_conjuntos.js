// ### Ejercicio práctico

// **Parte 1 — Operaciones manuales:**

// Dados estos conjuntos:

// A = {1, 3, 5, 7, 9}
// B = {2, 3, 5, 8, 9, 10}
// C = {1, 2, 3, 4, 5}
// U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}


// Calcula:

// 1. A ∪ B
// {1,2,3,4,5,6,7,8,9,10}
// 2. A ∩ C
// {3,5,9}
// 3. B - C
// {8,9,10}
// 4. Aᶜ
// 2,4,6,8,10
// 5. (A ∩ B) ∪ C
// {1,2,3,4,5,9}
// 6. A ∩ B ∩ C
// {3,5}

let productos = [
    { nombre: "Laptop", precio: 1500, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 0 },
    { nombre: "Teclado", precio: 80, stock: 12 },
    { nombre: "Monitor", precio: 400, stock: 3 },
    { nombre: "Cable HDMI", precio: 15, stock: 0 }
]

// A) Conjunto de productos caros (precio > 100)
let productosCaros = productos.filter(elem => elem.precio > 100)
console.log(productosCaros)
// B) Conjunto de productos con stock
let productosStock = productos.filter(elem => elem.stock >= 1)
console.log(productosStock)
// C) Intersección: productos caros CON stock
let carosConStock = productosCaros.filter(elem => elem.stock >= 1)
console.log(carosConStock)
// D) Diferencia: productos caros SIN stock

// E) ¿El conjunto de productos caros es subconjunto del conjunto con stock?
```
**Parte 3 — Verifica De Morgan con conjuntos.** Usando los conjuntos de la Parte 1, comprueba que:
```
// (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ