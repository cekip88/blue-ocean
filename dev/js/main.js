class Site {
    constructor (){
        this.header = document.querySelector('header');
        this.burgerButton = document.querySelector('.head-burger');
        this.headNavProductButton = document.querySelector('.head-nav-product');
        this.sertButton = document.querySelectorAll('.sertificates-link');
        this.sertClose = document.querySelectorAll('.sertificates-full-close');
        this.articleButton = document.querySelectorAll('.articles-unit-open');
        this.articleButtonClose = document.querySelectorAll('.articles-unit-close');
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

    // Считывает высоты скрытой и показанной частей статьи и записывает ее в аттрибут
    articlesGetHeight(){
        let articles = document.querySelectorAll('.articles-unit-hidden');
        if(articles){
            let asdf = function () {
                articles.forEach(function (item) {
                    let itemChildren = item.children;
                    let itemHeight = 0;
                    let mul  = itemChildren.length * 20;
                    for(let i = 0; i < itemChildren.length; i++){
                        itemHeight += itemChildren[i].offsetHeight;
                    }
                    itemHeight += mul;
                    item.setAttribute('fullHeight',`${itemHeight}`);
                });
                let articlesShow = document.querySelectorAll('.articles-unit-show');
                articlesShow.forEach(function (item) {
                    item.setAttribute('fullHeight',`${item.offsetHeight}`);
                    item.setAttribute('style',`height:${item.offsetHeight}px`)
                })
            };
            setTimeout(asdf,500)
        }
    }
    // Метод плавного скролла на верх
    slowScrollTo(start,finish){
        let sLength = start,
            step = ((start - finish) / 100);
        let func = function(){
            sLength = sLength - step;
            window.scrollTo(0, sLength)
        };
        console.log(sLength,step);
        while(sLength > finish){
            setInterval(func,1)
        }
    }
    // Метод который разворачивает статьи
    articlesShowFull(e){
        const _ = this;
        let article = e.target;
        while(article.className != 'articles-unit'){
            article = article.parentElement;
        }

        _.slowScrollTo(window.scrollY,article.offsetTop);

        let hidden = article.querySelector('.articles-unit-hidden'),
            hiddenHeight = hidden.getAttribute('fullHeight');
        hidden.setAttribute('style',`height:${hiddenHeight}px`);
        let showHidden = function(){
            let show = article.querySelector('.articles-unit-show');
            show.setAttribute('style','height:0px');
        };
        setTimeout(showHidden,350);
    }
    // Метод который сворачивает статьи
    articlesCloseFull(e){
        let article = e.target;
        while(article.className != 'articles-unit'){
            article = article.parentElement;
        }
        window.scrollTo(0, article.offsetTop);
        let show = article.querySelector('.articles-unit-show'),
            showHeight = show.getAttribute('fullHeight');
        show.setAttribute('style',`height:${showHeight}px`);
        let showHidden = function(){
            let hidden = article.querySelector('.articles-unit-hidden');
            hidden.setAttribute('style',`height:0px`);
        };
        setTimeout(showHidden,350);
    }

    //Метод который вешает обработчики на кнопки
    eHandler(){
        const _ = this;
        // Вешает обработчик на кнопки показа статьи
        if(_.articleButton){
            _.articleButton.forEach(function (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    _.articlesShowFull(e)
                })
            });
        }
        if(_.articleButtonClose){
            _.articleButtonClose.forEach(function (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    _.articlesCloseFull(e)
                })
            })
        }
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
            [...this.sertButton, ...this.sertClose].forEach((el) => {
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
        this.articlesGetHeight();
        this.eHandler();
    }
}

let site = new Site();
site.init();
