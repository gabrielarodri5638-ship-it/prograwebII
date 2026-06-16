document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-contacto");
    const modalExito = new bootstrap.Modal(document.getElementById('modalConfirmacion'));

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Previene el envío por defecto de HTML
        
        let valid = true;
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Limpiar estilos de validación previos
        [nombre, email, mensaje].forEach(input => input.classList.remove("is-invalid", "is-valid"));

        // Validación Nombre
        if (nombre.value.trim().length < 3) {
            nombre.classList.add("is-invalid");
            valid = false;
        } else {
            nombre.classList.add("is-valid");
        }

        // Validación Email (Regex estándar)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.add("is-valid");
        }

        // Validación Mensaje
        if (mensaje.value.trim() === "") {
            mensaje.classList.add("is-invalid");
            valid = false;
        } else {
            mensaje.classList.add("is-valid");
        }

        // Si pasa todas las validaciones lógicas
        if (valid) {
            // Inyectar datos dinámicamente en el modal antes de mostrarlo
            document.getElementById("modal-user-name").innerText = nombre.value;
            modalExito.show();
            formulario.reset();
            [nombre, email, mensaje].forEach(input => input.classList.remove("is-valid"));
        }
    });
});