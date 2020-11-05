import descriptions from './descriptions.js';

const $descText = document.querySelector('.description__text')
const $descImg = document.querySelector('.description__image img')
const $descImgDesktop = document.querySelector('.description__image--desktop');
const $descImgMobile = document.querySelector('.description__image--mobile')

const $descTitle = document.querySelector('.description__title');
const $descContent = document.querySelector('.description__content');

const $arrowLeft = document.querySelector('.description__arrow-left');
const $arrowRight = document.querySelector('.description__arrow-right');

class DescriptionSlider {
    constructor(imgMobile, imgDesktop, title, content, index) {
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.title = title;
        this.content = content

        this.loadContent();
    }

    loadContent() {
        if(!this.index) {
            this.index = 0;
        };

    $descImgMobile.setAttribute('srcset', descriptions[this.index].imageMobile);   
    $descImgDesktop.setAttribute('src', descriptions[this.index].imageDesktop)
    $descTitle.textContent = descriptions[this.index].title;
    $descContent.textContent = descriptions[this.index].content;
    }

    next() {
        $arrowRight.addEventListener('click', () => {

            this.index = this.index <= 0 ? descriptions.length -1 : this.index - 1;
            this.loadContent(this.index);
        })
    
    } 

    previous() {
        $arrowLeft.addEventListener('click', () => {
            this.index = this.index <= 0 ? descriptions.length -1 : this.index - 1;
            this.loadContent(this.index);
        })
    }

    darkContent() {
        $descImg.classList.add('dark');
        $descText.classList.add('dark');
        $descContent.classList.add('dark');
    }

    lightContent() {
        $descImg.classList.remove('dark');
        $descText.classList.remove('dark');
        $descContent.classList.remove('dark');
    }
}

export default new DescriptionSlider();
