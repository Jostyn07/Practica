// A) 
if (!cliente.activo || !cliente.alDia) {
    enviarRecordatorio()
}

// B)
if ((esAgente && tienePermiso) || (esAgente && tieneCertificacion)) {
    habilitarVenta()
}

if (esAgente && (tienePermiso || tieneCertificacion)) {
    habilitarVenta()
}

// C)
if (edad >= 18 && tieneDocumento && noTieneFraude) {
        aprobarPoliza()
}

// D)
if (usuario.rol === "admin") {
    darAccesoTotal()
}

// E)
if (estaActivo) {
    procesarReclamo()
}
