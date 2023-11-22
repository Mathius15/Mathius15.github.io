
window.addEventListener('load', () => {
    const peter = document.getElementById('img-spider2')
    peter.classList.add('showArañas');//sino no aparecia el spider 2 al principio
    const offset = window.scrollY;//toma el tope visible
    if (offset > 480) {
        ajustarHeader();
    }
    //document.body.style.overflowY = 'hidden';//desabilita el scroll
    setTimeout(() => {
        document.body.style.overflowY = 'auto';//habilita el scroll
    }, 3000);
});

function ajustarHeader() {
    imgLogo.style.width = `133px`;
    imgLogo.style.height = `68px`;
    imgLogo.style.top = `17px`;
    imgLogo.style.left = `574px`;
    header.style.height = `103px`;
}

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
}, {
    threshold: 0.00001,
});

const observerTelaraña = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('showTelarañas');
        } else {
            entry.target.classList.remove('showTelarañas');
        }
    });
}, {
    threshold: 0.2, //es el porcentaje del elemento que tiene que verse para que se condiere como isIntersecting
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


/*------------------------------------CONSIGNA 6----------------------*/
const parallaxDuende = document.getElementById('img-duende');
let initialTopDuende = -60;

window.addEventListener('scroll', function () {
    let offset = window.scrollY;

    let newPosition = initialTopDuende + offset * 0.3;

    if (newPosition < 170 && offset > 240) {
        parallaxDuende.style.top = newPosition + 'px';
    }
});

/*---------------------------------------------------CONSIGNA 12----------------------------- */
const images = document.querySelectorAll('.tres-spider');
const fondo3spiders = document.getElementById('fondo-tres-spiders');
images.forEach((image) => {
    image.addEventListener('mouseenter', function () {

        const imagenSeleccionada = event.target.id;
        if (imagenSeleccionada === 'tres-spiders-gwen') {
            fondo3spiders.src = './imagenes/3spidersFondo1.svg'
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.style.transition = 'all 0.3s ease';
        } else if (imagenSeleccionada === 'tres-spiders-peter') {
            fondo3spiders.src = './imagenes/3spidersFondo2.svg'
            fondo3spiders.classList.add('tres-spiders-fondo1');
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.style.transition = 'all 0.3s ease';

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


/*---------------------PARALLAX CONSIGNA 7---------------------------------------*/
const windowHeight = window.innerHeight;//altura visible en el navegador

window.addEventListener('scroll', function () {//se activa haciendo scroll
    const offset = window.scrollY;//toma el tope visible
    arañas.forEach(function (element) {//recorre todos los elementos con clase .araña
        const rect = element.getBoundingClientRect();//las cordenadas delimitadoras del elemento en relación con la ventana del navegador
        const initialTop = rect.top + offset;//pos inicial del elemento
        const bottom = rect.bottom + offset;//piso inicial del elemento
        element.style.transition = 'none';//le saco la transicion asi se aplica el efecto enseguida
        if (initialTop < windowHeight && bottom > 0 && offset < 320) {//si esta dentro del area visible AND si el piso no paso por la ventana && si el usuario esta a menos de 320px del offset
            const speed = parseFloat(element.dataset.speed) || 1;//si el elemento tiene definido un data-speed usa eso sino usa 1 (default)
            const newPosition = offset * speed * 0.10;//calcula la nueva posicion del elemento

            element.style.transform = `translateY(${newPosition}px)`;//le da la nueva posicion al elemento
        }
    });
});

window.addEventListener('scroll', function () {//lo mismo que el de arriba
    const offset = window.scrollY;

    edificios.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const initialTop = rect.top + offset;
        const bottom = rect.bottom + offset;
        element.style.transition = 'none';
        if (initialTop < windowHeight && bottom > 0 && offset < 320) {
            const speed = parseFloat(element.dataset.speed) || 1;
            const newPosition = offset * speed * 0.1;

            element.style.transform = `translateY(${newPosition}px)`;
        }
    });
});

window.addEventListener('scroll', function () {//lo mismo que el de arriba
    const offset = window.scrollY;

    telarañas.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const initialTop = rect.top + offset;
        const bottom = rect.bottom + offset;
        element.style.transition = 'none';
        if (initialTop < windowHeight && bottom > 0 && offset < 320) {
            const speed = parseFloat(element.dataset.speed) || 1;
            const newPosition = offset * speed * 0.10;

            element.style.transform = `translateY(${newPosition}px)`;
        }
    });
});

const cielo = document.querySelectorAll('#cielo1');
window.addEventListener('scroll', function () { //lo mismo que el de arriba
    const offset = window.scrollY;

    cielo.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const initialTop = rect.top + offset;
        const bottom = rect.bottom + offset;
        element.style.transition = 'none';
        if (initialTop < windowHeight && bottom > 0 && offset < 320) {
            const speed = parseFloat(element.dataset.speed) || 1;
            const newPosition = offset * speed * 0.3;
            element.style.transform = `translateY(${newPosition}px)`;

        }
    });
});
/*----------------------------------------CONSIGNA8-----------------------------------------*/
let container = document.getElementById('vengadores')
let layer = document.querySelectorAll('.img-vengadores');
let layerBC = document.querySelectorAll('.imagen-fondo');

container.onmousemove = function (e) {
    const layer0 = layer[0].getBoundingClientRect();//blackpanter
    const layer1 = layer[1].getBoundingClientRect();//hulk
    const layer2 = layer[2].getBoundingClientRect();//elastico
    let x = e.clientX;//tomo pos x del mouse
    let y = e.clientY;//tomo pos y del mouse
    layer[0].style.transform = `translateX(${x * -0.01}px) translateY(${y * 0.01}px) rotate(13.615deg)`;//muevo el elemento dependiendo la pos del mouse y le agrego 0.01 px a esa pos
    layer[1].style.transform = `translateX(${x * -0.03}px) translateY(${y * 0.03}px) rotate(7.515deg)`;//el rotate es para que la imagen quede igual que como estaba(ya tenia un rotate)
    layer[2].style.transform = `translateX(${x * -0.05}px) translateY(${y * 0.05}px) rotate(-12.483deg)`;

    layerBC[1].style.transform = `translateX(${x * 0.001}px) translateY(${y * 0.02}px)`;
    layerBC[2].style.transform = `translateX(${x * 0.001}px) translateY(${y * 0.04}px)`;

}

/*-------------------------------------CONSIGNA 5(header sticky)-----------------------------*/
const logo = document.getElementById('img-logo');//agarro el logo

const imgLogo = document.getElementById('img-logo');
const header = document.getElementById('contenedor-header')

const heightHeader = 176;

const originalWidth = 590; // Ancho original de la imagen
const originalHeight = 301; // Altura original de la imagen
const originalTop = 91;
const originalLeft = 330;

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const offset = window.scrollY;
    // Calcula un nuevo tamaño basado en el desplazamiento
    const newWidth = originalWidth - scrollY * 1;
    const newHeight = originalHeight - scrollY * 0.5;
    const newTop = originalTop - scrollY * 0.5;
    const newLeft = originalLeft + scrollY * 0.5;

    const newHeightHeader = heightHeader - scrollY * 0.4;
    if (newWidth > 133 && newHeight > 68) {//para ajustar el tamaño del logo y su posicion
        imgLogo.style.width = `${newWidth}px`;
        imgLogo.style.height = `${newHeight}px`;
        if (newTop > -25) {//ajusto altura, que no sea -25 px
            imgLogo.style.top = `${newTop}px`;
        }
        if (newLeft < 580) {//ajusto izquierda, que no sea menos de 574
            imgLogo.style.left = `${newLeft}px`;
        }
    } else {
        //ajustarHeader();
    }
    if (newHeightHeader >= 103) {//para ajustar el tamaño del header
        header.style.height = `${newHeightHeader}px`;
    }
    // Limita el tamaño mínimo de la imagen
});
/*------------------------------------------CONSIGNA 11(cards 3d)---------------------------*/
