class Slider{
    constructor() {
        this.slider = {
            toShow : 1,
            toScroll : 1
        }
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

    appendSlider(sliderData){
        const _ = this;
        _.slider.class = sliderData.container;
        _.slider.cont = document.querySelector(`.${sliderData.container}`);
        _.slider.slides = _.slider.cont.children;
        if(sliderData.toShow) _.slider.toShow = sliderData.toShow;
        if(sliderData.toScroll) _.slider.toScroll = sliderData.toScroll;

    }

    calculateSlideWidth(){
        const _ = this;
        if(typeof _.slider.toShow == 'number'){
            _.slider.slideWidth = (100 - (_.slider.toShow - 1))  / _.slider.toShow + '%';
        }
    }

    createSlider(){
        const _ = this;
        let newSlidesCont = _.createHtmlElem('DIV');
        let slidesLenght = _.slider.slides.length;
        for (let i = 0; i < slidesLenght; i++) {
            _.slider.slides[0].setAttribute('data-slide-number',i);
            newSlidesCont.append(_.slider.slides[0])
        }
        _.slider.cont.append(newSlidesCont);
        _.slider.cont.prepend(_.createHtmlElem('DIV'));
        _.slider.cont.parentElement.prepend(_.createHtmlElem('STYLE',{
            textContent : `
                .${_.slider.class}>div:first-child{
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                }
                .${_.slider.class}>div:last-child{
                    display:none;
                }`
        }));

    }
    init(sliderData){
        const _ = this;
        if(document.querySelector(`.${sliderData.container}`)){
            _.appendSlider(sliderData);
            _.calculateSlideWidth();
            _.createSlider();
            console.log(_.slider)
        }
    }
}

let sert = new Slider();
sert.init({
    container: 'sertificates-list',
    toShow: 4,
    toScroll: 1
});

