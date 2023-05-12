import { FC } from "react";
import './TopWeekFilmCard.scss'
import { useNavigate } from "react-router-dom";

interface ITopWeekFilmCardProps {
	url: string
	titleUrl?: string
	placeUrl: string
	id: string
};

export const TopWeekFilmCard: FC<ITopWeekFilmCardProps> = ({ url, titleUrl, placeUrl, id }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/movies-website/film/${id}`)}
			className="topWeekFilmCard">
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
