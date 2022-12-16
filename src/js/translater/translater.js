import i18next from "i18next";


export default function translater (menuExit = '') {

    // header links
    document.querySelectorAll('.menu__item-link')[0].innerHTML = i18next.t('lang1');
    document.querySelectorAll('.menu__item-link')[1].innerHTML = i18next.t('lang2');
    document.querySelectorAll('.menu__item-link')[2].innerHTML = i18next.t('lang3');
    document.querySelectorAll('.menu__item-link')[3].innerHTML = i18next.t('lang4');
    document.querySelectorAll('.menu__item-link')[4].innerHTML = i18next.t('lang5');
    document.querySelectorAll('.menu__item-link')[5].innerHTML = i18next.t('lang6');
    document.querySelectorAll('.menu__item-link')[6].innerHTML = i18next.t('lang7');

    // hero 
    document.querySelector('.hero__title').innerHTML = i18next.t('lang8');
    document.querySelector('.hero__text').innerHTML = i18next.t('lang9');
    document.querySelector('.hero__btn').innerHTML = i18next.t('lang10');

    // introduction
    document.querySelector('.introduction__title-text').innerHTML = i18next.t('lang11');
    document.querySelectorAll('.introduction__text')[0].innerHTML = i18next.t('lang12');
    document.querySelectorAll('.introduction__text')[1].innerHTML = i18next.t('lang13');
    document.querySelectorAll('.introduction__btn')[0].innerHTML = i18next.t('lang14');

    // about fond 
    document.querySelector('.about_fond-title').innerHTML = i18next.t('lang15');
    document.querySelectorAll('.about_fond-text')[0].innerHTML = i18next.t('lang16');
    document.querySelectorAll('.about_fond-text')[1].innerHTML = i18next.t('lang17');
    document.querySelectorAll('.introduction__btn')[1].innerHTML = i18next.t('lang14');

    // advantages
    document.querySelector('.advantages__title').innerHTML = i18next.t('lang18');

    document.querySelectorAll('.advantages__list__item__title')[0].innerHTML = i18next.t('lang19');
    document.querySelectorAll('.advantages__list__item__title')[1].innerHTML = i18next.t('lang20');
    document.querySelectorAll('.advantages__list__item__title')[2].innerHTML = i18next.t('lang21');
    document.querySelectorAll('.advantages__list__item__title')[3].innerHTML = i18next.t('lang23');
    document.querySelectorAll('.advantages__list__item__title')[4].innerHTML = i18next.t('lang24');
    document.querySelectorAll('.advantages__list__item__title')[5].innerHTML = i18next.t('lang25');
    document.querySelectorAll('.advantages__list__item__title')[6].innerHTML = i18next.t('lang26');
    document.querySelectorAll('.advantages__list__item__title')[7].innerHTML = i18next.t('lang27');

    document.querySelectorAll('.advantages__list__item__title')[8].innerHTML = i18next.t('lang19');
    document.querySelectorAll('.advantages__list__item__title')[9].innerHTML = i18next.t('lang20');
    document.querySelectorAll('.advantages__list__item__title')[10].innerHTML = i18next.t('lang21');
    document.querySelectorAll('.advantages__list__item__title')[11].innerHTML = i18next.t('lang23');
    document.querySelectorAll('.advantages__list__item__title')[12].innerHTML = i18next.t('lang24');
    document.querySelectorAll('.advantages__list__item__title')[13].innerHTML = i18next.t('lang25');
    document.querySelectorAll('.advantages__list__item__title')[14].innerHTML = i18next.t('lang26');
    document.querySelectorAll('.advantages__list__item__title')[15].innerHTML = i18next.t('lang27');

    document.querySelectorAll('.advantages__list__item__text')[0].innerHTML = i18next.t('lang28');
    document.querySelectorAll('.advantages__list__item__text')[1].innerHTML = i18next.t('lang29');
    document.querySelectorAll('.advantages__list__item__text')[2].innerHTML = i18next.t('lang30');
    document.querySelectorAll('.advantages__list__item__text')[3].innerHTML = i18next.t('lang32');
    document.querySelectorAll('.advantages__list__item__text')[4].innerHTML = i18next.t('lang33');
    document.querySelectorAll('.advantages__list__item__text')[5].innerHTML = i18next.t('lang34');
    document.querySelectorAll('.advantages__list__item__text')[6].innerHTML = i18next.t('lang35');
    document.querySelectorAll('.advantages__list__item__text')[7].innerHTML = i18next.t('lang36');
    
    document.querySelectorAll('.advantages__list__item__text')[8].innerHTML = i18next.t('lang28');
    document.querySelectorAll('.advantages__list__item__text')[9].innerHTML = i18next.t('lang29');
    document.querySelectorAll('.advantages__list__item__text')[10].innerHTML = i18next.t('lang30');
    document.querySelectorAll('.advantages__list__item__text')[11].innerHTML = i18next.t('lang32');
    document.querySelectorAll('.advantages__list__item__text')[12].innerHTML = i18next.t('lang33');
    document.querySelectorAll('.advantages__list__item__text')[13].innerHTML = i18next.t('lang34');
    document.querySelectorAll('.advantages__list__item__text')[14].innerHTML = i18next.t('lang35');
    document.querySelectorAll('.advantages__list__item__text')[15].innerHTML = i18next.t('lang36');

 
    //  target
    document.querySelector('.target__title').innerHTML = i18next.t('lang37');
    document.querySelector('.target__btn').innerHTML = i18next.t('lang10');

    document.querySelectorAll('.card-target__title')[0].innerHTML = i18next.t('lang38');
    document.querySelectorAll('.card-target__title')[1].innerHTML = i18next.t('lang39');


    document.querySelectorAll('.card-target__text')[0].innerHTML = i18next.t('lang40');
    document.querySelectorAll('.card-target__text')[1].innerHTML = i18next.t('lang41');

    document.querySelector('.card-target__btn').innerHTML = i18next.t('lang14');


    // investment
    document.querySelector('.investment__title').innerHTML = i18next.t('lang42');
    document.querySelector('.investment__text').innerHTML = i18next.t('lang43');
    document.querySelector('.investment__btn').innerHTML = i18next.t('lang44');

    // footer footer__info-title
    document.querySelector('.footer__title-text').innerHTML = i18next.t('lang45');
    document.querySelector('.footer__title-btn').innerHTML = i18next.t('lang10');

    document.querySelector('.footer__info-title').innerHTML = i18next.t('lang46');

    document.querySelectorAll('.item-info__text')[0].innerHTML = i18next.t('lang47');
    document.querySelectorAll('.item-info__text')[1].innerHTML = i18next.t('lang48');
    document.querySelectorAll('.item-info__text')[2].innerHTML = i18next.t('lang49');

    document.querySelectorAll('.year')[0].innerHTML = i18next.t('lang50');
    document.querySelectorAll('.year')[1].innerHTML = i18next.t('lang50');
    document.querySelectorAll('.year')[2].innerHTML = i18next.t('lang50');
    

    document.querySelectorAll('.item-data__title')[0].innerHTML = i18next.t('lang51');
    document.querySelectorAll('.item-data__title')[1].innerHTML = i18next.t('lang52');
    document.querySelectorAll('.item-data__title')[2].innerHTML = i18next.t('lang53');
    document.querySelectorAll('.item-data__title')[3].innerHTML = i18next.t('lang54');
    document.querySelectorAll('.item-data__title')[4].innerHTML = i18next.t('lang55');

    document.querySelectorAll('.item-data__text')[0].innerHTML = i18next.t('lang56');
    document.querySelectorAll('.item-data__text')[1].innerHTML = i18next.t('lang57');
    document.querySelectorAll('.item-data__text')[2].innerHTML = i18next.t('lang58');


    // menu exit introduction
    if(menuExit === 'introduction'){
        document.querySelector('#introduction .menu_exit__title').innerHTML = i18next.t('lang59');

        document.querySelectorAll('#introduction .menu_exit__text')[0].innerHTML = i18next.t('lang60');
        document.querySelectorAll('#introduction .menu_exit__text')[1].innerHTML = i18next.t('lang61');
        document.querySelectorAll('#introduction .menu_exit__text')[2].innerHTML = i18next.t('lang62');

        document.querySelectorAll('#introduction .introduction-menu__text')[0].innerHTML = i18next.t('lang63');
        document.querySelectorAll('#introduction .introduction-menu__text')[1].innerHTML = i18next.t('lang64');
        document.querySelectorAll('#introduction .introduction-menu__text')[2].innerHTML = i18next.t('lang65');
        document.querySelectorAll('#introduction .introduction-menu__text')[3].innerHTML = i18next.t('lang66');
    }

    // menu exit aboutFond
    if(menuExit === 'aboutFond'){
        document.querySelector('#aboutFond .menu_exit__text').innerHTML = i18next.t('lang68');
        document.querySelector('#aboutFond .menu_exit__title').innerHTML = i18next.t('lang67');
    }

    // menu exit investStrategy
    if(menuExit === 'investStrategy'){
        document.querySelector('#investStrategy .menu_exit__title').innerHTML = i18next.t('lang69');
        
        document.querySelector('#investStrategy .menu_exit__text').innerHTML = i18next.t('lang70');

        document.querySelector('#investStrategy .investment-menu__text--green').innerHTML = i18next.t('lang92');


        document.querySelectorAll('#investStrategy .investment-menu__title')[0].innerHTML = i18next.t('lang71');
        document.querySelectorAll('#investStrategy .investment-menu__title')[1].innerHTML = i18next.t('lang80');
        document.querySelectorAll('#investStrategy .investment-menu__title')[2].innerHTML = i18next.t('lang84');
        document.querySelectorAll('#investStrategy .investment-menu__title')[3].innerHTML = i18next.t('lang98');
        document.querySelectorAll('#investStrategy .investment-menu__title')[4].innerHTML = i18next.t('lang93');

        document.querySelectorAll('#investStrategy .investment-menu__list-item')[0].innerHTML = i18next.t('lang72');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[1].innerHTML = i18next.t('lang73');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[2].innerHTML = i18next.t('lang74');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[3].innerHTML = i18next.t('lang75');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[4].innerHTML = i18next.t('lang76');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[5].innerHTML = i18next.t('lang77');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[6].innerHTML = i18next.t('lang78');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[7].innerHTML = i18next.t('lang79');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[8].innerHTML = i18next.t('lang81');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[9].innerHTML = i18next.t('lang82');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[10].innerHTML = i18next.t('lang83');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[11].innerHTML = i18next.t('lang85');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[12].innerHTML = i18next.t('lang86');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[13].innerHTML = i18next.t('lang87');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[14].innerHTML = i18next.t('lang88');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[15].innerHTML = i18next.t('lang89');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[16].innerHTML = i18next.t('lang90');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[17].innerHTML = i18next.t('lang91');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[18].innerHTML = i18next.t('lang94');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[19].innerHTML = i18next.t('lang95');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[20].innerHTML = i18next.t('lang96');
        document.querySelectorAll('#investStrategy .investment-menu__list-item')[21].innerHTML = i18next.t('lang97');

    }

    // menu exit investCondition
    if(menuExit === 'investCondition'){

        document.querySelector('#investCondition .menu_exit__title').innerHTML = i18next.t('lang99');

        document.querySelectorAll('#investCondition .investment-menu__title')[0].innerHTML = i18next.t('lang100');
        document.querySelectorAll('#investCondition .investment-menu__title')[1].innerHTML = i18next.t('lang101');
        document.querySelectorAll('#investCondition .investment-menu__title')[2].innerHTML = i18next.t('lang102');
        document.querySelectorAll('#investCondition .investment-menu__title')[3].innerHTML = i18next.t('lang103');

        document.querySelector('#investCondition .terms__subtitle').innerHTML = i18next.t('lang104');

        document.querySelectorAll('#investCondition .investment-menu__list-item')[0].innerHTML = i18next.t('lang105');
        document.querySelectorAll('#investCondition .investment-menu__list-item')[1].innerHTML = i18next.t('lang106');
        document.querySelectorAll('#investCondition .investment-menu__list-item')[2].innerHTML = i18next.t('lang107');
        
        document.querySelectorAll('#investCondition .terms__item-text')[0].innerHTML = i18next.t('lang108');
        document.querySelectorAll('#investCondition .terms__item-text')[1].innerHTML = i18next.t('lang109');
        
        document.querySelectorAll('#investCondition .terms-green-text')[0].innerHTML = i18next.t('lang110');
        document.querySelectorAll('#investCondition .terms-green-text')[1].innerHTML = i18next.t('lang111');
        document.querySelectorAll('#investCondition .terms-green-text')[2].innerHTML = i18next.t('lang112');

        document.querySelectorAll('#investCondition .terms-from')[0].innerHTML = i18next.t('lang114');
        document.querySelectorAll('#investCondition .terms-from')[1].innerHTML = i18next.t('lang114');
        document.querySelectorAll('#investCondition .terms-from')[2].innerHTML = i18next.t('lang114');

        document.querySelectorAll('#investCondition .terms-ago')[0].innerHTML = i18next.t('lang115');
        document.querySelectorAll('#investCondition .terms-ago')[1].innerHTML = i18next.t('lang115');
        document.querySelectorAll('#investCondition .terms-ago')[2].innerHTML = i18next.t('lang115');

        document.querySelectorAll('#investCondition .terms-yy')[0].innerHTML = i18next.t('lang113');
        document.querySelectorAll('#investCondition .terms-yy')[1].innerHTML = i18next.t('lang113');
    }

}