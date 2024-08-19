// ejemplo de productos para agregar al carrito
const productos = [
    { id: 1, nombre: "Teléfono Móvil", precio: 299.99 },
    { id: 2, nombre: "Audífonos Bluetooth", precio: 59.99 },
    { id: 3, nombre: "Smart TV", precio: 499.99 },
    { id: 4, nombre: "Laptop", precio: 899.99 }
];

let carrito = [];

// función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';

    let total = 0;
    carrito.forEach(producto => {
        const itemTotal = producto.precio * producto.cantidad;
        total += itemTotal;

        const row = `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="removerDelCarrito(${producto.id})">Eliminar</button></td>
            </tr>
        `;
        carritoItems.innerHTML += row;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

// Función para remover un producto del carrito
function removerDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

// Función para finalizar la compra
document.getElementById('finalizar-compra').addEventListener('click', function() {
    if (carrito.length > 0) {
        alert("Compra finalizada con éxito. ¡Gracias por tu compra!");
        carrito = [];
        actualizarCarrito();
    } else {
        alert("El carrito está vacío.");
    }
});

// Simulación de agregar productos al carrito
// En una aplicación real, este código se activaría cuando el usuario agrega productos desde el catálogo
agregarAlCarrito(1);
agregarAlCarrito(2);
agregarAlCarrito(3);
