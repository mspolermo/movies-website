import { FC } from "react";
import './TopWeekFilmCard.scss'

interface ITopWeekFilmCardProps {
	url: string
	titleUrl?: string
	placeUrl?: string
};

export const TopWeekFilmCard: FC<ITopWeekFilmCardProps> = ({ url, titleUrl, placeUrl }) => {
	return (
		<div className="topWeekFilmCard">
			<div className="topWeekFilmCard__poster">
				<div className="topWeekFilmCard__img">
					<img src={url} alt="" />
				</div>
				<div className="topWeekFilmCard__imageFade"></div>
				<div className="topWeekFilmCard__titleImg">
					<img src={titleUrl} alt="" />
				</div>
				<div className="topWeekFilmCard__placeNumber">
					<img src={placeUrl} alt="" />
				</div>
			</div>
		</div>
	);
}
