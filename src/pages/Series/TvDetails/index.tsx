import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import {
	StyledContainerAbout,
	StyledContainerFeature,
	StyledContainerInfo,
	StyledContainerSimilar,
	StyledGroupActions,
	StyledImageHeading,
	StyledListSimilar,
	StyledSectionHero,
	StyledSectionSimilar,
	StyledVoteAverage,
	StyledWrapperParagraph,
	StyledYear
} from './TvDetails';

import { IPage, IMovie, ITvMovieDetails, IImagesResults, ICreditsResult, IError, ITvMovie, IVideo, IVideoResult } from 'data/interfaces';

import TvMovieServer from 'data/services/TvMovieServer';
import ImagesServer from 'data/services/ImagesServer';
import VideoServer from 'data/services/VideoServer';
import CreditsServer from 'data/services/CreditsServer';

import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import MyButton from 'ui/components/common/MyButton';
import HeroBanner from 'ui/components/common/HeroBanner';
import Teams from 'ui/components/common/Teams';
import SimilarServer from 'data/services/SimilarServer';
import CardVideo from 'ui/components/common/CardVideo';
import SkeletonCustom from 'ui/components/common/SkeletonCustom';

import NotFound from 'pages/NotFound';
import translation from './translation.json';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';



const TvDetails = () => {
	const { language } = useLanguage();
	const { listSerie, handlerAddFavoritesListOfSerie } = useMyFavoritesList();

	const { slug } = useParams();

	// Pega os primeiros números do parâmetro 'id' antes dos hífen url
	const regex = /^[\d]+/g;
	const movie_id = Number(regex.exec(slug!));

	const [tvMovie, setTvMovie] = useState<ITvMovieDetails>();
	const [images, setImages] = useState<IImagesResults>();
	const [videos, setVideos] = useState<IVideo[]>([]);
	const [credits, setCredits] = useState<ICreditsResult>();
	const [similar, setSimilar] = useState<IPage<IMovie>>();

	const [loading, setLoading] = useState(true);
	const [loadingCredits, setLoadingCredits] = useState(true);
	const [loadingVideos, setLoadingVideos] = useState(true);
	const [error, setError] = useState<IError>({} as IError);


	const loadTvMovie = useCallback(async () => {
		try {
			setLoading(true);
			const data: any = await TvMovieServer.getTvDetails(movie_id, language);
			if (data.status_code === 34) {
				setError(data);
				throw new Error(data.status_message);
			}
			setTvMovie(data);
		} catch (error) {
			console.log('TV search error: ', error);
		} finally {
			setLoading(false);
		}
	}, [language, movie_id]);


	const loadImages = useCallback(async () => {
		try {
			const data = await ImagesServer.getAllImages<IImagesResults>('tv', movie_id, language);
			setImages(data);
		} catch (error) {
			console.log(error);
		}
	}, [language, movie_id]);


	const loadVideos = useCallback(async () => {
		try {
			setLoadingVideos(true);
			const data = await VideoServer.getFindAllVideo<IVideoResult>('tv', movie_id, language);
			setVideos(data.results);
		} catch (error) {
			console.log(error);
		} finally {
			setLoadingVideos(false);
		}
	}, [language, movie_id]);


	const loadCredits = useCallback(async () => {
		try {
			setLoadingCredits(true);
			const data = await CreditsServer.getCreditsAll<ICreditsResult>('tv', movie_id, language);
			setCredits(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoadingCredits(false);
		}
	}, [language, movie_id]);

	const loadSimilar = useCallback(async () => {
		try {
			const data = await SimilarServer.getAll<IPage<IMovie>>('tv', movie_id, language);
			setSimilar(data);
		} catch (error) {
			console.log(error);
		}
	}, [language, movie_id]);


	const allGenres = tvMovie?.genres.map(genre => genre.name);
	const commaSeparated = allGenres?.join(', ');

	const translate = useMemo(() => {
		return translation.tvDetails.find(item => item.code === language);
	}, [language]);

	const isFavorite = listSerie.some(serie => serie.id === movie_id);

	useEffect(() => {
		loadTvMovie();
		loadImages();
		loadVideos();
		loadCredits();
		loadSimilar();
	}, [loadTvMovie, loadImages, loadVideos, loadCredits, loadSimilar]);


	function isEmptyObject<T extends object>(obj: T): boolean {
		return !!Object.keys(obj).length;
	}

	if (isEmptyObject<IError>(error)) {
		return <NotFound />;
	}


	const toggleStoreFavorite = (() => {
		if (tvMovie === undefined) {
			return;
		}

		const addFavorite: ITvMovie = {
			poster_path: tvMovie.poster_path,
			popularity: tvMovie.popularity,
			id: tvMovie.id,
			backdrop_path: tvMovie.backdrop_path,
			vote_average: tvMovie.vote_average,
			overview: tvMovie.overview,
			first_air_date: tvMovie.first_air_date,
			origin_country: tvMovie.origin_country,
			genre_ids: tvMovie.genre_ids,
			original_language: tvMovie.original_language,
			vote_count: tvMovie.vote_count,
			name: tvMovie.name,
			original_name: tvMovie?.original_name,
			isFavorite: true,
		};

		handlerAddFavoritesListOfSerie(addFavorite);
	});


	return (
		<>
			<StyledSectionHero>
				<HeroBanner image={tvMovie?.backdrop_path || ''}>
					<StyledContainerAbout>
						<Heading component='h1' variant='h3'>
							{!images?.logos.length
								? tvMovie?.name
								: <StyledImageHeading
									src={`${IMAGE}${images?.logos[0].file_path}`}
									alt={tvMovie?.name}
									draggable={false}
								/>
							}
						</Heading>

						<StyledWrapperParagraph>
							{!loading
								? <Paragraph>
									{tvMovie?.overview}
								</Paragraph>
								: <SkeletonCustom count={3} />
							}
						</StyledWrapperParagraph>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h2' variant='subtitle' color='primary'>
									{translate?.genre}
								</Heading>
								: <SkeletonCustom count={1} width={150} />
							}
							{!loading
								? <Paragraph size='xmd'>
									{commaSeparated}
								</Paragraph>
								: <SkeletonCustom count={1} />
							}
						</StyledContainerInfo>

						<StyledGroupActions>
							<MyButton
								aria-label={translate?.watch}
								variant='primary'
								icon='play'
							>
								<Paragraph size='lg'>
									{translate?.watch}
								</Paragraph>
							</MyButton>

							<MyButton
								aria-label={translate?.mylist}
								onClick={toggleStoreFavorite}
								icon={isFavorite ? 'minus' : 'plus'}
							>
								<Paragraph size='lg'>
									{translate?.mylist}
								</Paragraph>
							</MyButton>

							<MyButton
								aria-label={translate?.download}
								icon='download'
							/>
						</StyledGroupActions>

						<StyledContainerFeature>
							<StyledVoteAverage
								imageSrc={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
								aria-label='Avaliação média'
							>
								{tvMovie?.vote_average.toFixed(1)}
							</StyledVoteAverage>
							<StyledYear
								aria-label='Ano de lançamento'
							>
								{tvMovie?.first_air_date.split('', 4)}
							</StyledYear>
						</StyledContainerFeature>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h3' variant='h6' color='primary'>
									{translate?.audio}
								</Heading>
								: <SkeletonCustom count={1} width={150} />
							}
							{!loading ? <Paragraph>
								{`${tvMovie?.spoken_languages[0].name} - Descrição de Áudio, ${tvMovie?.spoken_languages[0].name} [Original]`}
							</Paragraph>
								: <SkeletonCustom count={1} />
							}
						</StyledContainerInfo>

						<StyledContainerInfo>
							{!loading
								? <Heading component='h3' variant='h6' color='primary'>
									{translate?.legend}
								</Heading>
								: <SkeletonCustom count={1} width={150} />
							}
							{!loading
								? <Paragraph>
									{`${tvMovie?.spoken_languages[0].name}`}
								</Paragraph>
								: <SkeletonCustom count={1} />
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
							{translate?.similarSeries}
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


export default TvDetails;