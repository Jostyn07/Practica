
let jugador = {
    experiencia: 0,
    nivel: 0,
}


document.querySelector("#experiencia").addEventListener("click", function() {
    jugador.experiencia = jugador.experiencia + 1
    crear()
})

function obtenerForma() {
    if (jugador.experiencia <= 3) return "🥚"
    if (jugador.experiencia > 3 && jugador.experiencia < 10) return "🐥" 
    if (jugador.experiencia >= 10) return "🐓" 
}

function obtenerNivel() {
    if (jugador.experiencia <= 3) return 1
    if (jugador.experiencia > 3 && jugador.experiencia < 10) return 2
    if (jugador.experiencia >= 10) return 3
}

function crear() {
    const div = document.getElementById("evolucion") 
    const p = document.createElement("p")
    p.innerHTML = `${jugador.experiencia} Exp <br> Nivel: ${obtenerNivel()} ${obtenerForma()} `
    
    div.innerHTML = ""
    div.appendChild(p)
}