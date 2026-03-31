let edadSolicitante = ""
let reclamoFraudulento = ""

if (edadSolicitante < 18) {
    console.log("Es menor de 18 años, no puede aplicar")
} else if (edadSolicitante >= 18 && edadSolicitante <= 25 && reclamoFraudulento !== "Si") {
    console.log("Necesita un co-firmanete para que se apruebe")
} else if (edadSolicitante >= 26 && edadSolicitante <= 65 && reclamoFraudulento !== "Si" ) {
    console.log("Si puede aplicar al seguro medico")
} else {
    console.log("No es aplicable al seguro medico")
}


let x = 10
let y = "10"
let z = 0

if (x === y) {
    console.log("A")
} else if (x == y) {
    console.log("B")
} else {
    console.log("C")
}

if (z) {
    console.log("D")
} else if (z === 0) {
    console.log("E")
} else {
    console.log("F")
}

let resultado = x > 5 ? (z ? "G" : "H") : "I"
console.log(resultado)