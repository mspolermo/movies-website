import { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Icons from "../../../Icons/Icons";
import { Carousel } from "../../../Carousel/Carousel";
import FilmCard from "../../../FilmCard/FilmCard";

interface ISimilarFilmsBlockProps {
	similarFilms: {}[],
    title: string;
};

export const SimilarFilmsBlock: FC<ISimilarFilmsBlockProps> = ({ similarFilms, title }) => {
	const navigate = useNavigate()
	const [films, setFilms] = useState<Array<any>>([])

	useEffect(() => {
        convertData(similarFilms)
	}, [similarFilms])

	function convertData (data:{}[]){
		const movies = data.map((item: any) => {
			return {
				key: item.id,
				nameRu: item.filmNameRu,
				nameEn: item.filmNameEn,
				year: item.year,
				poster: item.smallPictureUrl,
				rating: item.ratingKp,
				filmLength: item.movieLength,
				countryRu: '',
				countryEn: '',
				genreRu: '',
				genreEn: '',
			}
		})
		setFilms(movies)
	}
	return (
		<section className="pageSection home__pageSection">
			<div className="pageSection__container">
				<div className="gallery">
					<div className="gallery__blockHeader">
						С фильмом "{title}" смотрят
						<span>
							<Icons
								name="arrowRight"
								size={'15'}
								color="white"
							/>
						</span>
					</div>
					<div className="gallery__carousel">
						<Carousel variant='cards'>
							{films && films.map(i => {
								return (
									<div className="gallery__film">
										<FilmCard
											key={i.key}
											film={i}
											onClick={(movie) => navigate('/movies-website/film/' + movie.key)}
										/>
									</div>
								)
							})}
						</Carousel>
					</div>
				</div>
			</div>
		</section>

	);
}
