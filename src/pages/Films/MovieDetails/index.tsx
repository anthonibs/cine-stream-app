import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import {
	StyledSectionHero,
	StyledWrapperParagraph,
	StyledContainerAbout,
	StyledContainerInfo,
	StyledGroupActions,
	StyledContainerFeature,
	StyledVoteAverage,
	StyledYear,
	StyledImageHeading,
	StyledSectionSimilar,
	StyledContainerSimilar,
	StyledListSimilar,
} from './MovieDetails';

import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import MyButton from 'ui/components/common/MyButton';
import HeroBanner from 'ui/components/common/HeroBanner';
import Teams from 'ui/components/common/Teams';
import CardVideo from 'ui/components/common/CardVideo';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import FilmsServer from 'data/services/FilmsServer';
import ImagesServer from 'data/services/ImagesServer';
import CreditsServer from 'data/services/CreditsServer';
import VideoServer from 'data/services/VideoServer';
import SimilarServer from 'data/services/SimilarServer';

import { IMoveDetails } from 'data/interfaces/Movie';
import { IImagesResults } from 'data/interfaces/Images';
import { ICreditsResult } from 'data/interfaces/Credits';
import { IVideo } from 'data/interfaces/Video';
import { ISimilarResult } from 'data/interfaces/Similar';
import { IError } from 'data/interfaces/Error';

import NotFound from 'pages/NotFound';

import convertMinutesToHours from 'data/utils/convertMinutesToHours';

import translation from './translation.json';

const IMAGE = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';



const MovieDetails = () => {
	const { language } = useLanguage();

	const { slug } = useParams();
	const regex = /^[\d]+/g;
	const movie_id = Number(regex.exec(slug!));

	const [movie, setMovie] = useState<IMoveDetails>();
	const [credits, setCredits] = useState<ICreditsResult>();
	const [videos, setVideos] = useState<IVideo[]>([]);
	const [images, setImages] = useState<IImagesResults>();
	const [similar, setSimilar] = useState<ISimilarResult>();

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
			console.log('Movie search error: ', error);
		} finally {
			setLoading(false);
		}
	}, [language, movie_id]);


	const loadImages = useCallback(async () => {
		try {
			const data: IImagesResults = await ImagesServer.getAllImages('movie', movie_id, language);
			setImages(data);
		} catch (error) {
			console.log(error);
		}
	}, [language, movie_id]);


	const loadCredits = useCallback(async () => {
		try {
			setLoadingCredits(true);
			const data: ICreditsResult = await CreditsServer.getCreditsAll('movie', movie_id, language);
			setCredits(data);
		} catch (error) {
			console.log(error);
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
			console.log(error);
		} finally {
			setLoadingVideos(false);
		}
	}, [language, movie_id]);


	const loadSimilar = useCallback(async () => {
		try {
			const data: any = await SimilarServer.getAll('movie', movie_id, language);
			if (data.status_code === 34) {
				throw new Error(data.status_message);
			}
			setSimilar(data);
		} catch (error) {
			console.log(error);
		}
	}, [language, movie_id]);


	const translations = useMemo(() => {
		return translation.movieDetails.find(item => item.code === language);
	}, [language]);


	useEffect(() => {
		loadMovie();
		loadImages();
		loadVideos();
		loadSimilar();
		loadCredits();
	}, [loadMovie, loadImages, loadVideos, loadCredits, loadSimilar]);

	const allGenres = movie?.genres.map(genre => genre.name);
	const commaSeparated = allGenres?.splice(0, 3).join(', ');

	function isEmptyObject<T extends object>(obj: T): boolean {
		return !!Object.keys(obj).length;
	}

	if (isEmptyObject<IError>(error)) {
		return <NotFound />;
	}


	return (
		<>
			<StyledSectionHero>
				<HeroBanner image={movie?.backdrop_path || ''}>
					<StyledContainerAbout>
						<Heading component='h1' variant='h3'>
							{!images?.logos.length
								? movie?.title
								: <StyledImageHeading
									src={`${IMAGE}${images?.logos[0].file_path}`}
									alt={movie?.title}
									draggable={false}
								/>
							}
						</Heading>

						<StyledWrapperParagraph>
							{!loading
								? <Paragraph>
									{movie?.overview}
								</Paragraph>
								: <SkeletonCustom count={3} height={15} />
							}
						</StyledWrapperParagraph>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h2' variant='subtitle' color='primary'>
									{translations?.genre}
								</Heading>
								: <SkeletonCustom count={1} height={15} width={150} />
							}
							{!loading
								? <Paragraph size='xmd'>
									{commaSeparated} - {convertMinutesToHours(movie?.runtime || 0)}
								</Paragraph>
								: <SkeletonCustom count={1} height={15} />
							}
						</StyledContainerInfo>

						<StyledGroupActions>
							<MyButton
								onClick={() => console.log('Cliquei')}
								aria-label={translations?.watch}
								variant='primary'
								icon='play'
							>
								<Paragraph size='lg'>
									{translations?.watch}
								</Paragraph>
							</MyButton>

							<MyButton
								aria-label={translations?.mylist}
								icon='plus'
							>
								<Paragraph size='lg'>
									{translations?.mylist}
								</Paragraph>
							</MyButton>

							<MyButton
								aria-label={translations?.download}
								icon='download'
							/>
						</StyledGroupActions>

						<StyledContainerFeature>
							<StyledVoteAverage
								imageSrc={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
								aria-label='Avaliação média'
							>
								{movie?.vote_average.toFixed(1)}
							</StyledVoteAverage>
							<StyledYear
								aria-label='Ano de lançamento'
							>
								{movie?.release_date.split('', 4)}
							</StyledYear>
						</StyledContainerFeature>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h3' variant='h6' color='primary'>
									{translations?.audio}
								</Heading>
								: <SkeletonCustom count={1} height={15} width={150} />
							}
							{!loading
								? <Paragraph>
									{`${movie?.spoken_languages[0].name} - Descrição de Áudio, ${movie?.spoken_languages[0].name} [Original]`}
								</Paragraph>
								: <SkeletonCustom count={1} height={15} />
							}
						</StyledContainerInfo>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h3' variant='h6' color='primary'>
									{translations?.legend}
								</Heading>
								: <SkeletonCustom count={1} height={15} width={150} />
							}
							{!loading
								? <Paragraph>
									{`${movie?.spoken_languages[0].name}`}
								</Paragraph>
								: <SkeletonCustom count={1} height={15} />
							}
						</StyledContainerInfo>
					</StyledContainerAbout>
				</HeroBanner>
			</StyledSectionHero>

			<Teams
				credits={credits!}
				isLoadingCredits={loadingCredits}
				videos={videos}
				isLoadingVideo={loadingVideos}
			/>

			{!!similar?.results.length &&
				<StyledSectionSimilar>
					<StyledContainerSimilar>
						<Heading component='h2' variant='h5'>
							{translations?.similarMovies}
						</Heading>

						<StyledListSimilar>
							{similar?.results.splice(0, 4).map(item => (
								<CardVideo key={item.id} {...item} />
							))}
						</StyledListSimilar>
					</StyledContainerSimilar>
				</StyledSectionSimilar>
			}
		</>
	);
};

export default MovieDetails;