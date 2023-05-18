import { FC, useEffect, useState } from "react";
import Icons from "../Icons/Icons";
import { Carousel } from "../Carousel/Carousel";
import FilmCard from "../FilmCard/FilmCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface IFilmsCompilationProps {
	variant: string
	genre?: string
	title: string
	similarFilms?: {}[]
};

export const FilmsCompilation: FC<IFilmsCompilationProps> = ({ genre, title, variant, similarFilms }) => {
	const navigate = useNavigate()
	const [films, setFilms] = useState<Array<any>>([])

	const { t, i18n } = useTranslation([]);

	useEffect(() => {
		if (variant === 'similarFilms' && similarFilms) {
			convertData(similarFilms)
		}
		if (variant === 'genreCompilation') {
			fetchData()
		}
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

	function convertData(data: {}[]) {
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

	function linkToFilm() {
		if (variant === 'genreCompilation') {
			navigate(`/movies-website/films/genre/${genre}`)
		}
	}

	return (
		<section className="pageSection home__pageSection">
			<div className="pageSection__container">
				<div className="gallery">
					<div
						onClick={linkToFilm}
						className="gallery__blockHeader"
					>
						{
							variant === 'similarFilms'
								?
								`${t('filmPage.filmsCompilation.similar')} "${title}" ${t('filmPage.filmsCompilation.watches')}`
								:
								title
						}
						{
							variant === 'genreCompilation'
							&&
							<span>
								<Icons
									name="arrowRight"
									size={'15'}
									color="white"
								/>
							</span>
						}
					</div>
					<div className="gallery__carousel">
						<Carousel variant='cards'>
							{films && films.map(i => {
								return (
									<div key={i.key} className="gallery__film">
										<FilmCard
											icons={variant === 'genreCompilation' && true}
											film={i}
											onClick={(movie) => navigate('/movies-website/film/' + movie.key)}
										/>
									</div>

								)
							})}
							{variant === 'genreCompilation'
								&&
								<div onClick={() => navigate(`/movies-website/films/genre/${genre}`)} className="linkCard">
									{t('mainPage.viewAll')}
								</div>
							}
						</Carousel>
					</div>
				</div>
			</div>
		</section>

	);
}

