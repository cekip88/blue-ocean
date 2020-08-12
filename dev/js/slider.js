class Slider{
    constructor() {

    }

    // Создает HTML элемент
    createHtmlElem(tagName,dataAttr = null, childs = null, append = true){
        let elem = document.createElement(`${tagName}`);
        if(tagName == 'IMG') elem.setAttribute('alt',' ');
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

    // Подготавливает контейнеры слайдов
    createSlider(data){
        const _ = this;
        _.class = data.class;
        _.container = document.querySelector(`.${_.class}`);
        for(key of data.data){

        }
    }

}

/*let sert = new Slider();
sert.init({
    class : 'sertificates-list',
    data : {
        320 : {
            toShow: 4,
            toScroll: 1,
            arrows: true,
            dots: false
        }
    }
});*/

