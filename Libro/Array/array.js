// Bucles para recorrer
// Bucle while
// var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
// var i = 0;
// while (i < dias.length) {
//     document.write(dias[i] + "<br>");
//     i++
// }

// Bucle for in y for of
var dias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

for (let index in dias2) {
    console.log(dias2[index])
}

for (let dia of dias2) {
    console.log(dia)
}