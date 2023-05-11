import { FC, useEffect, useState } from "react";
import Icons from "../Icons/Icons";
import { Carousel } from "../Carousel/Carousel";
import FilmCard from "../FilmCard/FilmCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IFilmsCompilationProps {
	genre: string
	title: string
};

export const FilmsCompilation: FC<IFilmsCompilationProps> = ({ genre, title }) => {
	const navigate = useNavigate()
	const [films, setFilms] = useState<Array<any>>([])



	useEffect(() => {
		fetchData()
	}, [])

	async function fetchData() {
		const response = await axios.get('http://localhost:5000/films', {
			params: {
				perPage: 19,
				page: 1,
				genres: genre
			}
		})
		const movies = response.data.map((item: any) => {
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
					<div onClick={() => navigate(`/movies-website/films/genre/${genre}`)} className="gallery__blockHeader">
						{title}
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
							<div onClick={() => navigate(`/movies-website/films/genre/${genre}`)} className="linkCard">
								Посмотреть все
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</section>

	);
}
