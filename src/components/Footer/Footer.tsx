import React, { useState } from "react";
import './Footer.scss'
import Button from "../UI/Buttons/Button/Button";

const Footer = () => {
    const mailSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="mail"> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> <rect fill="none" height="14" rx="2" ry="2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/> </g> </g> </g> </g></svg>;
    const phoneSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M18.4 20.75H18.17C15.5788 20.4681 13.0893 19.5846 10.9 18.17C8.86618 16.8747 7.13938 15.1513 5.84 13.12C4.42216 10.925 3.53852 8.42823 3.26 5.83001C3.22816 5.52011 3.2596 5.20696 3.35243 4.90958C3.44525 4.6122 3.59752 4.33677 3.8 4.10001C3.99694 3.86008 4.24002 3.66211 4.51486 3.51782C4.78969 3.37354 5.09068 3.28587 5.4 3.26001H8C8.56312 3.26058 9.10747 3.46248 9.53476 3.82925C9.96205 4.19602 10.2441 4.70349 10.33 5.26001C10.425 5.97489 10.6028 6.67628 10.86 7.35001C11.0164 7.77339 11.0487 8.23264 10.9531 8.67375C10.8574 9.11485 10.6378 9.51947 10.32 9.84001L9.71 10.45C10.6704 11.9662 11.9587 13.2477 13.48 14.2L14.09 13.6C14.4105 13.2822 14.8152 13.0626 15.2563 12.9669C15.6974 12.8713 16.1566 12.9036 16.58 13.06C17.2545 13.3148 17.9556 13.4926 18.67 13.59C19.236 13.6751 19.7515 13.9638 20.1198 14.402C20.488 14.8403 20.6837 15.3978 20.67 15.97V18.37C20.67 18.9942 20.4227 19.593 19.9823 20.0353C19.5419 20.4776 18.9442 20.7274 18.32 20.73L18.4 20.75ZM8 4.75001H5.61C5.49265 4.75777 5.37809 4.78924 5.27325 4.84252C5.1684 4.8958 5.07545 4.96979 5 5.06001C4.92658 5.14452 4.871 5.24302 4.83663 5.34957C4.80226 5.45612 4.7898 5.56852 4.8 5.68001C5.04249 8.03679 5.83362 10.304 7.11 12.3C8.28664 14.1467 9.85332 15.7134 11.7 16.89C13.6973 18.1798 15.967 18.9878 18.33 19.25C18.4529 19.2569 18.5759 19.2383 18.6912 19.1953C18.8065 19.1522 18.9117 19.0857 19 19C19.1592 18.8368 19.2489 18.6181 19.25 18.39V16C19.2545 15.7896 19.1817 15.5848 19.0453 15.4244C18.9089 15.2641 18.7184 15.1593 18.51 15.13C17.6839 15.0189 16.8724 14.8177 16.09 14.53C15.9359 14.4724 15.7686 14.4596 15.6075 14.4933C15.4464 14.5269 15.2982 14.6055 15.18 14.72L14.18 15.72C14.0629 15.8342 13.912 15.9076 13.7499 15.9292C13.5877 15.9508 13.423 15.9195 13.28 15.84C11.1462 14.6342 9.37997 12.8715 8.17 10.74C8.08718 10.598 8.05402 10.4324 8.07575 10.2694C8.09748 10.1065 8.17286 9.95538 8.29 9.84001L9.29 8.84001C9.40468 8.72403 9.48357 8.57751 9.51726 8.41793C9.55095 8.25835 9.53802 8.09244 9.48 7.94001C9.19119 7.15799 8.98997 6.34637 8.88 5.52001C8.85519 5.30528 8.75133 5.10747 8.58865 4.96513C8.42597 4.82278 8.21613 4.7461 8 4.75001Z" fill="#ffffff"/> </g></svg>;
    const appleSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#fff" d="M18.472 6.564c-1.491 1.071-2.237 2.36-2.237 3.867 0 1.805.922 3.19 2.765 4.155-.495 1.454-1.211 2.72-2.15 3.798C15.914 19.46 15.057 20 14.282 20c-.365 0-.863-.122-1.495-.367l-.303-.119c-.618-.244-1.166-.367-1.641-.367-.45 0-.941.096-1.475.288l-.381.139-.48.198c-.377.152-.758.228-1.142.228-.906 0-1.905-.757-3-2.27C2.788 15.56 2 13.197 2 10.64c0-1.818.492-3.283 1.475-4.393.984-1.11 2.286-1.666 3.908-1.666.606 0 1.173.112 1.7.337l.362.149.38.159c.34.145.613.218.822.218.267 0 .563-.063.889-.189l.498-.198.371-.139c.593-.218 1.247-.327 1.964-.327 1.7 0 3.068.658 4.103 1.973zM14.447 0c.02.231.03.41.03.535 0 1.144-.41 2.147-1.232 3.01-.82.863-1.774 1.294-2.862 1.294-.033-.258-.05-.443-.05-.555 0-.972.382-1.884 1.144-2.737C12.239.694 13.122.195 14.125.05c.071-.014.179-.03.322-.05z"/></svg>;
    const googleSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M15.3099 12.7188L14.0282 11.386L9.78055 15.9436L15.3099 12.7188Z M16.958 11.7576L17.0071 11.729C18.3303 10.9572 18.3303 9.04538 17.0071 8.27366L16.9564 8.2441L15.3199 10L16.958 11.7576Z M15.3082 7.28288L9.78589 4.06215L14.0282 8.61402L15.3082 7.28288Z M4.04121 1.00037L12.6954 10L4.03865 19.0023C2.98068 19.0214 2 18.1809 2 16.9996V3.00301C2 1.82076 2.98226 0.979819 4.04121 1.00037Z" fill="#fff"/></svg>;
    const smartTvSvg = <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M7 21L17 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="#ffffff" strokeWidth="1.5"/> </g></svg>;
    const allDevicesSvg = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20" width="20" version="1.1" id="Capa_1" viewBox="0 0 396 396" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M390,190.762h-47.635v-48.824c0-4.142-3.357-7.5-7.5-7.5h-16.932V46.346c0-5.523-4.478-10-10-10H10c-5.523,0-10,4.477-10,10 v191.182c0,5.523,4.477,10,10,10h103.467c-1.99,11.434-6.269,30.326-14.881,49.079c-1.422,3.096-1.169,6.703,0.67,9.571 c1.839,2.868,5.011,4.603,8.418,4.603h70.528v26.272c0,4.142,3.357,7.5,7.5,7.5h107.975v9.101c0,3.313,2.687,6,6,6H390 c3.314,0,6-2.687,6-6V196.762C396,193.448,393.314,190.762,390,190.762z M178.202,141.938v85.591H20V56.346h277.934v78.091H185.702 C181.56,134.438,178.202,137.795,178.202,141.938z M293.677,329.553H193.202v-8.709h59.583v0.704c0,4.143,3.357,7.5,7.5,7.5 c4.143,0,7.5-3.357,7.5-7.5v-0.704h25.892V329.553z M293.677,196.762v109.082H193.202V149.438h134.163v41.324h-27.688 C296.363,190.762,293.677,193.448,293.677,196.762z M384,347.654h-78.323v-7.065h33.162v0.597c0,3.314,2.686,6,6,6 c3.313,0,6-2.686,6-6v-0.597H384V347.654z M384,328.588h-78.323V221.827H384V328.588z M384,209.827h-78.323v-7.065H384V209.827z"/> </g></svg>;
    
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
                            svg={mailSvg}
                            onClick={function() { window.location.href = 'mailto:support@ivi.ru'}}
                        />
                        <Button 
                            svg={phoneSvg}
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
                        <a href="https://ask.ivi.ru/" className="footer__link footer__link_additional">ask.ivi.ru</a>
                        <p className="footer__text">Ответы на вопросы</p>    
                    </div>
                </div>
                <a className="footer__column" href="https://www.ivi.ru/subscribe">
                    <div className="footer__bigButton">
                        <svg width="56px" height="56px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ONE-xicons</title><path d="M41.75,44.19A0.5,0.5,0,0,1,41.38,44L5.89,6.26a0.5,0.5,0,1,1,.73-0.68L42.11,43.35A0.5,0.5,0,0,1,41.75,44.19Z"></path><path d="M33.89,29.51a0.5,0.5,0,0,1-.5-0.5V3.12a1.5,1.5,0,0,0-2.6-1L21,12.76a0.5,0.5,0,1,1-.73-0.68L30.05,1.43a2.5,2.5,0,0,1,4.34,1.69V29A0.5,0.5,0,0,1,33.89,29.51Z"></path><path d="M31.87,47.39a2.45,2.45,0,0,1-1.82-.81L16.16,31.5H14.89a7.5,7.5,0,0,1-7.5-7.73,7.71,7.71,0,0,1,7.79-7.27h1.19a0.5,0.5,0,0,1,0,1H15.18a6.7,6.7,0,0,0-6.79,6.3,6.5,6.5,0,0,0,6.5,6.7h1.49a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V35.33a0.5,0.5,0,0,1,1,0v9.55a2.45,2.45,0,0,1-1.59,2.33A2.56,2.56,0,0,1,31.87,47.39Z"></path></g></svg>
                    </div>
                    <p className="footer__text footer__text_bigButton">Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                </a>
            </div>
            <div className="footer__content">
                <div className="footer__column footer__column_wide">
                    <div className="footer__stores">
                        <Button 
                            svg={appleSvg}
                            title={["Загрузить в", 'App Store']}
                            onClick={function() {window.location.href = 'https://apps.apple.com/RU/app/id455705533?mt=8'}}
                        />
                        <Button
                            svg={googleSvg}
                            title={['Доступно в', 'Google Play']}
                            onClick={function() {window.location.href = 'https://play.google.com/store/apps/details?id=ru.ivi.client'}}
                        />
                        <Button 
                            svg={smartTvSvg}
                            title={['Смотрите на', 'Smart TV']}
                            onClick={function() {window.location.href = 'https://www.ivi.tv/pages/tvsmart/'}}
                        />
                        <Button 
                            svg={allDevicesSvg}
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
    );
};

export default Footer;