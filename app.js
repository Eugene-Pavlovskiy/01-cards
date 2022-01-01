const slides = document.querySelectorAll('.slide')

//*1*
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()


        slide.classList.add('active')
    })
}

//*2*
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}