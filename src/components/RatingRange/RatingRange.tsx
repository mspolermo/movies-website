import { FC, useState } from "react";
import './RatingRange.scss'

interface IRatingRangeProps { };

export const RatingRange: FC<IRatingRangeProps> = () => {
	let MAX = 10;
	const [minValue, setMinValue] = useState<number>(0);

	const handleMinChange = (e: React.FormEvent<HTMLInputElement>) => {
		setMinValue(Number(e.currentTarget.value))
	}

	const getBackgroundSize = () => {
		return { backgroundSize: `${(minValue * 100) / MAX}% 100%` }
	}

	return (
		<div className="input-range">
			<input
				className="input-range__item"
				type="range"
				value={minValue}
				min={0}
				max={10}
				step={0.1}
				style={getBackgroundSize()}
				onChange={handleMinChange}
			/>
			<span className="input-range__value">{minValue}</span>
		</div>
	);
}
