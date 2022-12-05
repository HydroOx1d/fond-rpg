import * as flsFunctions from './modules/functions.js';
import advantagesSwiper from './modules/advantagesSwiper.js';
import translate from './translater/translate.js';

flsFunctions.isWebp()
advantagesSwiper()
translate()

const burger = document.querySelector('.header__burger')
const headerBody = document.querySelector('.header__body')

burger.addEventListener('click', () => {
  headerBody.classList.toggle('_menu-is-active')
  if(headerBody.classList.contains('_menu-is-active')) {
    document.body.style.overflow = 'hidden'
    document.querySelector('.header__menu').style.overflow = 'auto'
  } else {
    document.body.style.overflow = 'auto'
    document.querySelector('.header__menu').style.overflow = 'hidden'
  }
})
