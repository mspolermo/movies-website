import React, { useState } from "react";
import './Footer.scss'
import Button from "../UI/Buttons/Button/Button";
import Icons from "../Icons/Icons";

const Footer = () => {

    const [btnPhoneStatus, setBtnPhoneStatus] = useState(false);
    function showPhoneNumber () {

        const btnPhone = document.querySelector('#phoneButton');
        const askBlock = document.querySelector('#askBlock');

        setBtnPhoneStatus(!btnPhoneStatus);

        switch(btnPhoneStatus) {
            case true:
                btnPhone?.classList.add('footer__buttons_hidden');
                askBlock?.classList.remove('footer__ask_hidden');
                break;
            case false:
                btnPhone?.classList.remove('footer__buttons_hidden');
                askBlock?.classList.add('footer__ask_hidden');
                break;
        };
    };

    return (
        <div className="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <div className="footer__column">
                        <h3 className="footer__heading">О нас</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="https://corp.ivi.ru/" className="footer__link">
                                    <p className="footer__text">О компании</p>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="https://corp.ivi.ru/career/#career-vacancy-block" className="footer__link">Вакансии</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/pages/beta" className="footer__link">Программа бета-тестирования</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/info/partners" className="footer__link">Информация для партнёров</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://corp.ivi.ru/advertisers/" className="footer__link">Размещение рекламы</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/info/agreement" className="footer__link">Пользовательское соглашение</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/info/confidential" className="footer__link">Политика конфиденциальности</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/info/goryachaya-liniya-komplaens" className="footer__link">Комплаенс</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__heading">Разделы</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/" className="footer__link">Мой Иви</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/new" className="footer__link">Что нового</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/movies" className="footer__link">Фильмы</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/series" className="footer__link">Сериалы</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/animation" className="footer__link">Мультфильмы</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/tvplus" className="footer__link">TV+</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://www.ivi.ru/goodmovies" className="footer__link">Что посмотреть</a>
                            </li>
                        </ul>
                        <div className="footer__certificateLinkWrapper">
                            <a href="https://www.ivi.ru/cert" className="footer__link footer__cretificateLink">Активация сертификата</a>
                        </div>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__heading">Служба поддержки</h3>
                        <p className="footer__text">Мы всегда готовы вам&nbsp;помочь. Наши&nbsp;операторы онлайн 24/7</p>
                        <div className="footer__buttons">
                            <Button 
                                title={['Написать в чате']}
                                onClick={function() {window.location.href = 'https://www.ivi.ru/profile'}}
                            />
                        </div>
                        <div className="footer__buttons">
                            <Button 
                                svg={<Icons name='mail' color='#fff' size='20' strokeWidth='2'/>}
                                onClick={function() { window.location.href = 'mailto:support@ivi.ru'}}
                            />
                            <Button 
                                svg={<Icons name='phone' color='#fff' size='20'/>}
                                onClick={showPhoneNumber}
                            />
                        </div>
                        <div className="footer__buttons footer__buttons_anim footer__buttons_hidden" id='phoneButton'>
                            <Button 
                                title={['+7 343 226-92-20']}
                                onClick={function() {window.location.href = 'tel:+73432269220'}}
                            />
                        </div>
                        <div className="footer__ask" id='askBlock'>
                            <a href="https://ask.ivi.ru/" className="footer__link">
                                <p className="footer__text footer__text_additional">ask.ivi.ru</p>
                            </a>
                            <p className="footer__text">Ответы на вопросы</p>    
                        </div>
                    </div>
                    <a className="footer__column" href="https://www.ivi.ru/subscribe">
                        <div className="footer__bigButton">
                            <Icons name='mute' color='#fff' size='56'/>
                        </div>
                        <p className="footer__text footer__text_bigButton">Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                    </a>
                </div>
                <div className="footer__content">
                    <div className="footer__column footer__column_wide">
                        <div className="footer__stores">
                            <Button 
                                svg={<Icons name='apple' color='#fff' size='20'/>}
                                title={["Загрузить в", 'App Store']}
                                onClick={function() {window.location.href = 'https://apps.apple.com/RU/app/id455705533?mt=8'}}
                            />
                            <Button
                                svg={<Icons name='google' color='#fff' size='20'/>}
                                title={['Доступно в', 'Google Play']}
                                onClick={function() {window.location.href = 'https://play.google.com/store/apps/details?id=ru.ivi.client'}}
                            />
                            <Button 
                                svg={<Icons name='smartTV' color='#fff' size='20'/>}
                                title={['Смотрите на', 'Smart TV']}
                                onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                            />
                            <Button 
                                svg={<Icons name='devices' color='#fff' size='22'/>}
                                title={["Все устройства"]}
                                onClick={function() {window.location.href = 'https://www.ivi.tv/devices'}}
                            />
                        </div>
                        <div className="footer__copyrights">
                            <p className="footer__text_copyrights">
                                <span>©&nbsp;</span>
                                <span>2023</span>
                                <span>&nbsp;ООО «Иви.ру»</span>
                            </p>
                            <p className="footer__text footer__text_copyrights">HBO ® and related service marks are the property of Home Box Office, Inc</p>
                        </div>
                    </div>
                    <div className="footer__column footer__column_wide">
                        <div className="footer__community">
                            <a className="footer__communityLink" href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='vkontakte' color='#fff' size='20'/>
                                </div>
                            </a>
                            <a className="footer__communityLink" href="https://ok.ru/ivi.ru" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='odnoklasniki' color='#fff' size='20'/>
                                </div>
                            </a>
                            <a className="footer__communityLink" href="https://twitter.com/ivi_ru" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='twitter' color='#fff' size='20'/>
                                </div>
                            </a>
                            <a className="footer__communityLink"  href="https://vb.me/a0544c" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='viber' color='#fff' size='20' strokeWidth="0"/>
                                </div>
                            </a>
                            <a className="footer__communityLink" href="https://www.linkedin.com/company/2543415/" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='linkedin' color='#fff' size='20'strokeWidth="0"/>
                                </div>
                            </a>
                            <a className="footer__communityLink" href="https://t.me/official_iviru" target="_blank" rel="noreferrer">
                                <div className="footer__icon-block">
                                    <Icons className="footer__icon" name='telegram' color='#fff' size='20'strokeWidth="0"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;