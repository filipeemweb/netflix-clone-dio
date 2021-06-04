const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    /* Trata o toque no mobile */
    if (event.type === 'touchstart') event.preventDefault()
    
    /* A função principal */
    const nav = document.querySelector('nav#navbar');
    nav.classList.toggle('active');
    
    /* Trata as questões para leitores de telas */
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);