// Recibir y prestar libro
class Libro {
    constructor (autor, nombre, disponible = true) {
        this.autor = autor
        this.nombre = nombre
        this.disponible = disponible
    }
}

class Biblioteca {
    constructor (nombre, libros = []) {
        this.nombre = nombre
        this.libros = libros
    }

    agregarLibro(libro) {
        this.libros.push(libro)
    }

    verLibros(nombre) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].nombre === nombre) {
                return this.libros[i]
            }
        }
        return null
    }

    prestarLibro(nombre) {
        let libro = this.verLibros(nombre)
        if (!libro) return "No exise"
        if (libro.disponible) {
            libro.disponible = false
            return "Prestado"
        } else {
            return "Ya esta prestado"
        }
    }

    devolverLibro(nombre) {
        let encontrado = false
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].nombre === nombre) {
                encontrado = true
                if (this.libros[i].disponible === true) {
                    return `El libro ${nombre} no ha sido prestado`
                    break
                } else {
                    this.libros[i].disponible = true
                    return `Libro ha sido almacenado`
                    break
                }
            }
        }
        if (encontrado === false) {
            return `El libro ${nombre} no nos permenece, pero el cliente lo puede donar si así lo desea`
        }
    }
}

let libro1 = new Libro("LOL", "SITO")
const biblio = new Biblioteca("Central")
biblio.agregarLibro(libro1)
biblio.verLibros()
console.log(biblio.devolverLibro("SITO"))
biblio.prestarLibro("SITO")
biblio.verLibros()
console.log(biblio.devolverLibro("SITO"))
console.log(biblio.devolverLibro("salomon"))

