import { FC, useEffect, useState } from "react";
import './Carousel.scss'
import FilmCard from "../FilmCard/FilmCard";

interface ICarouselProps { };

export const Carousel: FC<ICarouselProps> = () => {

	const [box, setBox] = useState<Element | null>()
	const [scroll, setScroll] = useState<number>(0)


	useEffect(() => {
		setBox(document.querySelector('.carousel__container'))
	}, [])

	const btnPressPrev = () => {
		if (box !== undefined && box !== null) {
			let width = box.clientWidth;

			box.scrollLeft = box.scrollLeft - width

			if (scroll - width < 0) {
				setScroll(0)
			} else {
				setScroll(box.scrollLeft - width)
			}
		}
	}

	const btnPressNext = () => {
		if (box !== undefined && box !== null) {
			let width = box.clientWidth;

			setScroll(width)
			box.scrollLeft = box.scrollLeft + width
			if (scroll + width >= box.scrollWidth) {
				setScroll(box.scrollWidth)
			}
			setScroll(box.scrollLeft + width)
		}
	}

	return (
		<div className="container carousel">
			{scroll > 0
				&&
				<button
					className="carousel__prev-btn"
					onClick={btnPressPrev}
				>
					<p>&lt;</p>
				</button>
			}
			{
				box && scroll + box.clientWidth < box.scrollWidth
				&&
				<button
					className="carousel__next-btn"
					onClick={btnPressNext}
				>
					<p>&gt;</p>
				</button>
			}

			<div className="carousel__container">
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
				<FilmCard film="film" onClick={() => 'film'} />
			</div>
		</div>
	);
}
