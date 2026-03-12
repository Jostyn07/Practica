// Usa estos datos:
let productos = [
    { nombre: "Laptop", precio: 1500, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 0 },
    { nombre: "Teclado", precio: 80, stock: 12 },
    { nombre: "Monitor", precio: 400, stock: 3 },
    { nombre: "Cable HDMI", precio: 15, stock: 0 }
]

// A) ¿Todos los productos tienen stock mayor a 0?
    // ∀x: c.stock > 0
    let todosLosStock = productos.every(c=> c.stock > 0 )
    console.log(todosLosStock)

// B) ¿Algún producto cuesta más de 1000?
    // ∃x: c.precio > 1000
    let valorMayor1000 = productos.some(c=> c.precio > 1000)
    console.log(valorMayor1000)
// C) ¿Ningún producto tiene precio negativo?
    // ∀x: !c.precio < 0
    let valoresNegativos = productos.every(c=> !(c.precio < 0))
    console.log(valoresNegativos)
// D) ¿Todo producto con precio mayor a 100 tiene stock disponible?
    // ∀x: c.precio > 100: ∀x: c.stock > 0

    let precio100Stock = productos.every(c => {
        if (c.precio > 100) {
            if (c.stock >= 1) {
                return true
            }
        }
        return true
    })
console.log(precio100Stock)