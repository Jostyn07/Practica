class CuentaCliente {
    constructor(id, nombre, saldo, historial){
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
        this.historial = historial;
        this.activo = true
        this.historial = []
    }

    // Controlar si el cliente deposita dinero
    depositar(monto) {
        if(this.activo) { //Verificar si el cliente esta activo
            this.saldo += monto
            this.historial.push(`Deposito: ${monto}`)
            return this.saldo
        } else {
            console.log("Cuenta inactiva")
        }
    }
    // Controlar si el cliente retira dinero
    retirar(monto) {
        if (monto > this.saldo) {
            return `No tienes saldo suficiente`
        } else {
            this.saldo -= monto
            this.historial.push(`Retiro: ${monto}`)
            return this.saldo
        }
    }

    verSaldo() {
        return `Saldo: ${this.saldo}`
    }

    verHistorial() {
        for (let i = 0; i < this.historial.length; i++) {
            return `${this.historial[i]}`
        }
    }
}

class Tienda {
    constructor(nombre, inventario = [],totalVentas) {
        this.nombre = nombre;
        this.inventario.push(inventario);
        this.totalVentas = totalVentas;
    }
}

// TEST CuentaCliente
const cuenta = new CuentaCliente(1, "Carlos", 500);
console.log(cuenta.verSaldo());        // saldo: $500
console.log(cuenta.depositar(200));    // depósito OK, saldo: $700
console.log(cuenta.retirar(100));      // retiro OK, saldo: $600
console.log(cuenta.retirar(1000));     // error: saldo insuficiente
console.log(cuenta.verHistorial());    // 2 movimientos

// TEST Tienda
// const tienda = new Tienda("TechStore");
// tienda.agregarProducto("Mouse", 25, 10);
// tienda.agregarProducto("Mouse", 25, 5);  // debe sumar stock, no duplicar → 15
// tienda.vender("Mouse", 3);               // venta OK
// tienda.vender("Mouse", 20);             // error: stock insuficiente
// tienda.verInventario();                  // Mouse: 12 unidades
// tienda.verVentas();                      // total: $75