import { _front } from "./libs/_front.js";
import {G_Bus} from "./libs/G_Control.js";

class Front extends _front{
  constructor(){
    super();
    const _ = this;
    G_Bus
      .on('burgerClick',_.burgerClick.bind(_))
  }

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

  mainSliderInit(){
    const _ = this;
    let mainSlider = _.f('.banner');
    if (!mainSlider) return;
    mainSlider.firstElementChild.classList.add('active');

  }

  init(){
    const _ = this;
    _.headAnimation = false;
    _.body = document.querySelector('BODY');
    _.head = _.body.querySelector('.head');

    _.headScroll();
    _.mainSliderInit();
  }
}
new Front();
