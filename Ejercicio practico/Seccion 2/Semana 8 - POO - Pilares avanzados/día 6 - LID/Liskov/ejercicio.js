// Este código viola Liskov:
class Usuario {
    constructor(nombre, soloLectura) {
        this.nombre = nombre
        this.soloLectura = soloLectura
    }
    guardar() {
        if (this.soloLectura) {
            console.log('Este usuario es de solo lectura')
            return
        } else {
            console.log(`Guardando ${this.nombre} en BD`)
        }
    }
}

// El problema:
function procesarUsuario(usuario) {
    usuario.guardar()  // asume que guardar() funciona
}

procesarUsuario(new Usuario("Ana", false))           // ✓ funciona
procesarUsuario(new Usuario("Luis", true))  // ✗ lanza error

// console.log(Luis.guardar())