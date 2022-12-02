import * as flsFunctions from './modules/functions.js';
import i18next from 'i18next';

flsFunctions.isWebp()

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