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

    // Показывает сертификат полностью
    sertClick(e){
        const _ = this;
        let clickTarget = e.target;
        if(clickTarget.className != 'sertificates-item'){
            while(clickTarget.className != 'sertificates-item'){
                clickTarget = clickTarget.parentNode;
            }
        }
        clickTarget = clickTarget.querySelector('.sertificates-full');
        clickTarget.classList.toggle('sertificates-full-show');
    }
}

let site = new Site();
let burgerButton = document.querySelector('.head-burger-button');
let productButton = document.querySelector('.head-nav-product');
let sertButton = document.querySelectorAll('.sertificates-link');
let sertClose = document.querySelectorAll('.sertificates-full-close');


burgerButton.addEventListener('click',function (e) {
    site.burgerClick()
});

productButton.addEventListener('click',function (e) {
    e.preventDefault();
    site.productClick()
});

sertButton.forEach(function (el) {
    el.addEventListener('click',function (e) {
        e.preventDefault();
        site.sertClick(e);
    })
});
sertClose.forEach(function (el) {
    el.addEventListener('click',function (e) {
        e.preventDefault();
        site.sertClick(e);
    })
});


window.addEventListener('scroll',function () {
    site.scrl();
},{passive:true});
site.scrl();