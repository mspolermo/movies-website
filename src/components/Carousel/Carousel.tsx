import { FC, useEffect, useState, useRef } from "react";
import './Carousel.scss'
import Icons from "../Icons/Icons";
import { InfiniteCarousel } from "./InfiniteCarousel/InfiniteCarousel";

interface ICarouselProps {
	variant: string
	children: any
};

export const Carousel: FC<ICarouselProps> = ({ variant, children }) => {

	const [scroll, setScroll] = useState<number>(0)
	const [scrollWidth, setScrollWidth] = useState<any>(0)

	const [arrowClassName, setArrowClassName] = useState<string>()
	const [blockWidth, setBlockWidth] = useState<number>(0)

	const el = useRef<any>(null)

	let block = el.current



	useEffect(() => {
		let block = el.current
		// для корректного подсчета ширины блока
		setTimeout(() => {
			setBlockWidth(block.scrollWidth)
		}, 1000);
		switch (variant) {
			case 'cards':
				// Ширина прокрутки в процентах от ширины контейнера
				setScrollWidth(block.clientWidth / 100 * 80);
				setArrowClassName('carousel__prev-arrow_icon')
				break;

			case 'filters':
				setScrollWidth(block.clientWidth / 100 * 25);
				setArrowClassName('carousel__prev-arrow_icon arrow-sm')
				break;

			case 'tv':
				setScrollWidth(500);
				setArrowClassName('carousel__prev-arrow_icon arrow-sm')
				break;
		}
	}, [])




	const btnPressPrev = () => {
		if (block !== undefined && block !== null) {

			block.scrollLeft = block.scrollLeft - scrollWidth

			if (scroll - scrollWidth < 0) {
				setScroll(0)
			} else {
				setScroll(block.scrollLeft - scrollWidth)
			}
		}
	}

	const btnPressNext = () => {
		if (block !== undefined && block !== null) {

			block.scrollLeft = block.scrollLeft + scrollWidth
			if (scroll + scrollWidth >= block.scrollWidth) {
				setScroll(block.scrollWidth)
			}
			setScroll(block.scrollLeft + scrollWidth)
		}
	}


	return (
		<div className="carousel">
			{scroll > 0
				?
				<div className="carousel__prev-arrow" onClick={btnPressPrev}>
					<Icons
						name="arrowLeft"
						size={variant === 'cards' ? '30' : '15'}
						className={arrowClassName}
						color="rgba(255, 255, 255, 0.7)"
					/>
				</div>
				: ''
			}
			{
				block && scroll + block.clientWidth < block.scrollWidth
					?
					<div className="carousel__next-arrow" onClick={btnPressNext}>
						<Icons
							name="arrowRight"
							size={variant === 'cards' ? '30' : '15'}
							className={arrowClassName}
							color="rgba(255, 255, 255, 0.7)"
						/>
					</div>
					: ''
			}
			<div
				ref={el}
				onClick={() => setBlockWidth(block.scrollWidth)}
				className={`
					${'carousel__container'} 
					${variant === 'tv'
						&&
						block
						&&
						scroll + block.clientWidth < block.scrollWidth
						?
						'carousel__container_fade-right'
						:
						variant !== 'tv'
							?
							''
							:
							'carousel__container_fade-left'
					}
					`}
			>
				{
					variant === 'main'
						?
						<InfiniteCarousel block={block} children={children} />
						:
						children
				}
			</div>

		</div>
	);
}

