import { FC, useState, useEffect } from "react";
import './RatingRange.scss'

interface IRatingRangeProps {
	filterBy?: string
};

export const RatingRange: FC<IRatingRangeProps> = ({ filterBy = 'rating' }) => {

	useEffect(() => {
		switch (filterBy) {
			case 'rating':
				setMaxValue(10);
				setStep(0.1);
				break;
			case 'rating-count':
				setMaxValue(100);
				setStep(10);
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
			<span
				className="range-slider__bubble"
				style={{ left: `calc(${newVal}% + (${8 - newVal * 0.13}px))` }}
			>
				{minValue}
			</span>
			<input
				className="range-slider__input"
				type="range"
				value={minValue}
				min={0}
				max={maxValue}
				onChange={handleMinChange}
				style={getBackgroundSize()}
				step={step}
			/>
			<div className="range-slider__minmax">
				<span>0</span><span>10</span>
			</div>
		</div>
	)
}
