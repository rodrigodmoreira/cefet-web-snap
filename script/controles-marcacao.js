// exercicio 2
const inputs = document.querySelectorAll('input, textarea')

function clearSelected () {
    marcacoes.forEach(m => m.classList.contains('selecionada') && m.classList.remove('selecionada'))
}

function updateInputValues(m) {
    const { left, top, width, height } = m.style
    const { titulo, conteudo, cor, formato } = m.dataset

    inputs.forEach(i => {
        switch(i.id || i.name) {
            case 'x-da-marcacao':
                i.value = parseFloat(left)
                break
            case 'y-da-marcacao':
                i.value = parseFloat(top)
                break
            case 'largura-da-marcacao':
                i.value = parseFloat(width)
                break
            case 'altura-da-marcacao':
                i.value = parseFloat(height)
                break
            
            case 'titulo-da-marcacao':
                i.value = titulo
                break
            case 'conteudo-da-marcacao':
                i.value = conteudo
                break
            case 'cor-da-marcacao':
                i.value = cor
                break
            
            case 'formato-da-marcacao':
                i.checked = i.value === formato
                break
        }
    })
}

marcacoes.forEach(m => {
    if (m.classList.contains('selecionada'))
        updateInputValues(m)

    m.addEventListener('click', e => {
        clearSelected()

        m.classList.toggle('selecionada')

        updateInputValues(m)
    })
})

// exercicio 3
function getSelectedMark () {
    let current = null
    marcacoes.forEach(m => {
        if (m.classList.contains('selecionada'))
            current = m
    })
    return current
}

function updateStyleFactory (attr) {
    return e => {
        const currentMark = getSelectedMark()
        currentMark.style[attr] = e.target.value + 'px'
    }
}

function updateDatasetFactory (dt) {
    return e => {
        const currentMark = getSelectedMark()
        currentMark.dataset[dt] = e.target.value
        marcacoes = document.querySelectorAll('.marcacao')
    }
}

const FORMATOS = ['formato-retangular', 'formato-oval']
inputs.forEach(i => {
    switch(i.id || i.name) {
        case 'x-da-marcacao':
            i.addEventListener('input', updateStyleFactory('left'))
            break
        case 'y-da-marcacao':
            i.addEventListener('input', updateStyleFactory('top'))
            break
        case 'largura-da-marcacao':
            i.addEventListener('input', updateStyleFactory('width'))
            break
        case 'altura-da-marcacao':
            i.addEventListener('input', updateStyleFactory('height'))
            break
        
        case 'titulo-da-marcacao':
            i.addEventListener('input', updateDatasetFactory('titulo'))
            break
        case 'conteudo-da-marcacao':
            i.addEventListener('input', updateDatasetFactory('conteudo'))
            break
        case 'cor-da-marcacao':
            i.addEventListener('input', updateDatasetFactory('cor'))
            break
        
        case 'formato-da-marcacao':
            i.addEventListener('change', e => {
                const currentMark = getSelectedMark()

                FORMATOS.filter(e => e === i.value).forEach(e => currentMark.classList.add(e))
                FORMATOS.filter(e => e !== i.value).forEach(e => currentMark.classList.remove(e))
            })
            break
    }
})
