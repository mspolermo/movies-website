import React from "react";
import '../Footer/Footer.scss'
import ButtonWithIcon from "../UI/Buttons/ButtonWithIcon/ButtonWithIcon";

const Footer = () => {
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
                        <ButtonWithIcon 
                                title={['Написать в чате']}
                        />
                    </div>
                    <div className="footer__buttons">
                        <ButtonWithIcon 
                                title={['mail']}
                        />
                        <ButtonWithIcon 
                                title={['text']}
                        />
                    </div>
                    <a href="https://ask.ivi.ru/" className="footer__link footer__link_additional">ask.ivi.ru</a>
                    <p className="footer__text">Ответы на вопросы</p>
                </div>
                <div className="footer__column">
                    <svg className="footer__bigButton" version="1.0" xmlns="http://www.w3.org/2000/svg" width="77.000000pt" height="84.000000pt" viewBox="0 0 77.000000 84.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)" fill="#8e46e1" stroke="none"><path d="M0 420 l0 -420 385 0 385 0 0 420 0 420 -385 0 -385 0 0 -420z m419 19 c51 -193 69 -275 62 -282 -7 -7 -14 -7 -20 -1 -5 5 -41 128 -80 273 -70 259 -73 280 -40 281 3 0 38 -122 78 -271z m213 214 c16 -14 18 -35 18 -209 0 -235 -3 -242 -102 -212 -27 8 -38 16 -35 27 2 11 11 15 27 12 14 -2 36 -4 50 -5 l25 -1 2 170 c2 94 -1 176 -6 183 -7 11 -24 9 -92 -12 -55 -17 -87 -22 -93 -16 -15 15 2 27 79 54 85 30 103 31 127 9z m-324 -95 c-2 -6 -30 -20 -61 -31 l-57 -19 0 -63 c0 -60 1 -63 28 -69 98 -24 162 -48 162 -61 0 -8 -9 -15 -20 -15 -18 0 -20 -6 -18 -46 2 -53 -11 -65 -62 -62 -34 3 -35 4 -55 75 -16 61 -24 74 -48 84 -28 12 -28 12 -25 98 l3 86 50 17 c60 20 108 23 103 6z m-188 -119 c0 -81 -3 -99 -15 -99 -12 0 -15 18 -15 98 0 54 3 102 6 105 17 17 24 -13 24 -104z"/><path d="M253 316 c3 -8 9 -31 13 -51 6 -33 27 -55 40 -42 9 9 -8 77 -23 92-19 19 -37 19 -30 1z"/></g></svg>
                    <p className="footer__text footer__text_bigButton">Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                </div>
            </div>
            <div className="footer__content">
                <div className="footer__column footer__column_wide">
                    <div className="footer__stores">
                        <ButtonWithIcon 
                            title={["Загрузить в", 'App Store']}
                            color="red"
                            svgLink='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg'
                        />
                        <ButtonWithIcon 
                            title={['Доступно в', 'Google Play']}
                            color="gray"
                            svgLink='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg'
                        />
                        <ButtonWithIcon 
                            title={['Смотрите на', 'Smart TV']}
                        />
                        <ButtonWithIcon 
                            title={["Все устройства"]}
                            color="gray"
                        />

                    </div>
                    <div className="footer__copyrights">
                        <p className="footer__text_copyrights">
                            <span>©&nbsp;</span>
                            <span>2023</span>
                            <span>&nbsp;ООО «Иви.ру»</span>
                        </p>
                        <p className="footer__text_copyrights">HBO ® and related service marks are the property of Home Box Office, Inc</p>
                    </div>
                </div>
                <div className="footer__column footer__column_wide">
                    <div className="footer__community">
                        <a className="footer__communityLink" href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg"/>
                            </div>
                        </a>
                        <a className="footer__communityLink" href="https://ok.ru/ivi.ru" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg"/>
                            </div>
                        </a>
                        <a className="footer__communityLink" href="https://twitter.com/ivi_ru" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg"/>
                            </div>
                        </a>
                        <a className="footer__communityLink" href="https://vb.me/a0544c" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg"/>
                            </div>
                        </a>
                        <a className="footer__communityLink" href="https://www.linkedin.com/company/2543415/" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg"/>
                            </div>
                        </a>
                        <a className="footer__communityLink" href="https://t.me/official_iviru" target="_blank">
                            <div className="footer__icon-block">
                                <img className="footer__icon" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;