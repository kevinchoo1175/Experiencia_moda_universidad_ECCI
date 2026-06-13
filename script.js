document.addEventListener('DOMContentLoaded', () => {

    // 1. Cierre automático del menú móvil de Bootstrap al presionar un enlace
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Instanciamos el controlador colapsable de Bootstrap
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica si el menú móvil está desplegado antes de ocultarlo
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });


    // 2. Animación Cinematográfica de Entrada por Scroll (Intersection Observer API)
    const elementsToReveal = document.querySelectorAll('.scroll-reveal');

    const observerSettings = {
        root: null, // Usa la pantalla del navegador
        threshold: 0.12, // Se activa cuando ingresa el 12% del elemento
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Inyectamos la clase CSS activa
                entry.target.classList.add('visible');
                // Dejamos de procesar el elemento una vez completado
                observer.unobserve(entry.target);
            }
        });
    }, observerSettings);

    // Adjuntamos el disparador a la sección de Perfil y a las 10 imágenes
    elementsToReveal.forEach(element => {
        scrollObserver.observe(element);
    });
});