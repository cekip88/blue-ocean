class Site {
    constructor () {
        this.header = document.querySelector ('header');
        this.burgerButton = document.querySelector ('.head-burger');
        this.headNavProductButton = document.querySelector ('.head-nav-product');
        this.sertButton = document.querySelectorAll ('.sertificates-link');
        this.sertClose = document.querySelectorAll ('.sertificates-full-close');
        this.articlesArray = [{
            title: 'Полипропиленовые трубы признак качества' ,
            date: '20.02.2020' ,
            titlePhoto: 'pipe.jpg' ,
            titleParagrath: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
            paragraths: [{
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...' ,
                photo: 'pipe.jpg' ,
                photoClass: 'articles-unit-hidden-photo-right'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
                photo: 'pipe.jpg',
                photoClass: 'articles-unit-hidden-photo-left'
            } , {
                photo: 'pipe.jpg'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...'
            }]
        }];
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
        let sertFullArr = document.querySelectorAll('.sertificates-full');
        if(sertFullArr){
            sertFullArr.forEach(function (el) {
                el.removeAttribute('style');
            })
        }
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

    // Создает скелет статьи
    createArticleTemplate(){

        let articleLi = document.createElement('LI'),
            articleTitle = document.createElement('H5'),
            articleDate = document.createElement('DIV'),
            articleBody = document.createElement('DIV'),
            articleShow = document.createElement('DIV'),
            articlePhoto = document.createElement('DIV'),
            articleTitlePar = document.createElement('P'),
            articleLinkCont = document.createElement('DIV'),
            articleLink = document.createElement('A'),
            articleHidden = document.createElement('DIV');

        articleLi.className = 'articles-unit';
        articleTitle.className = 'articles-unit-title';
        articleDate.className = 'articles-unit-date';
        articleBody.className = 'articles-unit-body';
        articleShow.className = 'articles-unit-show';
        articlePhoto.className = 'articles-unit-photo';
        articleTitlePar.className = 'articles-unit-desc';
        articleLinkCont.className = 'articles-unit-link';
        articleHidden.className = 'articles-unit-hidden';
        articleLink.setAttribute('href','#');
        articleLink.innerText = 'Показать полностью';

        articleLi.append(articleTitle);
        articleLi.append(articleDate);
        articleLi.append(articleBody);
        articleBody.append(articleShow);
        articleBody.append(articleLinkCont);
        articleBody.append(articleHidden);
        articleShow.append(articlePhoto);
        articleShow.append(articleTitlePar);
        articleLinkCont.append(articleLink);

        return articleLi;
    }
    // Создает статью по шаблону
    createArticle(){
        const _ = this;
        if(document.querySelector('.articles')){
            _.articlesArray.forEach(function (el) {
                let temp = _.createArticleTemplate();
                temp.querySelector('.articles-unit-title').innerText = el.title;
                temp.querySelector('.articles-unit-date').innerText = el.date;
                temp.querySelector('.articles-unit-photo').innerHTML = `<img src="img/${el.titlePhoto}">`;
                temp.querySelector('.articles-unit-desc').innerText = `${el.titleParagrath}`;
                el.paragraths.forEach(function (el) {
                    let parag;
                    if(el.text){
                        parag = document.createElement('P');
                        parag.className = 'articles-unit-hidden-text';
                        if(el.photo) {
                            el.text = `<img src = 'img/${el.photo}'>` + el.text;
                        }
                        parag.innerHTML = `${el.text}`;
                        if(el.photoClass) parag.classList.add(`${el.photoClass}`)
                    } else {
                        parag = document.createElement('DIV');
                        parag.className = 'articles-unit-hidden-photo';
                        let image = document.createElement('IMG');
                        image.setAttribute('src',`img/${el.photo}`);
                        parag.append(image);
                    }
                    temp.querySelector('.articles-unit-hidden').append(parag);
                });
                let closeLinkCont = document.createElement('DIV');
                let closeLink = document.createElement('A');
                closeLinkCont.className = 'articles-unit-link';
                closeLink.textContent = 'Свернуть статью';
                closeLink.setAttribute('href','#');
                closeLinkCont.append(closeLink);
                temp.querySelector('.articles-unit-hidden').append(closeLinkCont);
                document.querySelector('.articles-page').append(temp);
            })
        }
    };

    // Считывает высоты скрытой и показанной частей статьи и записывает ее в аттрибут
    articlesGetHeight(){
        let articles = document.querySelectorAll('.articles-unit-hidden');
        if(articles){
            let workWithTimeDelation = function () {
                articles.forEach(function (item) {
                    let itemChildren = item.children;
                    let itemHeight = 0;
                    for(let i = 0; i < itemChildren.length; i++){
                        itemHeight += itemChildren[i].offsetHeight;
                    }
                    item.setAttribute('data-fullHeight',`${itemHeight}`);
                });
                let articlesShow = document.querySelectorAll('.articles-unit-show');
                articlesShow.forEach(function (item) {
                    item.setAttribute('data-fullHeight',`${item.offsetHeight}`);
                    item.setAttribute('style',`height:${item.offsetHeight}px`)
                })
            };
            setTimeout(workWithTimeDelation,500)
        }
    }
    // Метод плавного скролла
    slowScrollTo(start,finish){
        finish -= 50;

        let step = (start > finish) ? start - finish : finish - start,
            scrTo = start;

        step /= 100;

        let func = function(){

            if(start > finish) scrTo -= step;
            else scrTo += step;

            window.scrollTo(0, scrTo);

            if(start > finish) {if(scrTo <= (finish)) clearInterval(interval);}
            else {if(scrTo >= (finish)) clearInterval(interval);}

        };
        let interval = setInterval(func, 1);
    }
    // Метод который разворачивает статью
    articlesSwitchShow(e){
        const _ = this;
        let article = e.target;
        while(article.className != 'articles-unit') article = article.parentElement;

        _.slowScrollTo(window.scrollY,article.offsetTop);

        let show = article.querySelector('.articles-unit-show'),
            hidden = article.querySelector('.articles-unit-hidden'),
            hiddenHeight = hidden.getAttribute('data-fullHeight'),
            showHeight = show.getAttribute('data-fullHeight');

        let articleShowed = false;
        if(hidden.offsetHeight) articleShowed = true;

        if(!articleShowed) {
            show.setAttribute('style','height:0px');
            article.querySelector('.articles-unit-link').setAttribute('style','display:none')
        } else {
            show.setAttribute('style',`height:${showHeight}px`);
            article.querySelector('.articles-unit-link').removeAttribute('style');
        }

        let switchShowHide = function(){
            if(!articleShowed) hidden.setAttribute('style',`height:${hiddenHeight}px`);
            else hidden.setAttribute('style',`height:0px`);
        };
        setTimeout(switchShowHide,350);
    }

    //Метод который вешает обработчики на кнопки
    eHandler(){
        const _ = this;
        // Вешает обработчик на кнопки показа статьи
        let articlesButton = document.querySelectorAll ('.articles-unit-link');
        if(articlesButton){
            articlesButton.forEach(function (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    _.articlesSwitchShow(e);
                });
            });
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
    async init(){
        const _ = this;
        await _.sertRemoveAttr();
        await _.createArticle();
        await _.articlesGetHeight();
        await _.eHandler();
    }
}

let site = new Site();
site.init();
