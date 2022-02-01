import { _front } from "./libs/_front.js";
import {G_Bus} from "./libs/G_Control.js";

class Front extends _front{
  constructor(){
    super();
    const _ = this;
    G_Bus
      .on('burgerClick',_.burgerClick.bind(_))
      .on('dotClick',_.dotClick.bind(_))
      .on('next',_.next.bind(_))
      .on('prev',_.prev.bind(_))
  }

  // метод отвечающий за работу хедера при скроллинге
  headScroll(){
    const _ = this;
    if (window.pageYOffset) {
      _.head.classList.add('scrolled');
      _.body.classList.add('scrolled');
    }
    else {
      _.head.classList.remove('scrolled');
      _.body.classList.remove('scrolled');
    }
    window.addEventListener('scroll',()=>{
      if (window.pageYOffset) {
        _.head.classList.add('scrolled');
        _.body.classList.add('scrolled');
      }
      else {
        _.head.classList.remove('scrolled');
        _.body.classList.remove('scrolled');
      }
    })
  }

  // методы работы бургера
  async burgerClick(){
    const _ = this;
    if (_.headAnimation) return;
    _.headAnimation = true;
    let
      links = _.head.querySelectorAll('.animation');

    if (!_.head.classList.contains('active')) {
      _.head.classList.add('active');
      _.body.style = 'overflow:hidden;'
      setTimeout(async ()=>{
        await _.animationIterator({
          'array':links
        },2000)
      })
      _.headAnimation = false;
    }
    else {
      _.body.removeAttribute('style');
      await _.animationIterator({
        'array':links,
        'reverse':true
      });
      _.head.classList.remove('active');
      _.headAnimation = false;
    }
  }

  // инициализация и управление слайдерами
  slidersInit(){
    const _ = this;
    let mainSlider = _.f('.banner');
    if (mainSlider) _.mainSliderInit(mainSlider);
  }

  async mainSliderInit(slider){
    const _ = this;

    let
      slidesCont = slider.firstElementChild,
      firstSlide = slidesCont.firstElementChild;

    _.animationIterator({
      'array':firstSlide.querySelectorAll('.animation')
    });
    let btnsMarkup = '';

    for (let i = 0; i < slidesCont.children.length; i++) {
      btnsMarkup += `
        <button 
          class="dot${!i ? ' active' : ''}"
          data-click="dotClick"
          data-id="${i}"
        ></button>
      `;
      slidesCont.children[i].setAttribute('data-id',i);
    }

    let buttonTpl = _.markup(btnsMarkup);
    slider.querySelector('.banner-control').append(buttonTpl);
  }

  async dotClick(clickData){
    const _ = this;
    let
      btn = clickData.item,
      id = btn.getAttribute('data-id'),
      dots = btn.parentElement,
      activeDot = dots.querySelector('.dot.active'),
      slider = dots.closest('.slider'),
      slides = slider.querySelector('.slides'),
      activeSlide = slides.firstElementChild,
      targetSlide = slides.querySelector(`.slide[data-id="${id}"]`),
      activeSlideInners = activeSlide.querySelectorAll('.animation');

    activeDot.classList.remove('active');
    btn.classList.add('active');
    await _.animationIterator({
      'array':activeSlideInners,
      'reverse':true,
      'time':200
    });
    slides.prepend(targetSlide);
    await _.animationIterator({
      'array':targetSlide.querySelectorAll('.animation'),
      'time':200
    });
  }
  async animationIterator (data) {
    let response = new Promise((resolve) => {
      if (!data['time']) data['time'] = 150
      setTimeout(async ()=>{
        const _ = this;
        if (data['index'] === undefined) {
          data['index'] = data['reverse'] ? data['array'].length - 1 : 0;
        };

        if (!data['reverse']) {
          data['array'][data['index']].classList.add('active');
          data['index']++;
          if (data['index'] >= data['array'].length) {
            resolve(data['index']);
            return;
          }
        }
        else {
          if (data['index'] < 0) {
            resolve(data['index']);
            return;
          }
          data['array'][data['index']].classList.remove('active');
          data['index']--;
        }
        resolve(await _.animationIterator(data))
      },data['time'])
    });
    return response;
  }

  next(clickData){
    const _ = this;
    let
      btn = clickData.item,
      section = btn.closest('.section'),
      slider = section.querySelector('.slides');
    slider.append(slider.firstElementChild)
  }
  prev(clickData){
    const _ = this;
    let
      btn = clickData.item,
      section = btn.closest('.section'),
      slider = section.querySelector('.slides');
    slider.prepend(slider.lastElementChild)
  }

  init(){
    const _ = this;
    _.headAnimation = false;
    _.body = document.querySelector('BODY');
    _.head = _.body.querySelector('.head');

    _.headScroll();
    _.slidersInit();
  }
}
new Front();
