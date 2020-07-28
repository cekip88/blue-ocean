class Site {
    constructor (){
        this.header = document.querySelector('header');
        this.burgerButton = document.querySelector('.head-burger-button');
        this.headNavProductButton = document.querySelector('.head-nav-product');
        this.sertButton = document.querySelectorAll('.sertificates-link');
        this.sertBg = document.querySelectorAll('.sertificates-full');
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

    // Убирает Display:none у сертификатов
    sertRemoveAttr(){
        const _ = this;
        let sertFullArr = document.querySelectorAll('.sertificates-full');
        sertFullArr.forEach(function (el) {
            el.removeAttribute('style');
        })
    }
    // Показывает или скрывает сертификат полностью
    sertClick(e){
        const _ = this;
        let clickTarget = e.target;
        while(clickTarget.className != 'sertificates-item'){
            clickTarget = clickTarget.parentNode;
        }
        let cont = clickTarget.querySelector('.sertificates-full');
        cont.classList.toggle('sertificates-full-show');
    }


    //Метод который вешает обработчики на кнопки
    eHandler(){
        const _ = this;
        // Вешает обработчик на кнопку бургера
        if(this.burgerButton){
            this.burgerButton.addEventListener('click',(e) => {
                e.preventDefault();
                _.burgerClick()
            });
        }
        // Вешает обработчики на кнопку меню Продукты
        if(this.headNavProductButton){
            this.headNavProductButton.addEventListener('click', (e) => {
                e.preventDefault();
                _.productClick()
            });
        }
        // Вешает обработчики на сертификаты
        if(this.sertButton){
            [...this.sertButton, ...this.sertBg].forEach((el) => {
                el.addEventListener('click',(e) => {
                    e.preventDefault();
                    _.sertClick(e);
                })
            });
        }
        // Добавляет действия при скролле
        window.addEventListener('scroll', () => {
            _.scrl();
        },{passive:true});
        _.scrl();
    }
    //Метод который запускает нужные методы
    init(){
        if(document.querySelector('.sertificates-full')){
            this.sertRemoveAttr();
        }
        this.eHandler();
    }
}

let site = new Site();
site.init();
