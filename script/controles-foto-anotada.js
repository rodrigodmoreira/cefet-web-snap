// exercicio 4
const filterEl = document.querySelector('#filtro-da-foto')
const photo = document.querySelector('.foto-anotada img')

filterEl.addEventListener('input', e => {
    const selectedFilter = e.target.selectedOptions[0]
    if (selectedFilter) {
        console.log(selectedFilter)
        photo.style.filter = selectedFilter.value
    }
})


// desafio 1
const photoInput = document.querySelector('input#imagem')

function readImage(file) {
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file)
        return
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        photo.src = event.target.result
    })
    reader.readAsDataURL(file)
}

photoInput.addEventListener('input', e => {
    if (e.target.files) {
        const file = e.target.files[0]

        if (file) readImage(file)
    }
})
