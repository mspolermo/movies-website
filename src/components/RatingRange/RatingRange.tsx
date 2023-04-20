import { FC } from "react";
interface IRatingRangeProps { };

export const RatingRange: FC<IRatingRangeProps> = (props) => {
	return (
		<div>
			<input type="range" />
		</div>
	);
}
