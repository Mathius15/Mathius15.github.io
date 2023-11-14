const observer = new IntersectionObserver((entries) => {//se ejecuta cada vez que la visibilidad de un objeto cambia
    entries.forEach((entry) => {//usa foreach porque pueden ser varios elementos
        console.log(entry)
        if (entry.isIntersecting) {//si ese objeto es visible le cambia la clase a show
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden'); //agarro todos los elementos con la clase hidden
hiddenElements.forEach((el) => observer.observe(el));//observa todos los elementos hiddenElements


const parallaxDuende = document.getElementById('img-duende'); //agarro la imagen del duende verde
let initialTop = 130; //es de donde arranca a moverse la imagen
window.addEventListener('scroll', function () {
    let offset = window.scrollY;//toma la pos Y de donde esta el usuario
    let newPosition = initialTop + offset * 0.2; //hace que la pos sea menos a la del scroll
    if(newPosition <250){
        parallaxDuende.style.top = newPosition + 'px'; //cambia la pos dependiendo del scroll
    }
})