import { FC, useEffect, useState } from "react";
import './MainPage.scss'
import { Carousel } from "../../Carousel/Carousel";
import Button from "../../UI/Buttons/Button/Button";
import FilmCard from "../../FilmCard/FilmCard";
import { TopWeekFilmCard } from "../../TopWeekCard/TopWeekFilmCard";
import axios from "axios";
import Icons from "../../Icons/Icons";

interface IMainPageProps { };

export const MainPage: FC<IMainPageProps> = (props) => {

	const [isClauseSectionTruncated, setIsClauseSectionTruncated] = useState<boolean>(false)

	return (
		<div className="home">
			<div className="hove__promo-slider">
				<Carousel variant='main'>
					<img src="https://thumbs.dfs.ivi.ru/storage2/contents/f/b/e127018037ec40b6aba9d848097aea.jpg/1216x524/?q=85" alt="" />
					<img src="https://thumbs.dfs.ivi.ru/storage15/contents/2/9/f14be40a738a287d115b71f5e8f8ff.jpg/1216x524/?q=85" alt="" />
					<img src="https://thumbs.dfs.ivi.ru/storage9/contents/8/9/bb4117c54b4e0ac89cb429fa753626.jpg/1216x524/?q=85" alt="" />
					<img src="https://thumbs.dfs.ivi.ru/storage26/contents/4/5/0a9a5152f4ef1c2358c8b22bbdbebf.jpg/1216x524/?q=85" alt="" />
					<img src="https://pic.fullrest.ru/ixzc7Cid.jpg" alt="" />
					<img src="https://xage.ru/media/uploads/2017/01/kong_skull_island.jpg" alt="" />
					<img src="https://static.okko.tv/images/v2/10254530?scale=1&quality=80" alt="" />
				</Carousel>
			</div>
			<div className="container">
				<div className="home__teaser-list">
					<div className="home__teaser-list_btn">
						<Button
							color="default"
							onClick={() => { }}
							svg={<img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg" />}
							title={[
								'30 дней подписки за 1 ₽'
							]}
							type="ultraWide"
						/>
					</div>
					<div className="home__teaser-list_btn">
						<Button
							onClick={() => { }}
							svg={<svg height="30" viewBox="0 0 56 32" width="54" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="b" x1="50%" x2="50.198%" y1="8.485%" y2="85.275%"><stop offset="0%" stopColor="#EC174F" /><stop offset="36.771%" stopColor="#850D2D" /><stop offset="75.994%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="d" x1="68.363%" x2="32.999%" y1="5.079%" y2="95.467%"><stop offset="0%" stopColor="#EC174F" /><stop offset="2.869%" stopColor="#C1103F" /><stop offset="16.599%" stopColor="#EC174F" /><stop offset="70.4%" stopColor="#EC174F" /><stop offset="97.766%" stopColor="#C1103F" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="j" x1="91.754%" x2="102.417%" y1="50%" y2="50%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="100%" stopColor="#850D2D" /></linearGradient><linearGradient id="k" x1="64.536%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="83.938%" stopColor="#FF829B" stopOpacity=".7" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></linearGradient><linearGradient id="m" x1="57.723%" x2="35.705%" y1="50%" y2="56.954%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="100%" stopColor="#850D2D" /></linearGradient><linearGradient id="o" x1="24.955%" x2="56.996%" y1="0%" y2="35.995%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="p" x1="64.847%" x2="76.89%" y1="74.724%" y2="86.037%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="16.438%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="r" x1="147.837%" x2="35.571%" y1="32.503%" y2="42.858%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="s" x1="22.987%" x2="12.473%" y1="34.396%" y2="80.77%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="60.03%" stopColor="#FF829B" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></linearGradient><linearGradient id="v" x1="77.511%" x2="37.236%" y1="71.999%" y2="47.307%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="x" x1="53.325%" x2="46.729%" y1="41.409%" y2="64.505%"><stop offset="0%" stopColor="#EC174F" /><stop offset="55.223%" stopColor="#FF829B" /><stop offset="100%" stopColor="#EC174F" /></linearGradient><linearGradient id="z" x1="42.26%" x2="36.125%" y1="27.98%" y2="19.09%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="100%" stopColor="#850D2D" /></linearGradient><linearGradient id="A" x1="60.229%" x2="36.344%" y1="50%" y2="17.645%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="82.402%" stopColor="#FF829B" stopOpacity=".7" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></linearGradient><linearGradient id="E" x1="43.432%" x2="58.302%" y1="9.188%" y2="108.034%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="36.554%" stopColor="#C1103F" /><stop offset="58.977%" stopColor="#C1103F" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></linearGradient><linearGradient id="F" x1="42.739%" x2="54.443%" y1="42.254%" y2="78.935%"><stop offset="0%" stopColor="#FF829B" stopOpacity="0" /><stop offset="69.513%" stopColor="#FF829B" /><stop offset="100%" stopColor="#FF829B" stopOpacity="0" /><stop offset="100%" stopColor="#FF829B" stopOpacity="0" /></linearGradient><linearGradient id="H" x1="65.301%" x2="33.835%" y1="38.045%" y2="86.738%"><stop offset="0%" stopColor="#EC174F" stopOpacity="0" /><stop offset="100%" stopColor="#850D2D" /></linearGradient><path d="M37.598 4.078H42.064V27.483H37.598z" id="a" /><path d="M31.961 24.73l4.117 2.343c1.337-2.166 2.302-3.983 2.893-5.45.591-1.467 1.195-3.299 1.812-5.495 2.045-2.158 3.491-3.815 4.337-4.971.845-1.157 1.732-2.602 2.66-4.337l-4.084-2.369c-1.26 2.02-2.145 3.642-2.654 4.868-.51 1.225-1.148 3.232-1.916 6.02-1.545 1.393-2.878 2.823-4 4.29-1.122 1.467-2.177 3.168-3.165 5.1z" id="c" /><path d="M31.961 24.73l4.117 2.343c1.337-2.166 2.302-3.983 2.893-5.45.591-1.467 1.195-3.299 1.812-5.495 2.045-2.158 3.491-3.815 4.337-4.971.845-1.157 1.732-2.602 2.66-4.337l-4.084-2.369c-1.26 2.02-2.145 3.642-2.654 4.868-.51 1.225-1.148 3.232-1.916 6.02-1.545 1.393-2.878 2.823-4 4.29-1.122 1.467-2.177 3.168-3.165 5.1z" id="f" /><path d="M31.961 24.73l4.117 2.343c1.337-2.166 2.302-3.983 2.893-5.45.591-1.467 1.195-3.299 1.812-5.495 2.045-2.158 3.491-3.815 4.337-4.971.845-1.157 1.732-2.602 2.66-4.337l-4.084-2.369c-1.26 2.02-2.145 3.642-2.654 4.868-.51 1.225-1.148 3.232-1.916 6.02-1.545 1.393-2.878 2.823-4 4.29-1.122 1.467-2.177 3.168-3.165 5.1z" id="g" /><path d="M39.547 15.785c2.244 1.842 3.784 2.943 4.621 3.3 1.256.538 2.343.952 3.269.745.617-.138.859-.537.725-1.197V14.47c0-.628 0-1.56-2.427-1.042-2.428.518-5.049 1.385-5.631 1.385-.389 0-.574.323-.557.97z" id="i" /><path d="M32.142 21.662c.76-.41 1.14-1.094 1.14-2.052 0-1.437-.292-4.246-2.072-6.414-1.78-2.169-5.268-2.751-6.841-2.751.731.33 2.919 2.207 4.214 4.142.863 1.29 1.257 3.019 1.184 5.185l2.375 1.89z" id="n" /><path d="M39.87 16.335c-2.308.177-4.034.395-5.177.654-1.716.388-2.932.945-3.172 2.213-.16.846.048 1.666.621 2.46l-2.297-.427c-.876-.92-1.111-2.02-.706-3.301.609-1.923 2.013-3.127 4.13-3.89 1.41-.51 3.383-.827 5.915-.952l.687 3.243z" id="q" /><path d="M12.13 19.157c-1.73.13-3.075-.328-4.033-1.372-1.437-1.567-2.09-1.987-2.977-3.016-.591-.687-1.631-1.381-3.12-2.085l2.233-2.504c1.515.78 2.757 1.654 3.728 2.62 1.456 1.45 2.583 2.467 3.948 4.02.91 1.036 2.13 1.683 3.657 1.942l-3.437.395z" id="u" /><path d="M28.583 11.3c-.997-.255-2.186.342-3.567 1.792-2.071 2.175-3.676 4.473-6.395 5.269-1.812.53-4.496.796-8.051.796 2.136-.237 3.78-.908 4.932-2.013 1.728-1.657 2.932-2.893 4.336-4.589 1.98-2.391 4.896-2.81 8.745-1.256z" id="w" /><path d="M40.485 13.759c-.202-1.894-.455-3.288-.757-4.181-.453-1.34-1.262-2.492-1.663-2.648-.268-.103-.637.067-1.107.512-1.972 1.605-3.094 2.541-3.366 2.809-.408.401-.446.945.194 1.696.428.5 2.134 1.676 5.12 3.527l1.58-1.715z" id="y" /><path d="M41.343 14.913c.902 1.048 1.647 2.198 2.233 3.45.88 1.876 1.774 4.407 2.454 6.634.453 1.484.522 2.401.207 2.75l-3.14 4.247c.238-1.04.089-2.098-.446-3.172-.803-1.612-1.573-3.23-2.078-6.854-.336-2.417-.418-4.389-.246-5.916l1.016-1.14z" id="C" /><path d="M38.718 15.468c.302-.44.56-.78.77-1.017.212-.237.544-.56.997-.97.091.539.244.901.46 1.087.216.185.382.259.498.22-.185.431-.375.805-.57 1.12-.193.315-.437.54-.73.673-.307-.212-.56-.395-.758-.55-.198-.156-.42-.343-.667-.563z" id="G" /><radialGradient cx="54.727%" cy="46.04%" fx="54.727%" fy="46.04%" gradientTransform="matrix(.88608 .32415 -3.73535 4.99308 1.782 -2.016)" id="e" r="11.195%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></radialGradient><radialGradient cx="53.033%" cy="47.435%" fx="53.033%" fy="47.435%" gradientTransform="matrix(.8854 .32505 -2.15489 2.87028 1.083 -1.06)" id="h" r="4.861%"><stop offset="0%" stopColor="#400615" /><stop offset="100%" stopColor="#850D2D" stopOpacity="0" /><stop offset="100%" stopColor="#850D2D" stopOpacity="0" /></radialGradient><radialGradient cx="28.562%" cy="42.238%" fx="28.562%" fy="42.238%" gradientTransform="matrix(-.17924 .97206 -2.55303 -.80737 1.415 .486)" id="l" r="26.3%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></radialGradient><radialGradient cx="86.98%" cy="16.624%" fx="86.98%" fy="16.624%" gradientTransform="matrix(0 1 -5.87626 0 1.847 -.704)" id="t" r="7.706%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#850D2D" stopOpacity="0" /></radialGradient><radialGradient cx="84.024%" cy="87.586%" fx="84.024%" fy="87.586%" gradientTransform="matrix(-.78808 .51637 -2.11726 -2.27382 3.357 2.434)" id="B" r="23.745%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></radialGradient><radialGradient cx="11.881%" cy="6.177%" fx="11.881%" fy="6.177%" gradientTransform="matrix(-.9106 .1498 -2.51856 -2.01126 .383 .168)" id="D" r="18.782%"><stop offset="0%" stopColor="#850D2D" /><stop offset="100%" stopColor="#EC174F" stopOpacity="0" /></radialGradient><radialGradient cx="82.401%" cy="25.932%" fx="82.401%" fy="25.932%" gradientTransform="matrix(.78814 .54097 -1.41873 1.5967 .542 -.6)" id="I" r="21.305%"><stop offset="0%" stopColor="#FF829B" /><stop offset="100%" stopColor="#FF829B" stopOpacity="0" /></radialGradient></defs><g fill="none" fillRule="evenodd"><path d="M26.428 11.267c.193.078.385.163.574.255L33.197.792c.25-.434.805-.583 1.238-.332l18.43 10.64c.434.25.583.805.332 1.238l-10.64 18.43c-.25.434-.805.582-1.238.332l-18.43-10.64c-.434-.25-.583-.805-.332-1.238l3.263-5.653c-.483-.588-1.014-1.143-1.519-1.62-.408.291-.836.672-1.285 1.143-2.071 2.175-3.676 4.473-6.395 5.269-1.498.439-3.593.696-6.284.772l-.208.024c-.388.029-.756.028-1.106-.002l-.453.002.22-.026c-1.1-.14-1.998-.59-2.693-1.346-1.437-1.567-2.09-1.987-2.977-3.016-.591-.687-1.631-1.381-3.12-2.085l2.233-2.504c1.515.78 2.757 1.654 3.728 2.62 1.456 1.45 2.583 2.467 3.948 4.02.546.62 1.202 1.102 1.97 1.444.62-.304 1.16-.677 1.623-1.12 1.728-1.657 2.932-2.893 4.336-4.589 1.98-2.391 4.896-2.81 8.745-1.256-.052-.013-.103-.024-.155-.032z" fill="#110D2B" opacity=".4" /><rect fill="#D8D8D8" height="23.094" rx=".906" transform="rotate(-60 39.877 15.78)" width="23.094" x="28.33" y="4.233" /><g transform="rotate(-60 39.831 15.78)"><use fill="#EC174F" xlinkHref="#a" /><use fill="url(#b)" xlinkHref="#a" /></g><use fill="#EC174F" xlinkHref="#c" /><use fill="url(#d)" xlinkHref="#c" /><use fill="url(#e)" xlinkHref="#c" /><use fill="#EC174F" xlinkHref="#f" /><use fill="url(#d)" xlinkHref="#f" /><use fill="url(#e)" xlinkHref="#f" /><use fill="#EC174F" xlinkHref="#g" /><use fill="url(#d)" xlinkHref="#g" /><use fill="url(#e)" xlinkHref="#g" /><use fill="url(#h)" xlinkHref="#g" /><use fill="#EC174F" xlinkHref="#i" /><use fill="url(#j)" xlinkHref="#i" /><use fill="url(#k)" xlinkHref="#i" /><use fill="url(#l)" xlinkHref="#i" /><use fill="url(#m)" xlinkHref="#i" /><path d="M43.592 14.574c1.015-.105 4.563-.6 4.453-.822-.198-.4-.747-.657-2.31-.323-2.428.518-5.049 1.385-5.631 1.385-.583 0 1.935-.078 3.488-.24z" fill="#850D2D" /><use fill="#EC174F" xlinkHref="#n" /><use fill="url(#o)" xlinkHref="#n" /><use fill="url(#p)" xlinkHref="#n" /><use fill="#EC174F" xlinkHref="#q" /><use fill="url(#r)" xlinkHref="#q" /><use fill="url(#s)" xlinkHref="#q" /><use fill="url(#t)" xlinkHref="#q" /><use fill="#EC174F" xlinkHref="#u" /><use fill="url(#v)" xlinkHref="#u" /><use fill="#EC174F" xlinkHref="#w" /><use fill="url(#x)" xlinkHref="#w" /><use fill="#EC174F" xlinkHref="#y" /><use fill="url(#z)" xlinkHref="#y" /><use fill="url(#A)" xlinkHref="#y" /><use fill="url(#B)" xlinkHref="#y" /><path d="M36.33 13.034c-.99-.867-2.628-2.628-2.995-2.387-.114.345 0 .771.451 1.3.428.5 2.156 1.697 5.185 3.592-1.24-1.214-2.12-2.049-2.64-2.505z" fill="#850D2D" /><use fill="#EC174F" xlinkHref="#C" /><use fill="url(#D)" xlinkHref="#C" /><use fill="url(#E)" xlinkHref="#C" /><use fill="url(#F)" fillOpacity=".62" xlinkHref="#C" /><use fill="#EC174F" xlinkHref="#G" /><use fill="url(#H)" xlinkHref="#G" /><use fill="url(#I)" xlinkHref="#G" /></g></svg>}
							title={[
								'Активировать сертификат'
							]}
							type="ultraWide"
						/>
					</div>
				</div>
				<section className="pageSection home__pageSection">
					<div className="pageSection__container">
						<div className="gallery">
							<div className="gallery__blockHeader">
								<img src="	https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg" alt="" /><span>за неделю</span>
							</div>
							<Carousel variant="cards">
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage15/contents/2/2/b73c42810f30fbd1a5fe65d2bebc38.jpg/304x620//?q=85'
									titleUrl='https://thumbs.dfs.ivi.ru/storage9/contents/2/c/9f939aecb764dffa13d065ebf93208.png/x200/?q=85'
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage26/contents/9/8/b2c89d97f81efe2e16746be8d57cb5.jpg/304x620//?q=85'
									titleUrl='https://thumbs.dfs.ivi.ru/storage15/contents/9/8/b62bd137fb90981fbd639a4f85cf8d.png/x200/?q=85'
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number2.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage28/contents/5/7/60a7c6ae7f39f90163a3e1b72a8173.jpg/304x620//?q=85'
									titleUrl='https://thumbs.dfs.ivi.ru/storage33/contents/c/6/ebb1f750328adf266b9d867e6ce2d2.png/x200/?q=85'
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number3.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage6/contents/e/0/08c76a2df45108ec28af6300cc5b93.jpg/304x620//?q=85'
									titleUrl='https://thumbs.dfs.ivi.ru/storage4/contents/b/3/826ab6a9a975f9919837f0d17ba642.png/x200/?q=85'
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number4.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage4/contents/2/d/e1c28af058ab48874c683e1b18dc72.jpg/304x620//?q=85'
									titleUrl='https://thumbs.dfs.ivi.ru/storage2/contents/c/7/be1a52cb60150edb712932844bb0c8.png/x200/?q=85'
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85'
									titleUrl=''
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85'
									titleUrl=''
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85'
									titleUrl=''
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
								<TopWeekFilmCard
									url='https://thumbs.dfs.ivi.ru/storage15/contents/3/3/a116328d08b013933940887ad22985.jpg/234x360/?q=85'
									titleUrl=''
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
								<TopWeekFilmCard
									url='https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/x1000'
									titleUrl=''
									placeUrl='https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg'
								/>
							</Carousel>
						</div>
					</div>
				</section>
				<section className="pageSection home__pageSection">
					<div className="pageSection__container">
						<div className="clause home__clause">
							<div className="clause__header">
								<h2 className="clause__title">
									Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
								</h2>
							</div>
							<div className={`clause__text ${!isClauseSectionTruncated && 'hidden-children'}`} >
								<p>
									Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.
								</p>
								<p>
									Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.
								</p>
								<p>
									Онлайн-кинотеатр ivi.ru – это:
								</p>
								<ol>
									<li>
										уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;
									</li>
									<li>
										просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;
									</li>
									<li>
										возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;
									</li>
									<li>
										уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;
									</li>
									<li>
										удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;
									</li>
									<li>
										возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;
									</li>
									<li>
										контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;
									</li>
									<li>
										просмотр онлайн контента хорошего разрешения без регистрации и смс.
									</li>
								</ol>
								<p>
									Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!
								</p>
							</div>
							<span
								className="clause__toggle"
								onClick={() => setIsClauseSectionTruncated(prev => !prev)}
							>
								{isClauseSectionTruncated ? 'Свернуть' : 'Развернуть'}
							</span>
						</div>
					</div>
				</section>
				<section className="pageSection home__pageSection">
					<div className="pageSection__container">
						<div className="gallery">
							<div className="gallery__blockHeader">
								Test
								<span>
									<Icons
										name="arrowRight"
										size={'15'}
										color="white"
									/>
								</span>
							</div>
							<div className="gallery__carousel">
								<Carousel variant='cards'>
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
									<FilmCard film='film' onClick={() => console.log('film')} />
								</Carousel>
							</div>
						</div>
					</div>
				</section>
			</div>

		</div>
	);
}
