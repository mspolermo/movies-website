import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IFilmBannerProps {
	img: string,
	imgSm: string,
	logo: string,
	description: string,
	id: string
};

export const FilmBanner: FC<IFilmBannerProps> = ({ img, description, imgSm, logo, id }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/movies-website/film/${id}`)}>
			<picture>
				<source media="(min-width: 900px)" srcSet={img} />
				<source media="(max-width: 600px)" srcSet={imgSm} />
				<img src={img} alt="default img"></img>
			</picture>

			<div className="promoSlider__contentContainer">
				<img src={logo} alt="" />
				<div className="promoSlider__contentContainer_description">
					{description}
				</div>
			</div>
		</div>
	);
}
