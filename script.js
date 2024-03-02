window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("abajo", this.window.scrollY>0)
})

document.addEventListener('DOMContentLoaded', function(){
    // Selecciona el contenedor del carrusel y aplica la función slick()
    $('.carrusel-imagenes').slick();
});
