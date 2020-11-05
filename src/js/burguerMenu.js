import descriptionSlider from './slider.js';

class BurguerMenu {
    constructor() {
        this.burgerMenu = document.querySelector('.burger-menu__burger-image');;
        this.menu = document.querySelector('.header__menu');
        this.closeBtn = document.querySelector('.menu__close-btn');;
        this.body = document.querySelector('body');

        this.menuActive;

        
        
    }

    showMenu() {
       
            this.burgerMenu.addEventListener('click', () => {
                this.menuActive = true;
                this.menu.classList.add('active');
                this.closeBtn.classList.add('active');
                descriptionSlider.darkContent();
                console.log(this.menuActive)
               
            });
        
    }

    hideMenu() {
       
            this.closeBtn.addEventListener('click', () => {
          
                this.menu.classList.remove('active');
                this.closeBtn.classList.remove('active');
                 descriptionSlider.lightContent();
               
            });

    
    }
/*
    hideMenuOnOffClick() {
        this.body.addEventListener('click', (e) => {
         if(e.target !== this.menu) {
            this.menu.classList.remove('active');
            this.closeBtn.classList.remove('active');
             descriptionSlider.lightContent();
         }
                   
        });
    }
*/

}

export default new BurguerMenu();