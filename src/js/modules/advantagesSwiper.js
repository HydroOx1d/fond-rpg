  import Swiper, { Navigation } from 'swiper';


export default function advantagesSwiper(){

  const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    modules: [Navigation],
  });

  const next = document.querySelector('.advantages-next-btn');
  next.addEventListener('click', () => {
    swiper.slideNext();
  })
  
  const prev = document.querySelector('.advantages-prev-btn');
  prev.addEventListener('click', () => {
    swiper.slidePrev();
  })

} 