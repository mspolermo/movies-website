import { FC, useState, useEffect } from "react";
import './RatingRangeSlider.scss'

interface IRatingRangeSliderProps {
	filterBy?: string
};

export const RatingRangeSlider: FC<IRatingRangeSliderProps> = ({ filterBy = 'by-rating' }) => {

	useEffect(() => {
		switch (filterBy) {
			case 'by-rating':
				setMaxValue(10);
				setStep(0.1);
				break;
			case 'by-rating-quantity':
				setMaxValue(999000);
				setStep(9000);
				break;
		};
	}, [])

	const [minValue, setMinValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(0);
	const [step, setStep] = useState<number>(0);

	const newVal = Number(((minValue - 0) * 100) / (maxValue - 0));

	const handleMinChange = (e: React.FormEvent<HTMLInputElement>) => {
		setMinValue(Number(e.currentTarget.value))
	}

	const getBackgroundSize = () => {
		return { backgroundSize: `${(minValue * 100) / maxValue}% 100%` }
	}

	return (
		<div className="range-slider">
			<div className="range-slider__block">
				<div className="range-slider__input">
					<span
						className="range-slider__bubble"
						style={{ left: `calc(${newVal}% + (${8 - newVal * 0.13}px))` }}
					>
						{filterBy === 'by-rating-quantity' ? minValue / 1000 : minValue}
					</span>
					<input
						type="range"
						value={minValue}
						min={0}
						max={maxValue}
						onChange={handleMinChange}
						style={getBackgroundSize()}
						step={step}
					/>
				</div>
				{
					filterBy === 'by-rating-quantity'
					&&
					<div className="range-slider__count">
						тыс.
					</div>
				}
			</div>
			{
				filterBy === 'by-rating'
				&&
				<div className="range-slider__minmax">
					<span>0</span><span>10</span>
				</div>
			}
		</div>
	)
}
