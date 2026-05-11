document.addEventListener('DOMContentLoaded', iniciar, false);

let lastScroll = 0;
let currentScroll = 0;

function iniciar() {

    //listener del scroll que saca las imagenes al bajar el raton
    window.addEventListener('scroll', () => {
        currentScroll = window.scrollY || window.pageYOffset;

        lastScroll = currentScroll;
        //console.log('Scroll actual:', currentScroll);
        if (window.scrollY > 4) {
            document.querySelector('#logo > img').style.display = 'none';
        }

        if (window.scrollY > 5) {
            document.querySelector('#logo img:last-child').className = 'mostImg';
            document.querySelector('#logo img:last-child').classList.remove('hidden');
            document.querySelector('nav').classList.add('scrolled');
            document.querySelector('#menuOculto').classList.add('scrolled');
        }

        if (window.scrollY < 5) {
            document.querySelector('#logo img:last-child').classList.remove('mostImg');
            document.querySelector('#logo img:last-child').classList.add('hidden');
            document.querySelector('nav').classList.remove('scrolled');
            document.querySelector('#menuOculto').classList.remove('scrolled');
        }

        if (window.scrollY < 4) {
            document.querySelector('#logo > img').style.display = 'block';
        }
    });

    const ofrecemosBTN = document.querySelector('#ofrecemosBTN');

    const menuOculto = document.getElementById('menuOculto');

    function mostrarMenu() {
        menuOculto.classList.remove('hidden');
        menuOculto.classList.add('monstMenu');
    }

    function ocultarMenu() {
        menuOculto.classList.remove('monstMenu');
        menuOculto.classList.add('hidden');
    }

    // Detectar si es móvil
    const isMobile = window.innerWidth <= 767;

    if (isMobile) {
        // En móvil: usar click para toggle
        ofrecemosBTN.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (menuOculto.classList.contains('hidden')) {
                mostrarMenu();
            } else {
                ocultarMenu();
            }
        });

        // Ocultar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!ofrecemosBTN.contains(e.target) && !menuOculto.contains(e.target)) {
                ocultarMenu();
            }
        });
    } else {
        // En desktop: usar hover
        // El botón muestra el menú
        ofrecemosBTN.addEventListener('mouseenter', mostrarMenu);

        // El menú se mantiene abierto mientras el ratón está dentro
        menuOculto.addEventListener('mouseenter', mostrarMenu);

        // Solo se oculta al salir de cada elemento
        ofrecemosBTN.addEventListener('mouseleave', (e) => {
            // Si el ratón va hacia el menú, no ocultamos
            if (!menuOculto.contains(e.relatedTarget)) {
                ocultarMenu();
            }
        });

        menuOculto.addEventListener('mouseleave', (e) => {
            // Si el ratón va hacia el botón, no ocultamos
            if (!ofrecemosBTN.contains(e.relatedTarget)) {
                ocultarMenu();
            }
        });
    }
}
