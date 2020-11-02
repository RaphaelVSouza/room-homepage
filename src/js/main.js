//Need to refactor

let descriptions = [
    {
        imageDesktop: '../public/img/desktop-image-hero-1.jpg',
        imageMobile: '../public/img/mobile-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        content: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
    },

    {
        imageDesktop: '../public/img/desktop-image-hero-2.jpg',
        imageMobile: '../public/img/mobile-image-hero-2.jpg',
        title: `We are available all across the globe`,
        content:`With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        imageDesktop: '../public/img/desktop-image-hero-3.jpg',
        imageMobile: '../public/img/mobile-image-hero-3.jpg',
        title:`Manufactured with the best materials`,
        content:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    }
]

const $descTitle = document.querySelector('.description__title');
const $descContent = document.querySelector('.description__content')
const $descPicDesktop = document.querySelector('.description__image--desktop');
const $descPicMobile = document.querySelector('.description__image--mobile')


const $descriptionGallery = document.querySelector('.description');

const $arrowLeft = document.querySelector('.description__arrow-left');
const $arrowRight = document.querySelector('.description__arrow-right');

function loadDescription(index) {

    $descPicMobile.setAttribute('srcset', descriptions[index].imageMobile);   
    $descPicDesktop.setAttribute('src', descriptions[index].imageDesktop)
    $descTitle.textContent = descriptions[index].title;
    $descContent.textContent = descriptions[index].content;
}




function descriptionSlider() {
    let currentIndex = 0;
    
    
    $arrowLeft.addEventListener('click', () => {
        currentIndex = currentIndex <= 0 ? descriptions.length -1 : currentIndex - 1;
        loadDescription(currentIndex);
    })

    $arrowRight.addEventListener('click', () => {
        currentIndex = currentIndex >= descriptions.length - 1 ? 0 : currentIndex + 1;
        loadDescription(currentIndex);
    })
   
    loadDescription(currentIndex);
    
}

descriptionSlider();








const $burgerMenu = document.querySelector('.burger-menu__burger-image');
const $menu = document.querySelector('.header__menu');
function changeBurgerMenu(burgerMenu, menu) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('toggle')
        menu.classList.toggle('active')
        console.log('clicado')
    })
}

changeBurgerMenu($burgerMenu, $menu);
