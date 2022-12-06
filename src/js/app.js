import * as flsFunctions from './modules/functions.js';
import advantagesSwiper from './modules/advantagesSwiper.js';
import i18next from 'i18next';
import ExitComponent from './modules/exitComponent.js';

flsFunctions.isWebp()
advantagesSwiper()

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

document.querySelectorAll('.menu__item-link').forEach(link => {
  link.addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    document.querySelector('.header__menu').style.overflow = 'hidden'
    headerBody.classList.remove('_menu-is-active')
  })
})



// ExitComponent

const exitComponent = new ExitComponent('.menu_exit');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.exit-menu-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      exitComponent.open(e.target.closest('.exit-menu-btn').dataset.markup)
    })
  })
})

document.addEventListener('scroll', () => {
  const section = document.getElementsByTagName('section')
  
  Array.from(section).forEach(el => {
    const top = el.offsetTop - 100
    const bottom = top + el.clientHeight
    const scroll = window.pageYOffset
    const id = el.id
    
    if(scroll > top && scroll < bottom) {
      document.querySelector(`.menu__item-link[href="#${id}"]`).parentNode.classList.add('_is-current')
    } else {
      document.querySelector(`.menu__item-link[href="#${id}"]`).parentNode.classList.remove('_is-current')
    }
  })
})