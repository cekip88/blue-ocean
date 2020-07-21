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
            if(!window.pageYOffset){
                _.header.classList.remove('head-scrolled')
            }
        }
    }
}

let site = new Site();
let burgerButton = document.querySelector('.head-burger-button')


burgerButton.addEventListener('click',function () {
    site.burgerClick()
});
window.addEventListener('scroll',function () {
    site.scrl();
},{passive:true});
site.scrl();