// ### Ejercicio 2 — Tablas de verdad aplicadas

// Un sistema de aprobación de pólizas tiene estas reglas:
// ```
// p = cliente tiene documentación completa
// q = cliente pasó verificación de identidad
// r = cliente tiene historial limpio (sin fraude)

// La regla de aprobación es: (p ∧ q) → r
// A) Construye la tabla de verdad completa.
// B) Para cada fila que dé FALSO, describe en español qué situación representa y por qué es un problema.

// C) Traduce la regla a JavaScript:
// javascriptfunction validarAprobacion(tieneDocumentos, pasóVerificacion, historialLimpio) {
//     // Tu código aquí
//     // Retorna true si la regla no se viola
//     // Retorna false si la regla se viola
// }
// V | V | V | V | V -> 
function reglaAprobacion (tieneDocumento, pasoVerificacion,historialLimpio) {
    if (tieneDocumento && pasoVerificacion) {
        if (historialLimpio) {
            return true
        }
        return false
    }
    return true
}
// 