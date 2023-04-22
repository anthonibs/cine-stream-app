import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import { IMoveDetails } from 'data/interfaces/Movie';

import FilmsServer from 'data/services/FilmsServer';

import {
	BackgroundImage,
	Container,
	ContainerTitle,
	VideoInfoGroup,
	Paragraph,
	Section,
	SubTitle,
	Title,
	VoteAverage,
	VotingGroup,
	Year,
	GroupActions,
	Button
} from './Movie';

import { TbDownload, TbPlayerPlayFilled, TbPlus } from 'react-icons/tb';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';


const Movie = () => {

	const { slug } = useParams();
	const { language } = useLanguage();

	const [movie, setMovie] = useState<IMoveDetails>();
	const [loading, setLoading] = useState<boolean>(true);


	const loaderMovie = useCallback(async () => {
		const regex = /^[\d]+/g;
		const idParams = regex.exec(slug!);

		try {
			setLoading(true);
			const data: IMoveDetails = await FilmsServer.getFilm<IMoveDetails>(Number(idParams), language);
			setMovie(data);

		} catch (error) {
			console.log(error);

		} finally {
			setLoading(false);
		}

	}, [slug, language]);


	useEffect(() => {
		loaderMovie();
	}, [loaderMovie]);

	const texto = movie?.genres.map(item => item.name);
	const commaSeparated = texto?.join(', ');

	
	return (
		<Container>
			<Section>
				<BackgroundImage
					background={movie?.backdrop_path ? `${IMAGE}${movie?.backdrop_path}` : ''}
				>
					<ContainerTitle>
						<Title>{movie?.title}</Title>
						<Paragraph>{movie?.overview}</Paragraph>

						<VideoInfoGroup>
							<SubTitle>Gêneros</SubTitle>
							<Paragraph>{commaSeparated}</Paragraph>
						</VideoInfoGroup>

						<GroupActions>
							<Button
								onClick={() => console.log('Cliquei')}
								aria-label='Assistir'
								color='primary'
							>
								Assistir
								<TbPlayerPlayFilled />
							</Button>

							<Button
								aria-label='Minha Lista'
							>
								Minha Lista
								<TbPlus />
							</Button>

							<Button
								aria-label='Download'
							>
								<TbDownload />
							</Button>
						</GroupActions>

						<VotingGroup>
							<VoteAverage
								img={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
								aria-label='Avaliação média'
							>
								{movie?.vote_average.toFixed(1)}
							</VoteAverage>
							<Year>
								{movie?.release_date.split('', 4)}
							</Year>
						</VotingGroup>

						<VideoInfoGroup>
							<SubTitle>Áudio</SubTitle>
							<Paragraph>
								{`${movie?.spoken_languages[0].name} - Descrição de Áudio, ${movie?.spoken_languages[0].name} [Original]`}
							</Paragraph>
						</VideoInfoGroup>

						<VideoInfoGroup>
							<SubTitle>Legendas</SubTitle>
							<Paragraph>
								{`${movie?.spoken_languages[0].name}`}
							</Paragraph>
						</VideoInfoGroup>
					</ContainerTitle>
				</BackgroundImage>
			</Section>
		</Container >
	);
};

export default Movie;