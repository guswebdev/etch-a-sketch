const d = document;

export function pintarCuadricula (num) {
    const canva = d.querySelector('.container-cuadricula')
    const template = d.querySelector('#template-cuadricula').content
    const fragment = d.createDocumentFragment()
    const grilla = num * num

    canva.style = `grid-template-columns:repeat(${num}, 1fr);grid-template-rows:repeat(${num},1fr);`

    for(let i = 0; i < grilla; i++){
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    }

    canva.appendChild(fragment)

}