class CuentaCliente {
    constructor(id, nombre, saldo, historial){
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
        this.historial = historial || [];
        this.activo = true
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
        return this.historial
    }
}

let total2 = 0
class Tienda {
    constructor(nombre, totalVentas) {
        this.nombre = nombre;
        this.inventario = [];
        this.totalVentas = totalVentas;
        this.ventas = []
        this.totalInventario = []
    }

    agregarProducto(nombre, cantidad, valor) {
        let encontrado = false
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].nombre === nombre) {
                this.inventario[i].cantidad += cantidad
                encontrado = true
                break
            }
        }
        if (!encontrado) {
            this.inventario.push({ nombre: nombre, cantidad: cantidad, valor: valor})
        }
    }

vender(nombre, cantidad, cliente) {
    let producto = null

    // buscar producto
    for (let i = 0; i < this.inventario.length; i++) {
        if (this.inventario[i].nombre === nombre) {
            producto = this.inventario[i]
            break
        }
    }

    if (!producto) return "Producto no existe"

    if (producto.cantidad < cantidad) return "Stock insuficiente"

    let total = cantidad * producto.valor

    let pago = cliente.retirar(total)

    if (typeof pago === "string") return pago

    // completar venta
    producto.cantidad -= cantidad
    this.ventas.push({ nombre, cantidad, total })

    return "Venta realizada"
}

    explorar(){
        let valor = []
        for (let i = 0; i < this.inventario.length; i++) {
            valor.push(this.inventario[i].nombre)
        }
        return valor
    }

    verVentas() {
        let total = 0
        for (let i = 0; i < this.ventas.length; i++) {
            total += this.ventas[i].Total
        }
        return `total: ${total}`
    }

    verInventario() {
        for (let i = 0; i < this.inventario.length; i++) {
            return `${this.inventario[i].nombre} || ${this.inventario[i].cantidad}`
        }
    }
}

// TEST CuentaCliente
const cuenta = new CuentaCliente(1, "Carlos", 500);
console.log(cuenta.verSaldo());        // saldo: $500
console.log(cuenta.depositar(200));    // depósito OK, saldo: $700
console.log(cuenta.retirar(100));      // retiro OK, saldo: $600
console.log(cuenta.retirar(1000));     // error: saldo insuficiente
console.log(cuenta.verHistorial());    // 2 movimientos



const tienda = new Tienda("TechStore");
tienda.agregarProducto("Mouse", 10, 25);
tienda.agregarProducto("Mouse", 5, 25);  // debe sumar stock, no duplicar → 15
tienda.agregarProducto("Teclado", 25, 5);  // debe sumar stock, no duplicar → 15
tienda.agregarProducto("Diadema", 25, 5);  // debe sumar stock, no duplicar → 15
console.log(tienda.explorar());
tienda.vender("Mouse", 3);              // venta OK
tienda.vender("Mouse", 20);             // error: stock insuficiente
console.log(tienda.verInventario());                  // Mouse: 12 unidades
console.log(tienda.verVentas());                      // total: $75