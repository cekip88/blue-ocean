class Site {
    constructor () {
        this.header = document.querySelector ('header');
        this.burgerButton = document.querySelector ('.head-burger');
        this.headNavProductButton = document.querySelector ('.head-nav-product');
        this.sertButton = document.querySelectorAll ('.sertificates-link');
        this.sertClose = document.querySelectorAll ('.sertificates-full-close');
        this.articlesArray = [
            {
            title: 'Полипропиленовые трубы признак качества' ,
            date: '20.02.2020' ,
            titlePhoto: 'pipe.jpg' ,
            titleParagrath: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
            paragraths: [{
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...' ,
                photo: 'slide-1.jpg' ,
                photoClass: 'articles-unit-hidden-photo-right'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
                photo: 'slide-1.jpg',
                photoClass: 'articles-unit-hidden-photo-left'
            } , {
                photo: 'slide-1.jpg'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...'
            }]
        },
            {
            title: 'Водяной теплый пол Blue Ocean' ,
            date: '10.08.2020' ,
            titlePhoto: 't-pol.jpg' ,
            titleParagrath: 'Водяной тёплый пол - это система обогрева помещений, в которой теплоноситель циркулирует по замкнутому контуру трубы, находящемуся в бетонной стяжке. Рекомендуем использовать его в помещениях с автономной системой отопления. При этом максимальную экономию Вы получите при установке в систему отопления твердотопливного или газового котла.',
            paragraths: [{
                text: 'Водяной тёплый пол - это система обогрева помещений, в которой теплоноситель циркулирует по замкнутому контуру трубы, находящемуся в бетонной стяжке. Рекомендуем использовать его в помещениях с автономной системой отопления. При этом максимальную экономию Вы получите при установке в систему отопления твердотопливного или газового котла.' ,
                photo: 't-pol.jpg' ,
                photoClass: 'articles-unit-hidden-photo-right'
            } , {
                text: 'Водяной тёплый пол - это система обогрева помещений, в которой теплоноситель циркулирует по замкнутому контуру трубы, находящемуся в бетонной стяжке. Рекомендуем использовать его в помещениях с автономной системой отопления. При этом максимальную экономию Вы получите при установке в систему отопления твердотопливного или газового котла.',
                photo: 't-pol.jpg',
                photoClass: 'articles-unit-hidden-photo-left'
            } , {
                photo: 't-pol.jpg'
            } , {
                text: 'Водяной тёплый пол - это система обогрева помещений, в которой теплоноситель циркулирует по замкнутому контуру трубы, находящемуся в бетонной стяжке. Рекомендуем использовать его в помещениях с автономной системой отопления. При этом максимальную экономию Вы получите при установке в систему отопления твердотопливного или газового котла.'
            }]
        },
            {
                title: 'Полипропиленовые трубы признак качества' ,
                date: '20.02.2020' ,
                titlePhoto: 'pipe.jpg' ,
                titleParagrath: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
                paragraths: [{
                    text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...' ,
                    photo: 'slide-1.jpg' ,
                    photoClass: 'articles-unit-hidden-photo-right'
                } , {
                    text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
                    photo: 'slide-1.jpg',
                    photoClass: 'articles-unit-hidden-photo-left'
                } , {
                    photo: 'slide-1.jpg'
                } , {
                    text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...'
                }]
            }];
        this.firstArticle = {
            title: 'Полипропиленовые трубы признак качества' ,
            date: '20.02.2020' ,
            titlePhoto: 'pipe.jpg' ,
            titleParagrath: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
            paragraths: [{
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...' ,
                photo: 'slide-1.jpg' ,
                photoClass: 'articles-unit-hidden-photo-right'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...',
                photo: 'slide-1.jpg',
                photoClass: 'articles-unit-hidden-photo-left'
            } , {
                photo: 'slide-1.jpg'
            } , {
                text: 'В век современных технологий эра стальных труб подошла к концу, потому как стальные трубы не так долговечны, со временем они начинают ржаветь и в воду попадают продукты разложения металла. Полипропиленовые трубы лишены этого минуса. Так же полипропилен намного легче, гибче и проще в монтаже. Ну и конечно же внешний вид, гладкие белые ровные трубы, их легко вплести практически в любой дизайн...'
            }]
        }
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

    // Выделяет пункт меню соответствующий странице
    showActivePage(){
        let curPage = document.location.href;
        curPage = curPage.split('/');
        if(curPage[curPage.length - 1] === 'article.html') {
            let page = document.querySelector('.head-nav-article');
            page.classList.add('head-nav-active');
        } else if(curPage[curPage.length - 1] === 'products.html') {
            let page = document.querySelector('.head-nav-product');
            page.classList.add('head-nav-active');
        } else {
            let page = document.querySelector('.head-nav-main');
            page.classList.add('head-nav-active');
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

    // Создает HTML элемент
    createHtmlElem(tagName,dataAttr = null,childs = null,append = true){
        let elem = document.createElement(`${tagName}`);
        if(tagName == 'IMG')elem.setAttribute('alt',' ');
        if(tagName == 'A') elem.setAttribute('href','#');
        if(dataAttr) {
            for (let key in dataAttr){
                if(key == 'classList') elem.classList.add(`${dataAttr[key]}`);
                else if(key == 'className') elem.className = dataAttr[key];
                else if(key == 'innerText') elem.innerText = dataAttr[key];
                else if(key == 'textContent') elem.textContent = dataAttr[key];
                else if(key == 'innerHtml') elem.innerHTML = dataAttr[key];
                else elem.setAttribute(`${key}`,`${dataAttr[key]}`)
            }
        }
        if(childs){
            childs.forEach(function (el) {
                if(append) elem.append(el);
                else elem.prepend(el)
            })
        }
        return elem;
    }

    // Создает статью по шаблону
    createArticle(el){
        const _ = this;
        if(!el.titlePhoto) el.titlePhoto = 'no-photo.jpg';
        let temp = _.createHtmlElem('LI',{class:'articles-unit'},[
            _.createHtmlElem('H5',{class:'articles-unit-title',innerText:`${el.title}`}),
            _.createHtmlElem('DIV',{class:'articles-unit-date',innerText:`${el.date}`}),
            _.createHtmlElem('DIV',{class:'articles-unit-body'},[
                _.createHtmlElem('DIV',{class:'articles-unit-show'},[
                    _.createHtmlElem('DIV',{class:'articles-unit-photo'},[
                        _.createHtmlElem('IMG',{src:`img/${el.titlePhoto}`})
                    ]),
                    _.createHtmlElem('DIV',{class:'articles-unit-desc-cont'},[
                        _.createHtmlElem('P',{class:'articles-unit-desc',innerText:`${el.titleParagrath}`}),
                        _.createHtmlElem('DIV',{class: 'articles-unit-link articles-unit-link-blue'},[
                            _.createHtmlElem('A',{innerText:'Показать полностью'})
                        ]),
                    ])
                ]),
                _.createHtmlElem('DIV',{class:'articles-unit-hidden'},[
                    _.createHtmlElem('DIV',{class: 'articles-unit-link'},[
                        _.createHtmlElem('A',{innerText:'Свернуть статью'})
                    ])
                ])
            ]),
        ]);
        for(let i = 0; i < el.paragraths.length; i++) {
            let parag,
                elem = el.paragraths[(el.paragraths.length - 1) - i];
            if(elem.text){
                parag = _.createHtmlElem('P', {classList:`articles-unit-hidden-text`, innerText:`${elem.text}`});
                if(elem.photo) {
                    parag.prepend(_.createHtmlElem('IMG',{src:`img/${elem.photo}`}));
                    parag.classList.add(`${elem.photoClass}`)
                }
            } else {
                parag = _.createHtmlElem('DIV',{class: 'articles-unit-hidden-photo'},[
                    _.createHtmlElem('IMG',{src:`img/${elem.photo}`})
                ]);
            }
            temp.querySelector('.articles-unit-hidden').prepend(parag);
        }
        return temp;
    }
    // Создает все полученные статьи
    createArticles(){
        const _ = this;
        if(document.querySelector('.articles-page')){
            _.articlesArray.forEach(function (el) {
                let temp = _.createArticle(el);
                document.querySelector('.articles-page').append(temp);
            })
        }
    };

    // Метод плавного скролла
    slowScrollTo(start,finish){
        finish -= 60;

        let step = (start > finish) ? start - finish : finish - start,
            scrTo = start;

        step /= 10;

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
    async articlesSwitchShow(e){
        const _ = this;
        let article = e.target;
        while(!article.classList.contains('articles-unit')) article = article.parentNode;
        let showed = false;
        if(article.classList.contains('articles-unit-active')) showed = true;
        let articles = document.querySelectorAll('.articles-unit');
        articles.forEach(function (el) {
            if(el.classList.contains('articles-unit-active')) el.classList.remove('articles-unit-active');
        });
        if(showed === false) article.classList.add('articles-unit-active');

        _.slowScrollTo(window.scrollY,article.offsetTop);
    }
    // Заполняет фильтр статей значениями по умолчанию
    setArticlesFilter(){
        const _ = this;
        let filterCont = document.querySelector('.articles-filter');
        if(filterCont){
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            if(month < 10) month = '0' + month;
            let year = date.getFullYear();
            let today = `${year}-${month}-${day}`;
            let filterFinish = filterCont.querySelector('.articles-filter-finish');
            filterFinish.value = today;

            let firstDate = _.firstArticle.date.split('.');
            firstDate = firstDate[2] + '-' + firstDate[1] + '-' + firstDate[0];
            let filterStart = filterCont.querySelector('.articles-filter-start');
            filterStart.value = firstDate;
        }
    }

    //Метод который вешает обработчики
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
        if(_.burgerButton){
            _.burgerButton.addEventListener('click',(e) => {
                e.preventDefault();
                _.burgerClick()
            });
        }
        // Вешает обработчики на кнопку меню Продукты
        if(_.headNavProductButton){
            _.headNavProductButton.addEventListener('click', (e) => {
                e.preventDefault();
                _.productClick()
            });
        }
        // Вешает обработчики на сертификаты
        if(_.sertButton){
            [..._.sertButton, ..._.sertClose].forEach(function(el){
                el.addEventListener('click',function(e){
                    e.preventDefault();
                    _.sertClick(e);
                })
            });
        }
        // Добавляет действия при скролле
        window.addEventListener('scroll', () => {
            _.scrl();
        },{passive:true});
    }

    //Метод который запускает нужные методы
    init(){
        const _ = this;
        _.scrl();
        _.showActivePage();
        _.sertRemoveAttr();
        _.setArticlesFilter();
        _.createArticles();
        _.eHandler();
    }
}

let site = new Site();
site.init();
