import { pintarCuadricula } from "./pintar-cuadricula.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    pintarCuadricula(16)
})

d.addEventListener('mouseover', e => {
    //console.log(e.target)
    if(e.target.matches('.item-cuadricula')){
        e.target.classList.add('color-black')
    }
})