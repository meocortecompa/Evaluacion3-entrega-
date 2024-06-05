
var productos = [];

function Producto(id, nombre, categoria, descripcion, direccion, marca, tipoEnvio, stock, precio, opcionesPago, estadoPago, opcionesColor) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.direccion = direccion;
    this.marca = marca;
    this.tipoEnvio = tipoEnvio;
    this.stock = stock;
    this.precio = precio;
    this.opcionesPago = opcionesPago;
    this.estadoPago = estadoPago;
    this.opcionesColor = opcionesColor;
}

function listarProductos() {
    var filas = "";
    for (var i = 0; i < productos.length; i++) {
        var p = productos[i];
        filas += "<tr>";
        filas += "<td>" + p.id + "</td>";
        filas += "<td>" + p.nombre + "</td>";
        filas += "<td>" + p.categoria + "</td>";
        filas += "<td>" + p.descripcion + "</td>";
        filas += "<td>" + p.direccion + "</td>";
        filas += "<td>" + p.marca + "</td>";
        filas += "<td>" + p.tipoEnvio + "</td>";
        filas += "<td>" + p.stock + "</td>";
        filas += "<td>" + p.precio + "</td>";
        filas += "<td>" + p.opcionesPago + "</td>";
        filas += "<td>" + p.estadoPago + "</td>";
        filas += "<td>" + p.opcionesColor + "</td>";
        filas += "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}

function limpiarCampos() {
    document.getElementById("txtid").value = "";
    document.getElementById("txtnom").value = "";
    document.getElementById("txtcat").value = "";
    document.getElementById("txtdes").value = "";
    document.getElementById("txtdir").value = "";
    document.getElementById("txtmar").value = "";
    document.getElementById("txten").checked = false;
    document.getElementById("txtsto").value = "";
    document.getElementById("txtpre").value = "";
    document.getElementById("txtop").value = "";
    document.getElementById("txtest").checked = false;
    document.getElementById("txtcol").value = "";
}

function consultar() {
    var id = document.getElementById("txtid").value;
    if (!id) {
        alert("Por favor, ingrese un ID para consultar.");
        return;
    }
    var productoEncontrado = productos.find(function (p) {
        return p.id === id;
    });
    if (productoEncontrado) {
        mostrarProducto(productoEncontrado);
    } else {
        alert("Producto no encontrado.");
    }
}

function mostrarProducto(producto) {
    document.getElementById("txtnom").value = producto.nombre;
    document.getElementById("txtcat").value = producto.categoria;
    document.getElementById("txtdes").value = producto.descripcion;
    document.getElementById("txtdir").value = producto.direccion;
    document.getElementById("txtmar").value = producto.marca;
    document.getElementById("txten").value = producto.tipoEnvio;
    document.getElementById("txtsto").value = producto.stock;
    document.getElementById("txtpre").value = producto.precio;
    document.getElementById("txtop").value = producto.opcionesPago;
    document.getElementById("txtest").value = producto.estadoPago;
    document.getElementById("txtcol").value = producto.opcionesColor;
}

function registrar() {
    var id = document.getElementById("txtid").value;
    var nombre = document.getElementById("txtnom").value;
    var categoria = document.getElementById("txtcat").value;
    var descripcion = document.getElementById("txtdes").value;
    var direccion = document.getElementById("txtdir").value;
    var marca = document.getElementById("txtmar").value;
    var tipoEnvio = document.querySelector('input[name="envio"]:checked').value;
    var stock = parseInt(document.getElementById("txtsto").value);
    var precio = parseFloat(document.getElementById("txtpre").value);
    var opcionesPago = document.getElementById("txtop").value;
    var estadoPago = document.querySelector('input[name="Estado"]:checked').value;
    var opcionesColor = document.getElementById("txtcol").value;

    if (!id || !nombre || !categoria || !descripcion || !direccion || !marca || isNaN(stock) || isNaN(precio) || !opcionesPago || !opcionesColor) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    var nuevoProducto = new Producto(id, nombre, categoria, descripcion, direccion, marca, tipoEnvio, stock, precio, opcionesPago, estadoPago, opcionesColor);

    productos.push(nuevoProducto);

    limpiarCampos();

    listarProductos();

    alert("Producto registrado exitosamente.");
}

function modificar() {
    var id = document.getElementById("txtid").value;
    if (!id) {
        alert("Por favor, ingrese un ID para modificar.");
        return;
    }
    var productoIndex = productos.findIndex(function (p) {
        return p.id === id;
    });
    if (productoIndex !== -1) {
        var nombre = document.getElementById("txtnom").value;
        var categoria = document.getElementById("txtcat").value;
        var descripcion = document.getElementById("txtdes").value;
        var direccion = document.getElementById("txtdir").value;
        var marca = document.getElementById("txtmar").value;
        var tipoEnvio = document.querySelector('input[name="envio"]:checked').value;
        var stock = parseInt(document.getElementById("txtsto").value);
        var precio = parseFloat(document.getElementById("txtpre").value);
        var opcionesPago = document.getElementById("txtop").value;
        var estadoPago = document.querySelector('input[name="Estado"]:checked').value;
        var opcionesColor = document.getElementById("txtcol").value;

        if (!nombre || !categoria || !descripcion || !direccion || !marca || isNaN(stock) || isNaN(precio) || !opcionesPago || !opcionesColor) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        productos[productoIndex] = new Producto(id, nombre, categoria, descripcion, direccion, marca, tipoEnvio, stock, precio, opcionesPago, estadoPago, opcionesColor);
    }
}

function eliminar() {
    var id = document.getElementById("txtid").value.toUpperCase();

    var errores = "";
    if (id.trim().length !== 5) {
        errores = errores + "El ID debe contener 5 caracteres! \n";
    } else {
        var encontrado = false;
        for (let i = 0; i < productos.length; i++) {
            var producto = productos[i];
            if (id === producto.id) {
                encontrado = true;
                var confirmacion = confirm("¿Desea eliminar el producto con ID " + id + "?");
                if (confirmacion) {
                    productos.splice(i, 1);
                    mostrarMensaje("Producto eliminado correctamente.", "success")
                }}}}
}