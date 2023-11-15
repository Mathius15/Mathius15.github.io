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


const edificios = document.querySelectorAll('.edificios'); //agarro todos los elementos con la clase hidden
edificios.forEach((el) => observerEdificios.observe(el));//observa todos los elementos hiddenElements

const arañas = document.querySelectorAll('.arañas');
arañas.forEach((el) => observerArañas.observe(el));

const telarañas = document.querySelectorAll('.telarañas');
telarañas.forEach((el) => observerTelaraña.observe(el));


//parralax
const parallaxDuende = document.getElementById('img-duende'); //agarro la imagen del duende verde
let initialTopDuende = 0; //es de donde arranca a moverse la imagen
window.addEventListener('scroll', function () {
    let offset = window.scrollY;//toma la pos Y de donde esta el usuario
    let newPosition = initialTopDuende + offset * 0.3; //hace que la pos sea menos a la del scroll
    if (newPosition < 150) {
        parallaxDuende.style.top = newPosition + 'px'; //cambia la pos dependiendo del scroll
    }
})