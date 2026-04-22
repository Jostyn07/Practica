// ✗ Obliga a todos a implementar TODO
class Trabajador {
    trabajar() { throw new Error("implementar") }
    comer() { throw new Error("implementar") }
    dormir() { throw new Error("implementar") }
}

class Humano extends Trabajador {
    trabajar() { console.log("Trabajando") }
    comer() { console.log("Comiendo") }
    dormir() { console.log("Durmiendo") }
}

class Robot extends Trabajador {
    trabajar() { console.log("Trabajando") }
    comer() { /* ✗ los robots no comen */ }
    dormir() { /* ✗ los robots no duermen */ }
}