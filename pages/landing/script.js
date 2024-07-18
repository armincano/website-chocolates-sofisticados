// scripts.js

// Obtener elementos del DOM
const btnLogin = document.getElementById('btn-login');
const modal = document.getElementById('login-modal');
const closeModal = document.getElementsByClassName('close')[0];

// Mostrar el modal al hacer clic en el botón Login
btnLogin.onclick = function() {
    modal.style.display = 'block';
}

// Cerrar el modal al hacer clic en la 'x'
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del área del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}