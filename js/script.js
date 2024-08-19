// Datos simulados de un usuario registrado (en una aplicación real, esto vendría de una base de datos)
const registeredUser = {
    email: "daniel@gmail.com",
    password: "12345",
    username: "daniel simpatico"
};

// Función para manejar el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === registeredUser.email && password === registeredUser.password) {
        // Guardar la sesión del usuario en el almacenamiento local
        localStorage.setItem('loggedInUser', JSON.stringify(registeredUser));
        mostrarUsuario();
        alert('Inicio de sesión exitoso');
        window.location.href = '../../index.html'; // Redirigir al inicio
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});

// Función para mostrar el nombre del usuario si está autenticado
function mostrarUsuario() {
    const userSection = document.getElementById('user-section');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userSection.innerHTML = `
            <li class="nav-item">
                <span class="nav-link">Bienvenido, ${loggedInUser.username}</span>
            </li>
            <li class="nav-item">
                <button class="btn btn-danger nav-link" onclick="cerrarSesion()">Cerrar Sesión</button>
            </li>
        `;
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'usuario.html'; // Redirigir a la página de usuario
}

// Llamar a la función para mostrar el usuario al cargar la página
mostrarUsuario();

// Función para manejar el clic en el enlace de registro (puedes redirigir a una página de registro)
document.getElementById('register-link').addEventListener('click', function() {
    alert('Redirigiendo a la página de registro...');
    // Aquí podrías redirigir a una página de registro, por ejemplo:
    // window.location.href = 'registro.html';
});