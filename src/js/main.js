const burgerMenu = document.querySelector('.burger-menu');
const mbMenu = document.querySelector('.mb-menu');
const darkLayer = document.querySelector('.dark-layer');

const topSlider = document.querySelector('.top-slider');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('change');
    mbMenu.classList.toggle('active');
    darkLayer.classList.toggle('active');

});

darkLayer.addEventListener('click', () => {
    burgerMenu.classList.remove('change');
    mbMenu.classList.remove('active');
    darkLayer.classList.remove('active');
});

document.addEventListener('scroll', () => {
    burgerMenu.classList.remove('change');
    mbMenu.classList.remove('active');
    darkLayer.classList.remove('active');
});

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    gap: 0,
    keyboard: true,
    arrows: true,
});

glide.mount();
