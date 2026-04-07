// Recibir y prestar libro
class Libro {
    constructor (autor, nombre, disponible = true) {
        this.autor = autor
        this.nombre = nombre
    }
}

class Biblioteca {
    constructor (nombre, libros = []) {
        this.nombre = nombre
        this.libros = libros
    }

    agregarLibro(autor, nombre) {
        libros.push( new Libro(autor, nombre))
    }

    verLibros() {
        for (let i = 0; i < this.libros.length; i++) {
            console.log(this.libros[i].nombre)
        }
        return
    }
}

Biblioteca.agregarLibro("LOL", "SITO")
Biblioteca.verLibros()