import React, { FC, useEffect, useState } from "react";
import { HeaderMenuProps } from "../../../../types/headerTypes";
import './HeaderMenuLogin.scss'
import Icons from "../../../Icons/Icons";
import Button from "../../../UI/Buttons/Button/Button";
import HeaderActiveList from "../../HeaderActiveList/HeaderActiveList";
import OpenUrl from "../../../../hooks/OpenUrl";
import Tile from "../../../UI/Buttons/Tile/Tile";

//Todo: добавить SVG для смотреть позже
//сделать линки для блоков

const HeaderMenuLogin:FC<HeaderMenuProps> = ({id}) => {

    let hoverActiveListData = [
        [0, 'Изи Иви', "https://www.ivi.ru/profile/subscription-izi-ivi"],
        [1, 'Иви', 'https://www.ivi.ru/profile/subscription'],
        [2, 'Иви + Amediateka', "https://www.ivi.ru/profile/subscription-ivi-amediateka"],
        [3, 'Amediateka', "https://www.ivi.ru/profile/subscription-amediateka"],
        [4, 'Матч Премьер', "https://www.ivi.ru/profile/subscription-matchpremier"],
        [5, 'Матч Футбол', "https://www.ivi.ru/profile/subscription-matchfootball"]
    ]

    const [activeHover, setActiveHover] = useState<string>('ivi');
    let imgUrl = 'https://www.ivi.ru/pages/newseason/assets/images/new-logo-short.svg'
    switch(activeHover) {
        case 'amediateka':
            imgUrl = 'https://toplogos.ru/images/logo-amediateka.png';
            break;
        case 'match':
            imgUrl = 'https://upload.wikimedia.org/wikipedia/ru/4/4d/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%9C%D0%B0%D1%82%D1%87_%D0%A2%D0%92.svg'
            break;
    };


    const passiveBlock = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const activeBlock = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const [blockStatus, setBlockStatus] = useState (false);

    function openBlock(e: React.DragEvent<HTMLDivElement>) {
        setBlockStatus(true);
    };

    function closeBlock(e: React.DragEvent<HTMLDivElement>) {
        if(blockStatus) {
            setBlockStatus(false);
        };
    };

    useEffect( () => {

        switch(blockStatus) {
            case (true):
                passiveBlock.current.classList.add('headerMenuLogin__hidden')
                activeBlock.current.classList.remove('headerMenuLogin__hidden')
                break;
            case(false):
            passiveBlock.current.classList.remove('headerMenuLogin__hidden')
            activeBlock.current.classList.add('headerMenuLogin__hidden')
                break;
        };
    },[blockStatus])

    return (
        <div className="dropDownBody__login dropDownBody__login_hidden" id={id} onMouseLeave={closeBlock}>
            <div className="headerMenuLogin__column" >
                <div className="headerMenuLogin__line">
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="Покупки"
                            svg={<Icons className="headerMenuLogin__svg" name='devices' color='#b0afb1' size='20' strokeWidth="2"/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile/purchases')}
                        />   
                    </div>
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="Смотреть позже"
                            svg={<Icons className="headerMenuLogin__svg" name='bookmark' color='#b0afb1' size='20'/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile/favorites')}
                        />   
                    </div>
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="История просмотров"
                            svg={<Icons className="headerMenuLogin__svg" name='history' color='#b0afb1' size='20'/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile/watched')}
                        />   
                    </div>
                    <div 
                        className="headerMenuLogin__block headerMenuLogin__block_card"
                        onMouseOver={openBlock}
                        onClick={()=>OpenUrl('https://www.ivi.ru/profile/subscriptions')}
                    >
                        <div className="headerMenuLogin__inner headerMenuLogin__inner_top">
                            <Icons className="headerMenuLogin__svg"  name='brilliant' color='#b0afb1' size='20' strokeWidth="0"/>
                            <Icons className="headerMenuLogin__svg headerMenuLogin__svg_circle" name='circle-flooded' color='red' size='10'/>   
                        </div>
                        <div className="headerMenuLogin__inner headerMenuLogin__inner_bottom">
                            <p className="headerMenuLogin__text ">Подписки</p>
                            <p className="headerMenuLogin__text headerMenuLogin__text_small">Подключить</p>
                        </div>
                    </div>
                </div>
                <div className="headerMenuLogin__line">
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="Активация сертификата"
                            svg={<Icons className="headerMenuLogin__svg" name='medal' color='#b0afb1' size='20' strokeWidth="0"/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile')}
                        />   
                    </div>
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="Вход по коду"
                            svg={<Icons className="headerMenuLogin__svg" name='tv' color='#b0afb1' size='20' strokeWidth="2"/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile')}
                        />   
                    </div>
                    <div className="headerMenuLogin__block" onMouseOver={closeBlock} >
                        <Tile 
                            title="Способы оплаты"
                            svg={<Icons className="headerMenuLogin__svg" name='card' color='#b0afb1' size='20'/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile/cards')}
                        />   
                    </div>
                    <div className="headerMenuLogin__block">
                        <Tile 
                            title="Пригласить друзей"
                            svg={<Icons className="headerMenuLogin__svg" name='share' color='#b0afb1' size='20' strokeWidth="2"/>}
                            onClick={()=>OpenUrl('https://www.ivi.ru/profile/referral')}
                        />   
                    </div>
                </div>
            </div>
            <div className="headerMenuLogin__column headerMenuLogin__column_right">
                <div className=" headerMenuLogin__passiveBlock" ref={passiveBlock}>
                    <Button 
                        title={['Войти или зарегистрироваться']} 
                        color="red" 
                        type="ultraWide"
                        onClick={() => OpenUrl('https://www.ivi.ru/profile')}
                    />
                    <div>
                        <a className=" headerMenuLogin__link" href="https://www.ivi.ru/profile/settings">
                            <p className="headerMenuLogin__text headerMenuLogin__text_additional">Настройки</p>
                        </a>
                        <a className=" headerMenuLogin__link" href="https://ask.ivi.ru/">
                            <p className="headerMenuLogin__text headerMenuLogin__text_additional">Помощь</p>
                        </a>
                    </div>
                </div>
                <div 
                    className="headerMenuLogin__activeBlock headerMenuLogin__hidden"
                    ref={activeBlock}
                >
                    <div className="headerMenuLogin__internal">
                        <p className="headerMenuLogin__heading">Подписки</p>
                        <HeaderActiveList dataArray={hoverActiveListData} prefixForId="HeaderMenuLogin" onHoverChange={setActiveHover}/>
                    </div>
                    <div className="headerMenuLogin__image-block">
                        <img className='headerMenuLogin__logo' src={imgUrl} alt="Логотип выбранной подписки"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenuLogin;