class Site {
    constructor (){
        this.header = document.querySelector('header')
    }

    // При скролле добавляет или убирает класс scrolled хедеру
    scrl(){
        const _ = this;
        let scrolled = window.pageYOffset;
        if(scrolled > 0){
            if(!_.header.classList.contains('head-scrolled')){
                _.header.classList.add('head-scrolled')
            }
        }
        else {
            if(!_.header.classList.contains('head-mobile-row-active')){
                if(_.header.classList.contains('head-scrolled')){
                    _.header.classList.remove('head-scrolled')
                }
            }
        }
    }

    // Показывает или скрывает мобильное меню
    burgerClick(){
        const _ = this;
        _.header.classList.toggle('head-mobile-row-active');
        if(_.header.classList.contains('head-mobile-row-active')){
            if(!_.header.classList.contains('head-scrolled')){
                _.header.classList.add('head-scrolled')
            }
        } else {
            _.header.classList.remove('head-mobile-row-hidden');
            if(!window.pageYOffset){
                _.header.classList.remove('head-scrolled')
            }
        }
    }

    // Показывает подменю продуктов
    productClick(){
        const _ = this;
        _.header.classList.toggle('head-mobile-row-hidden')
    }
}

let site = new Site();
let burgerButton = document.querySelector('.head-burger-button')
let productButton = document.querySelector('.head-nav-product')



burgerButton.addEventListener('click',function (e) {
    site.burgerClick()
});

productButton.addEventListener('click',function (e) {
    e.preventDefault();
    site.productClick()
});

window.addEventListener('scroll',function () {
    site.scrl();
},{passive:true});
site.scrl();