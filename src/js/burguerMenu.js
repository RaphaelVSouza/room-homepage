import descriptionSlider from './slider.js';

const $burgerMenu = document.querySelector('.burger-menu__burger-image');
const $menu = document.querySelector('.header__menu');
const $closeBtn = document.querySelector('.menu__close-btn');


class BurguerMenu {
    constructor(burgerMenu, menu, closeBtn) {
        this.burgerMenu = burgerMenu;
        this.menu = menu;
        this.closeBtn = closeBtn;

    }

    showMenu() {
        this.burgerMenu.addEventListener('click', () => {
        this.menu.classList.add('active');
        this.closeBtn.classList.add('active');
        descriptionSlider.darkContent();
        });
    }

    hideMenu() {
        this.closeBtn.addEventListener('click', () => {
            this.menu.classList.remove('active');
            this.closeBtn.classList.remove('active');
            descriptionSlider.lightContent();
        })
    }

}

export default new BurguerMenu($burgerMenu, $menu, $closeBtn);