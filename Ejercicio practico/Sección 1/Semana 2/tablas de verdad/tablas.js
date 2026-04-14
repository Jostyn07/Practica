// "Si el cliente tiene más de 65 años Y tiene enfermedad preexistente,
//  entonces se cobra prima adicional"

function verificarCobroPrima(edad, tieneEnfermedad, cobraronPrima) {
    let condicion = edad > 65 && tieneEnfermedad

    if (condicion && !cobraronPrima) {
        return "ERROR: debieron cobrar prima adicional"
    }
    return "Sin violación de regla"
}

// Tiene 70, tiene enfermedad, le cobraron → correcto
verificarCobroPrima(70, true, true)     // "Sin violación"

// Tiene 70, tiene enfermedad, NO le cobraron → ERROR
verificarCobroPrima(70, true, false)    // "ERROR"

// Tiene 30, tiene enfermedad, le cobraron → sin violación
// (la regla no aplica porque tiene 30, no más de 65)
// (le cobraron por otra razón? no importa, la regla no opina)
verificarCobroPrima(30, true, true)     // "Sin violación"

// Tiene 30, no tiene enfermedad, no le cobraron → sin violación
verificarCobroPrima(30, false, false)   // "Sin violación"


//  p = salir
//  q = caminar


function parque (p, q) {
    if (p && q) {
        return "Estoy caminando"
    } else {
        return "Me quede en casa"
    }
}

// A
if (!(usuario.activo && usuario.verificado)) {
    bloquear()
}

if (!usuario.activo && u|suario.verificado) { // Ley de Morgan
    bloquear()
}

// B
if ((esAdmin && tienePermiso) || (esAdmin && tieneToken)) {
    permitirAcceso()
}

if (esAdmin && (tienePermiso && tieneToken)) { //Distributiba
    permitirAcceso()
}

// C
if (estaLogueado && (estaLogueado || esInvitado)) {
    mostrarContenido()
}

if (estaLogueado) { //Absorción
    mostrarContenido()
}

// D
if (!!conexionEstable) {
    enviarDatos()
}

if (conexionEstable) { //Doble negación
    enviarDatos()
}