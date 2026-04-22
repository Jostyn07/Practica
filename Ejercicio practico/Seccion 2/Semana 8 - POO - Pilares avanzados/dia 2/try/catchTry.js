// Si esto fall, toda la aplicación se detiene
// let resutado = JSON.parse("Esto no es JSON válido")
// console.log(resutado)

try {
    // intentar ejecutar esto
    let resutado = JSON.parse("Esto no es JSON Válido")
    console.log(resutado)
} catch {
    //  Si algo falla, aterriza aquí
    console.log("Algo salió mal: ", error.message)
    // La aplicación sigue funcionando
}

try {
    // código que puede fallar
} catch (error) {
    // qué hacer si falla
    // error.message → descripción del error
} finally {
    // esto se ejecuta SIEMPRE, falle o no
}

