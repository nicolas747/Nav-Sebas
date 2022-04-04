
// Con esta funcion haces que el circulo se desplace hacia los lados al darle click a los iconos
const lista = document.querySelectorAll('.lista');
function activeLink(){
    lista.forEach((item) =>
    item.classList.remove('activado'));
    this.classList.add('activado');
}

lista.forEach((item) =>
item.addEventListener('click',activeLink));