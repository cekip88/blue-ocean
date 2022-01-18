import { _front } from "./libs/_front.js";
import {G_Bus} from "./libs/G_Control.js";

class Front extends _front{
  constructor(){
    super();
    const _ = this;
    G_Bus
      .on('burgerClick',_.burgerClick.bind(_))
      .on('dotClick',_.dotClick.bind(_))
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
  burgerClick(){
    const _ = this;
    if (_.headAnimation) return;
    _.headAnimation = true;
    let
      links = _.head.querySelectorAll('.animation');


    if (!_.head.classList.contains('active')) {
      _.head.classList.add('active');
      _.body.style = 'overflow:hidden;'
      _.showHeadLink(links,0);
    }
    else {
      _.body.removeAttribute('style');
      _.showHeadLink(links,links.length - 1,true);
    }
  }
  showHeadLink(array,index,reverse = false){
    const _ = this;
    setTimeout(()=>{
      if (index >= array.length || index < 0) {
        if (reverse) {
          _.head.classList.remove('active');
        }
        _.headAnimation = false;
        return;
      }
      if (!reverse){
        array[index].style = 'opacity:1;transform:none;'
        index++;
      }
      else {
        array[index].removeAttribute('style');
        index--;
      }
      _.showHeadLink(array,index,reverse);
    },150)
  }

  // инициализация и управление слайдерами
  slidersInit(){
    const _ = this;
    let mainSlider = _.f('.banner');
    if (mainSlider) _.mainSliderInit(mainSlider);
  }

  mainSliderInit(slider){
    const _ = this;

    let
      slidesCont = slider.firstElementChild,
      firstSlide = slidesCont.firstElementChild,
      markup = '';

    firstSlide.classList.add('active');
    firstSlide.querySelector('.slide-inner').classList.add('active');

    for (let i = 0; i < slidesCont.children.length; i++) {
      markup += `
        <button 
          class="dot${!i?' active':''}" 
          data-id="${i}"
          data-click="dotClick"></button>
      `;
    }
    slider.querySelector('.dots').append(_.markup(markup));
  }

  dotClick(clickData){
    const _ = this;
    let
      btn = clickData.item,
      slider = btn.closest('.slider'),
      id = btn.getAttribute('data-id'),
      slidesCont = slider.querySelector('.slides'),
      activeDot = slider.querySelector('.dot.active'),
      targetSlide = slidesCont.children[id],
      activeSlide = slider.querySelector('.active'),
      activeSlideInners = activeSlide.querySelectorAll('.animation');

    _.animationIterator(activeSlideInners, true);
    setTimeout(()=>{
      activeSlide.classList.remove('active');
      targetSlide.classList.add('active');
    },200)
    setTimeout(()=>{
      _.animationIterator(targetSlide.querySelectorAll('.animation'))
    },500)

    activeDot.classList.remove('active');
    btn.classList.add('active');
  }
  animationIterator (data) {
    const _ = this;
    let
      array = data.array,
      reverse = data.reverse,
      index = data.index,
      parent = data.parent;

    if (!reverse) {
      if (index === null) index = 0;
      if (index >= array.length) {
        //if (parent) parent.
        return;
      }
      array[index].classList.add('active');
      index++;
    }
    else {
      if (index === null) index = array.length - 1;
      if (index <= 0) return;
      array[index].classList.remove('active');
      index--;
    }
    setTimeout(()=>{
      _.animationIterator({array,reverse,index,parent})
    },150)
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
