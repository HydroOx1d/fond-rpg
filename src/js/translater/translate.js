import i18next from 'i18next';
import En from './en.json'
import Ru from './ru.json'
import translater from './translater.js';

export default async function translate() {

    await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
        ru: { translation: Ru },
        en: { translation: En },
    }
    })

    translater()
    


    const ruBtn = document.querySelectorAll('.locale__item')[0];
    const enBtn = document.querySelectorAll('.locale__item')[1];

    enBtn.addEventListener('click', async () => {
        await i18next.changeLanguage('en', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            enBtn.classList.add('_is-current')
            ruBtn.classList.remove('_is-current')
            translater()
          });
    })

    ruBtn.addEventListener('click', async () => {
        await i18next.changeLanguage('ru', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            ruBtn.classList.add('_is-current')
            enBtn.classList.remove('_is-current')
            translater()
          });
    })

}