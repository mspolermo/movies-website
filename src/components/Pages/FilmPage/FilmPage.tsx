import React from "react";
import Card from "../../UI/Buttons/Card/Card";
import './FilmPage.scss'
import Button from "../../UI/Buttons/Button/Button";
import Icons from "../../Icons/Icons";
import ReitingBlock from "./ReitingBlock/ReitingBlock";
import SloganBlock from "./SloganBlock/SloganBlock";
import SummaryBlock from "./SummaryBlock/SummaryBlock";
import CardsBlock from "./CardsBlock/CardsBlock";
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";
import AdditionalInfoBlock from "./AdditionalInfoBlock/AdditionalInfoBlock";

const FilmPage = () => {

    //exist data in db
    let filmName = 'Форест Гамп';
    let slogan = 'Мир уже никогда не будет прежним, после того как вы увидите его глазами Форреста Гампа';
    let ratingKp = 8.918; //попросить округлять на бекенде
    let votesKP = 812836;
    let trailerUrl = 'https://www.youtube.com/embed/76WeEuR0qk4';
    let description = 'Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни. С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.';
    let bigPictureUrl = 'https://st.kp.yandex.net/images/film_big/448.jpg';
    let smallPictureUrl = 'https://st.kp.yandex.net/images/film_iphone/iphone360_448.jpg'
    let year = 1994;
    let movieLength = 142; 
    

    //need data
    let type = 'Фильм';
    let ageRating = '16+';
    let country = 'США';
    let genres =['Драмы', 'Комедии', 'Мелодрамы'] //не больше 3
    let creators = [
        ["Юлия Пересильд", 'актёр', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg'],
        ['Донни Йен', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg'],
        ['Киану Ривз', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg'],
        ['Хироюки Санада', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg'],
        ['Иэн Бартоломью', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_56856.jpg'],
        ['Кэри Элвес', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_23722.jpg'],
        ['Тим Сейфи', 'режисер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_229308.jpg'],
        ['Аксель Устун', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3057622.jpg'],
        ['Доган Барыш Яшар', 'монтажер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_5934832.jpg'],
        ['Винсент Ван', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_29870.jpg'],
        ['Александр Андрющенко', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2003892.jpg'],
        ['Денис Баглай', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6009923.jpg'],
        ['Рёсукэ Цуда', 'актер', 'https://st.kp.yandex.net/images/actor_iphone/iphone360_5251631.jpg']
    ]

    return (
        <div className="film">
            <div className="container film__container">

            <div className="film__desktop"> 
                <div className="film__column film__column_left">
                    <div className="film__video">
                    <video src={trailerUrl} width="600" height="300" controls={true} autoPlay={true} />
                        {/* <iframe src={trailerUrl}
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            width={'100%'}
                            height={'100%'}
                        /> */}
                    </div>
                    <div className="film__buttonMenu ">
                        <Button 
                            title={['Трейлер']} 
                            svg={<Icons name="play" size="30"/>}
                        />
                        <Button 
                            svg={<Icons name="bookmark" size="30" className="film__svg_bookmark" strokeWidth="0"/>}
                        />
                        <Button 
                            svg={<Icons name="upload" size="30" className="film__svg_upload"/>}
                        />
                    </div>
                </div>
                <div className="film__column film__column_right">
                    <SummaryBlock 
                        filmName={filmName}
                        year={year}
                        type={type}
                        ageRating={ageRating}
                        country={country}
                        genres={genres}
                        movieLength={movieLength}
                    />
                    <CardsBlock ratingKp={ratingKp} creators={creators}/>
                    <SloganBlock slogan={slogan} />
                    <DescriptionBlock description={description} filmName={filmName}/>
                    <ReitingBlock ratingKp={ratingKp} votesKP={votesKP}/>
                    <AdditionalInfoBlock />
                </div>    
            </div>




               



                <div className="film__inner">
                    <p className="film__smallHeading">С фильмом «{filmName}» смотрят</p>
                    <div className="film__shortly"></div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Актёры и создатели</p>
                    <div className="film__part">
                        <Card 
                            type="big"
                            title={"Киану Ривз"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg"}
                        />    
                        <Card 
                            type="big"
                            title={"Юлия Пересильд"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Киану Ривз"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg"}
                        />    
                        <Card 
                            type="big"
                            title={"Юлия Пересильд"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Донни Йен"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_16393.jpg"}
                        />   
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />  
                        <Card 
                            type="big"
                            title={"Хироюки Санада"}
                            role="актёр"
                            photoUrl={"https://st.kp.yandex.net/images/actor_iphone/iphone360_30769.jpg"}
                        />  
                    </div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Отзывы</p>
                    <div className="film__shortly"></div>
                </div>
                <div className="film__inner">
                    <p className="film__smallHeading">Cмотреть «{filmName}» на всех устройствах</p>
                    <div className="film__shortly"></div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage;