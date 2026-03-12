let fruits = [];
fruits[123] = "Apple";
console.log(fruits.length)

// Tratemos 5 operaciones de array.

// Crear un array styles con los items “Jazz” y “Blues”.
// Agregar “Rock-n-Roll” al final.
// Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
// Quitar el primer valor del array y mostrarlo.
// Anteponer Rap y Reggae al array.

let styles = ["jazz", "blues"]
styles.push("Rock-n-Roll")
if (((styles.length)%2) == 1) {
    let a = (styles.length - 1) / 2 
    styles[a] = "Classics"
}

styles.shift()

styles.unshift("Rap", "Reggae")

for (let style of styles) {
    console.log(style)
}

// Prueba 3
