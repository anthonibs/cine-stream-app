import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import { ICreditsResult, IError, IImagesResults, IMoveDetails, IVideo } from 'data/interfaces';

import * as S from './MovieDetails';

import NotFound from 'pages/NotFound';

import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import MyButton from 'ui/components/common/MyButton';
import HeroBanner from 'ui/components/common/HeroBanner';
import Teams from 'ui/components/common/Teams';
import Head from 'ui/components/common/Head';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import FilmsServer from 'data/services/FilmsServer';
import ImagesServer from 'data/services/ImagesServer';
import CreditsServer from 'data/services/CreditsServer';
import VideoServer from 'data/services/VideoServer';

import { convertMinutesToHours } from 'utils';

import translation from './translation.json';

const IMAGE = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

const MovieDetails = () => {
	const { language } = useLanguage();
	const { listMovie, handlerAddFavoritesList } = useMyFavoritesList();

	const { slug } = useParams();
	const regex = /^[\d]+/g;
	const movie_id = Number(regex.exec(slug!));

	const [movie, setMovie] = useState<IMoveDetails>();
	const [credits, setCredits] = useState<ICreditsResult>();
	const [videos, setVideos] = useState<IVideo[]>([]);
	const [images, setImages] = useState<IImagesResults>();

	const [loading, setLoading] = useState(true);
	const [loadingCredits, setLoadingCredits] = useState(true);
	const [loadingVideos, setLoadingVideos] = useState(true);
	const [error, setError] = useState<IError>({} as IError);

	const loadMovie = useCallback(async () => {
		try {
			setLoading(true);
			const data: any = await FilmsServer.getFilm(movie_id, language);
			if (data.status_code === 34) {
				setError(data);
				throw new Error(data.status_message);
			}
			setMovie(data);
		} catch (error) {
			console.error('Movie search error: ', error);
		} finally {
			setLoading(false);
		}
	}, [language, movie_id]);

	const loadImages = useCallback(async () => {
		try {
			const data = await ImagesServer.getAllImages<IImagesResults>('movie', movie_id, language);
			setImages(data);
		} catch (error) {
			console.error(error);
		}
	}, [language, movie_id]);

	const loadCredits = useCallback(async () => {
		try {
			setLoadingCredits(true);
			const data = await CreditsServer.getCreditsAll<ICreditsResult>('movie', movie_id, language);
			setCredits(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingCredits(false);
		}
	}, [language, movie_id]);

	const loadVideos = useCallback(async () => {
		try {
			setLoadingVideos(true);
			const data: any = await VideoServer.getFindAllVideo('movie', movie_id, language);
			if (data.status_code === 34) {
				throw new Error(data.status_message);
			}
			setVideos(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingVideos(false);
		}
	}, [language, movie_id]);

	const isFavorite = listMovie.some((film) => film.id === movie_id);

	const translations = useMemo(() => {
		return translation.movieDetails.find((item) => item.code === language);
	}, [language]);

	useEffect(() => {
		loadMovie();
		loadImages();
		loadVideos();
		loadCredits();
	}, [loadMovie, loadImages, loadVideos, loadCredits]);

	const allGenres = movie?.genres.map((genre) => genre.name);
	const commaSeparated = allGenres?.splice(0, 3).join(', ');

	function isEmptyObject<T extends object>(obj: T): boolean {
		return !!Object.keys(obj).length;
	}

	if (isEmptyObject<IError>(error)) {
		return <NotFound />;
	}

	return (
		<>
			<Head title={movie?.title || ''} />

			<S.SectionHero>
				<HeroBanner image={movie?.backdrop_path || ''}>
					<S.ContainerAbout>
						<Heading component='h1' variant='h3'>
							{!images?.logos.length ? (
								movie?.title
							) : (
								<S.ImageHeading
									src={`${IMAGE}${images?.logos[0].file_path}`}
									alt={movie?.title}
									draggable={false}
									loading='lazy'
									decoding='async'
								/>
							)}
						</Heading>

						<S.WrapperParagraph>
							{!loading ? (
								<Paragraph size='sm'>{movie?.overview}</Paragraph>
							) : (
								<SkeletonCustom count={3} height={15} />
							)}
						</S.WrapperParagraph>

						<S.ContainerInfo>
							{!loading ? (
								<Heading component='h2' variant='h6' color='primary'>
									{translations?.genre}
								</Heading>
							) : (
								<SkeletonCustom count={1} height={15} width={150} />
							)}
							{!loading ? (
								<Paragraph size='sm'>
									{commaSeparated} - {convertMinutesToHours(movie?.runtime || 0)}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={15} />
							)}
						</S.ContainerInfo>

						<S.GroupActions>
							<MyButton aria-label={translations?.watch} variant='primary' icon='play'>
								<Paragraph size='sm'>{translations?.watch}</Paragraph>
							</MyButton>

							<MyButton
								aria-label={translations?.mylist}
								onClick={() => handlerAddFavoritesList(movie!)}
								icon={isFavorite ? 'minus' : 'plus'}
							>
								<Paragraph size='sm'>{translations?.mylist}</Paragraph>
							</MyButton>

							<MyButton aria-label={translations?.download} icon='download' />
						</S.GroupActions>

						<S.ContainerFeature>
							<S.VoteAverage imageSrc={`${IMAGE_PUBLIC}${IMDB_LOGO}`} aria-label='Avaliação média'>
								{movie?.vote_average.toFixed(1)}
							</S.VoteAverage>
							<S.Year aria-label='Ano de lançamento'>{movie?.release_date.split('', 4)}</S.Year>
						</S.ContainerFeature>

						<S.ContainerInfo>
							{!loading ? (
								<Heading component='h3' variant='h6' color='primary'>
									{translations?.audio}
								</Heading>
							) : (
								<SkeletonCustom count={1} height={15} width={150} />
							)}
							{!loading ? (
								<Paragraph size='sm'>
									{movie?.spoken_languages &&
										`${movie?.spoken_languages[0].name} - Descrição de Áudio, ${movie?.spoken_languages[0].name} [Original]`}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={15} />
							)}
						</S.ContainerInfo>

						<S.ContainerInfo>
							{!loading ? (
								<Heading component='h3' variant='h6' color='primary'>
									{translations?.legend}
								</Heading>
							) : (
								<SkeletonCustom count={1} height={15} width={150} />
							)}
							{!loading ? (
								<Paragraph size='sm'>
									{movie?.spoken_languages && `${movie?.spoken_languages[0].name}`}
								</Paragraph>
							) : (
								<SkeletonCustom count={1} height={15} />
							)}
						</S.ContainerInfo>
					</S.ContainerAbout>
				</HeroBanner>
			</S.SectionHero>

			<Teams
				credits={credits!}
				isLoadingCredits={loadingCredits}
				videos={videos}
				isLoadingVideo={loadingVideos}
			/>
		</>
	);
};

export default MovieDetails;
