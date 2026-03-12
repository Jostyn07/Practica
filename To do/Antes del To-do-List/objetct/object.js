const cliente = {
    name: "Jostyn",
    edad: 25,
    genero: "Masculino",
    toString: function() {
        return `Mi nombre es ${this.name} tengo ${this.edad} y mi genero es ${this.genero}`
    }
}

console.log(cliente.toString())