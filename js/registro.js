// Función para validar RUT
function validarRut(rut) {
    const regexRut = /^[0-9]+-[0-9Kk]$/;
    return regexRut.test(rut);
}

// Función para validar el email
function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Función para manejar el registro del formulario
document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const rut = document.getElementById('rut').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmarEmail = document.getElementById('confirmarEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const clave = document.getElementById('clave').value.trim();
    const confirmarClave = document.getElementById('confirmarClave').value.trim();

    // Validar RUT
    if (!validarRut(rut)) {
        valid = false;
        document.getElementById('rut').classList.add('is-invalid');
    } else {
        document.getElementById('rut').classList.remove('is-invalid');
    }

    // Validar email
    if (!validarEmail(email)) {
        valid = false;
        document.getElementById('email').classList.add('is-invalid');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    // Verificar que los emails coincidan
    if (email !== confirmarEmail) {
        valid = false;
        document.getElementById('confirmarEmail').classList.add('is-invalid');
    } else {
        document.getElementById('confirmarEmail').classList.remove('is-invalid');
    }

    // Verificar que las contraseñas coincidan
    if (clave !== confirmarClave) {
        valid = false;
        document.getElementById('confirmarClave').classList.add('is-invalid');
    } else {
        document.getElementById('confirmarClave').classList.remove('is-invalid');
    }

    // Validar número de teléfono
    if (telefono === "" || isNaN(telefono)) {
        valid = false;
        document.getElementById('telefono').classList.add('is-invalid');
    } else {
        document.getElementById('telefono').classList.remove('is-invalid');
    }

    //  validación es exitosa
    const mensaje = document.getElementById('mensaje');
    if (valid) {
        mensaje.classList.remove('text-danger');
        mensaje.classList.add('text-success');
        mensaje.textContent = "Registro exitoso, ir a inicio.";
         //  error
    } else {
        mensaje.classList.remove('text-success');
        mensaje.classList.add('text-danger');
        mensaje.textContent = "Por favor, corrija los errores en los campos marcados.";
    }
});
