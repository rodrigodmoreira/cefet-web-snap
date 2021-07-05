// exercicio 0
const bodyEl = document.querySelector('body')
const ocultMarkEl = document.querySelector('#visibilidade-das-marcacoes')

ocultMarkEl.addEventListener('input', e => {
    bodyEl.classList.toggle('marcacoes-ocultas')    
})


// exercicio 1
let marcacoes = document.querySelectorAll('.marcacao')
const balaoEl = document.querySelector('#balaozinho')

const mousePos = { x:0, y: 0 }
bodyEl.addEventListener('mousemove', e => {
    mousePos.x = e.pageX
    mousePos.y = e.pageY

    balaoEl.style.top = mousePos.y + 'px'
    balaoEl.style.left = mousePos.x + 'px'
})

function cleanChildren (node) {
    while (node.firstChild)
        node.removeChild(node.lastChild)
}

marcacoes.forEach(m => {
    m.addEventListener('mouseenter', () => {
        const { titulo, conteudo, cor } = m.dataset
        
        const h2 = document.createElement('h2')
        const p = document.createElement('p')

        h2.innerHTML = titulo
        p.innerHTML = conteudo

        h2.style.color = cor
        p.style.color = cor

        balaoEl.appendChild(h2)
        balaoEl.appendChild(p)
    })

    m.addEventListener('mouseleave', () => cleanChildren(balaoEl))
})

