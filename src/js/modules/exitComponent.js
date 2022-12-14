import translater from "../translater/translater.js";
import { getMarkup } from "./exitMarkups.js"

export default class ExitComponent {
  loader = false;
  status = true
  message;
  markup;

  constructor (selector) {
    this.$el = document.querySelector(selector)
  }

  async getMarkups(dataset) {
    try {
      const markup = await getMarkup(dataset)

      this.markup = markup
    } catch(err) {
      console.log(err)
      this.status = false
      this.message = 'Произошла ошибка, попробуйте позже'
      this.markup = this.message
    }
  }

  close() {
    this.$el.classList.remove('_is-active')

    this.$body.style.overflow = 'auto'
    this.$body.style.paddingRight = 0;
    this.$body.querySelector('header').style.paddingRight = 0;
    this.destroy()
  }

  open(dataset) {
    this.$el.classList.add('_is-active')

    this.$body = document.body;
    const pr = window.innerWidth - this.$body.clientWidth
    
    this.$body.style.paddingRight =  pr + 'px'
    this.$body.querySelector('header').style.paddingRight = pr + 'px'
    this.$body.style.overflow = 'hidden'

    this.getMarkups(dataset).then(() => {
      this.$content =  this.$el.querySelector('.menu_exit__content')
      this.render()
    })
  }

  render() {
    this.$content.innerHTML = this.markup;
        
    const murkupId = document.querySelector('.menu_exit__body').id;
    translater(murkupId)

    document.body.addEventListener('click' , (e) => {
      if(e.target === document.querySelector('.menu_exit__overlay') || !!e.target.closest('.menu_exit__button')) {
        this.close()
      }
    })
  }

  destroy() {
    this.$content.innerHTML = ''
  }
}