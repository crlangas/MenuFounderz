document.addEventListener('DOMContentLoaded', iniciar, false);

function iniciar() {
    let lastScroll = 0;

    //listener del scroll que saca las imagenes al bajar el raton
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || window.pageYOffset;


        lastScroll = currentScroll;
        console.log('Scroll actual:', currentScroll);
        if (window.scrollY > 4) {
            document.querySelector('#logo > img').style.display = 'none';
        }

        if (window.scrollY > 5) {
            document.querySelector('#logo img:last-child').className = 'mostImg';
            document.querySelector('#logo img:last-child').classList.remove('hidden');
        }

        if (window.scrollY < 5) {
             document.querySelector('#logo img:last-child').classList.remove('mostImg');
             document.querySelector('#logo img:last-child').classList.add('hidden');
        }

        if (window.scrollY < 4) {
            document.querySelector('#logo > img').style.display = 'block';
        }
    });

    let ofrecemosBTN = document.querySelector('#ofrecemosBTN');
};