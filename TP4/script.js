//aparicion de items
const observerEdificios = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('showEdificios');
        } else {
            entry.target.classList.remove('showEdificios');
        }
    });
});

const observerArañas = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('showArañas');
        } else {
            entry.target.classList.remove('showArañas');
        }
    });
});

const observerTelaraña = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('showTelarañas');
        } else {
            entry.target.classList.remove('showTelarañas');
        }
    });
});

const observerPersonajes = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('showPersonajes');
        } else {
            entry.target.classList.remove('showPersonajes');
        }
    });
});


const edificios = document.querySelectorAll('.edificios'); //agarro todos los elementos con la clase hidden
edificios.forEach((el) => observerEdificios.observe(el));//observa todos los elementos hiddenElements

const arañas = document.querySelectorAll('.arañas');
arañas.forEach((el) => observerArañas.observe(el));

const telarañas = document.querySelectorAll('.telarañas');
telarañas.forEach((el) => observerTelaraña.observe(el));

const cardsPersonajes = document.querySelectorAll('.cards-personajes');
cardsPersonajes.forEach((el) => observerPersonajes.observe(el));


//parralax
const parallaxDuende = document.getElementById('img-duende');
let initialTopDuende = -60;

window.addEventListener('scroll', function () {
    let offset = window.scrollY;

    let newPosition = initialTopDuende + offset * 0.3;

    if (newPosition < 170 && offset > 240) {
        parallaxDuende.style.top = newPosition + 'px';
    }
});


const images = document.querySelectorAll('.tres-spider');
const fondo3spiders = document.getElementById('fondo-tres-spiders');
images.forEach((image) => {
    image.addEventListener('mouseenter', function () {

        const imagenSeleccionada = event.target.id;
        if (imagenSeleccionada === 'tres-spiders-gwen') {
            fondo3spiders.src = './imagenes/3spidersFondo1.svg'
            fondo3spiders.id = 'tres-spiders-fondo1';
        } else if (imagenSeleccionada === 'tres-spiders-peter') {
            fondo3spiders.src = './imagenes/3spidersFondo2.svg'
            fondo3spiders.classList.add('tres-spiders-fondo1');
            fondo3spiders.id = 'tres-spiders-fondo1';

        } else if (imagenSeleccionada === 'tres-spiders-miles') {
            fondo3spiders.src = './imagenes/3spidersFondo3.svg'
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.classList.add('tres-spiders-fondo1');
        }

        images.forEach((img) => {
            image.classList.add('agrandar');
            if (img !== image) { // No aplica el efecto a la imagen actual
                img.classList.add('borroso'); // Agrega la clase blur a las otras imágenes
            }
        });
    });

    image.addEventListener('mouseleave', function () {
        images.forEach((img) => {
            fondo3spiders.src = './imagenes/3spidersFondo.svg'
            fondo3spiders.classList.remove('tres-spiders-fondo1');
            fondo3spiders.id = 'fondo-tres-spiders'
            img.classList.remove('borroso'); // Elimina la clase blur para quitar el desenfoque
            image.classList.remove('agrandar');

        });
    });
});
