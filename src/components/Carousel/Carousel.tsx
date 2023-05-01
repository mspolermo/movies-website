import { FC, useEffect, useState, useRef, useMemo, Children, useCallback, PropsWithChildren, ReactNode } from "react";
import './Carousel.scss'
import Icons from "../Icons/Icons";

interface ICarouselProps {
	variant: string
	children: any
};

export const Carousel: FC<ICarouselProps> = ({ variant, children }) => {

	const [scroll, setScroll] = useState<number>(0)
	const [scrollWidth, setScrollWidth] = useState<any>(0)

	const [current, setCurrent] = useState<number>(1)

	const [translateX, setTranslateX] = useState<number>(0)

	const [sliderItems, setSliderItems] = useState<any>([])
	const [arrowClassName, setArrowClassName] = useState<string>()
	const [x1, setX1] = useState<number | null>(null)
	const [y1, setY1] = useState<number | null>(null)


	const el = useRef<any>(null)
	const slider = useRef<any>(null)
	const interval = useRef<any>(null)
	const childWidthRef = useRef<any>(null)

	let block = el.current


	const handleTouchStart = (e: any) => {
		const firstTouch = e.touches[0]
		setX1(firstTouch.clientX)
		setY1(firstTouch.clientY)
	}

	const handleTouchMove = (e: any) => {
		if (!x1 || !y1) {
			return false
		}
		let x2 = e.touches[0].clientX
		let y2 = e.touches[0].clientY
		let xDiff = x2 - x1
		let yDiff = y2 - y1
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 5) {
				actionHandler('prev')
			}
			if (xDiff < -5) {
				actionHandler('next')
			}
		}
		setX1(null)
		setY1(null)
	}


	const addActiveClass = (type: string) => {
		for (let i = 0; i < sliderItems.length; i++) {
			sliderItems[i].classList.remove("carousel__slider-item_active");
		}
		if (sliderItems[current]) {

			if (type === 'prev') {
				sliderItems[current].classList.add("carousel__slider-item_active")
				if (current === 1) {
					sliderItems[current + children.length].classList.add("carousel__slider-item_active")
				}
			} else {
				if (current === children.length) {
					sliderItems[current - 2].classList.add("carousel__slider-item_active")

				}
				sliderItems[current + 2].classList.add("carousel__slider-item_active")


			}
		}

	}

	const actionHandler = useCallback((mode: string) => {
		slider.current.style.transitionDuration = '600ms'
		if (mode === 'prev') {
			if (current <= 1) {
				setTranslateX(0)
				setCurrent(children.length)
				addActiveClass('prev')
			} else {
				setTranslateX(childWidthRef.current.clientWidth * (current - 1))
				setCurrent((prev: any) => --prev)
				addActiveClass('prev')
			}

		} else if (mode === 'next') {
			if (current === children.length) {
				setCurrent(1)
				setTranslateX(childWidthRef.current.clientWidth * (children.length + 1))
				addActiveClass('next')

			} else {
				setTranslateX((childWidthRef.current.clientWidth) * (current + 1))
				setCurrent((prev: any) => ++prev)
				addActiveClass('next')
			}
		}
	}, [current, children, sliderItems])


	useEffect(() => {
		let block = el.current
		setSliderItems(document.querySelectorAll('.carousel__slider-item'))
		document.querySelectorAll('.carousel__slider-item')[current + 1]?.classList.add('carousel__slider-item_active')
		switch (variant) {
			case 'cards':
				// Ширина прокрутки в процентах от ширины контейнера
				setScrollWidth(block.clientWidth / 100 * 86);
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
			case 'main':
				setScrollWidth(block.clientWidth);
				setArrowClassName('carousel__prev-arrow_icon')
				setTranslateX(childWidthRef.current.clientWidth)
				break;
		}
	}, [])

	// Для бесконечной прокрутки
	useEffect(() => {
		const transitionEnd = () => {
			if (slider.current) {
				if (current === 1 && block !== null) {
					slider.current.style.transitionDuration = '0ms'
					setTranslateX((childWidthRef.current.clientWidth * current))
				}

				if (current === children.length) {
					slider.current.style.transitionDuration = '0ms'
					setTranslateX(childWidthRef.current.clientWidth * children.length)
				}
			}

		}
		document.addEventListener('transitionend', transitionEnd)

		return () => {
			document.removeEventListener('transitionend', transitionEnd)
		}

	}, [current, children])


	// Автоматический скролл
	useEffect(() => {
		if (slider.current) {
			if (interval.current) {
				clearInterval(interval.current)
			}
			interval.current = setInterval(() => {
				actionHandler('next')
			}, 5000)
			return () => {
				if (interval.current) {
					clearInterval(interval.current)
				}
			}
		}
	}, [actionHandler])


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


	const slides: any | Element[] = useMemo(() => {
		if (children.length > 1) {
			let items = Children.map(children, (child, index) => (
				<div ref={childWidthRef} className="carousel__slider-item" key={index}>{child}</div>
			))
			return [
				<div className="carousel__slider-item" key={children.length + 5}>{children[children.length - 2]}</div>,
				<div className="carousel__slider-item" key={children.length + 1}>{children[children.length - 1]}</div>,
				...items,
				<div className="carousel__slider-item" key={children.length + 2}>{children[0]}</div>,
				<div className="carousel__slider-item" key={children.length + 3}>{children[1]}</div>
			]
		}

		return (
			<div >{children[0]}</div>
		)
	}, [children])

	return (
		<div className="carousel">
			{scroll > 0 || variant === 'main'
				?
				<div
					className="carousel__prev-arrow"
					onClick={variant === 'main' ? () => actionHandler('prev') : btnPressPrev}
					{...variant === 'main'
					&&
					{
						style: { left: '10%' }
					}
					}
				>
					<Icons
						name="arrowLeft"
						size={variant === 'cards' || variant === 'main' ? '30' : '15'}
						className={arrowClassName}
						color="rgba(255, 255, 255, 0.7)"
					/>
				</div>
				: ''
			}
			{
				block && scroll + block.clientWidth < block.scrollWidth || variant === 'main'
					?
					<div
						className="carousel__next-arrow"
						onClick={variant === 'main' ? () => actionHandler('next') : btnPressNext}
						{...variant === 'main'
						&&
						{
							style: { right: '11%' }
						}
						}
					>
						<Icons
							name="arrowRight"
							size={variant === 'cards' || variant === 'main' ? '30' : '15'}
							className={arrowClassName}
							color="rgba(255, 255, 255, 0.7)"
						/>
					</div>
					: ''
			}
			<div
				ref={el}
				className={`
					${variant === 'main' ? 'carousel__slider-container' : 'carousel__container'} 
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
					`} >
				{
					variant === 'main'
						?
						<div
							className="carousel__slider"
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							ref={slider}
							style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
						>
							{slides}

						</div>
						:
						children
				}
			</div>
		</div>
	);
}