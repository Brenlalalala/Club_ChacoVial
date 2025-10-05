import './bootstrap';

const scrollToTopBtn = document.getElementById('scroll-to-top');

// Mostrar u ocultar el botón al desplazarse
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('invisible', 'opacity-0');
        scrollToTopBtn.classList.add('visible', 'opacity-100');
    } else {
        scrollToTopBtn.classList.remove('visible', 'opacity-100');
        scrollToTopBtn.classList.add('invisible', 'opacity-0');
    }
});

// Desplazarse suavemente hacia la parte superior
scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ---------------------------
// Validaciones del formulario
// ---------------------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            let errores = [];

            if (nombre.length < 3) {
                errores.push("El nombre debe tener al menos 3 caracteres.");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errores.push("Ingresa un correo electrónico válido.");
            }

            if (mensaje.length < 10) {
                errores.push("El mensaje debe tener al menos 10 caracteres.");
            }

            const errorBox = document.getElementById("errores");

            if (errores.length > 0) {
                errorBox.innerHTML = errores.join("<br>");
                errorBox.classList.remove("hidden");
            } else {
                errorBox.classList.add("hidden");
                alert("Formulario enviado con éxito ✅");
                form.reset();
            }
        });
    }
});
