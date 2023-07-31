// Hooks React e React Router
import { useCallback, useEffect, useMemo, useState } from 'react';

// Hooks Personalizados
import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import translationsHome from './translations.json';

// Tipagem
import { IList, IMovie, IPage } from 'data/interfaces';
import Slider, { Settings } from 'react-slick';

// Chamada de API Externa
import ListServer from 'data/services/ListServer';
import DiscoverServer from 'data/services/DiscoverServer';

// Componentes de terceiros
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Componentes
import SliderHome from 'ui/components/SliderHome';
import CardVideo from 'ui/components/common/CardVideo';
import CarouselMovie from 'ui/components/common/CarouselMovie';
import Head from 'ui/components/common/Head';

// Estilização dos componentes
import * as S from './Home';

import { combinedListFavorites } from 'utils';

const Home = () => {
	const { language } = useLanguage();
	const { listMovie, listAlreadyWatched } = useMyFavoritesList();

	// Configuração Slider: react-slick
	const settings: Settings = {
		initialSlide: 0,
		infinite: true,
		speed: 1000,
		slidesToShow: listMovie.length > 4 ? 5 : listMovie.length,
		slidesToScroll: 4,
		variableWidth: listMovie.length > 4 ? false : true,
		arrows: true,
		dots: true,
		accessibility: true,
		centerMode: false,
		touchMove: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: listMovie.length > 4 ? 5 : listMovie.length,
					slidesToScroll: 4,
					variableWidth: listMovie.length > 4 ? false : true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: listMovie.length > 2 ? 3 : listMovie.length,
					slidesToScroll: 2,
					arrows: false,
					variableWidth: listMovie.length > 2 ? false : true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: listMovie.length > 2 ? 2 : listMovie.length,
					slidesToScroll: 2,
					initialSlide: 1,
					centerMode: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: false,
				},
			},
		],
	};

	const [popularMovies, setPopularMovies] = useState([] as IMovie[]);
	const [sliderMain, setSliderMain] = useState([] as IMovie[]);
	const [listCreatedCritics, setListCreatedCritics] = useState({} as IList);
	const [listCreatedCriticsRowTwo, setListCreatedCriticsRowTwo] = useState({} as IList);
	const [byGender, setByGender] = useState({} as IPage<IMovie>);

	const [loadingFavorites, setLoadingFavorites] = useState(false);

	const translations = useMemo(() => {
		return translationsHome.translation.find((item) => item.language === language);
	}, [language]);

	const fetchingDataMoviesList = useCallback(async () => {
		try {
			const movieListMarvel = await ListServer.getList<IList>(1, language);
			const movieListDC = await ListServer.getList<IList>(3, language);
			const byGender = await DiscoverServer.getByGender<IPage<IMovie>>(1, language, [37, 28]);

			setListCreatedCritics(movieListMarvel);
			setListCreatedCriticsRowTwo(movieListDC);
			setByGender(byGender);
		} catch (error) {
			console.error(error);
		}
	}, [language]);

	const fetchingDataPopularMovies = useCallback(async () => {
		try {
			setLoadingFavorites(true);
			const data = await DiscoverServer.getDiscoverMoviePopularity<IPage<IMovie>>(language);
			/* Pegue os três primeiros filmes da lista e insira no estado 'popularMovies'
			para que seja enviado um array e criado um slider a partir desta lista. */
			const sliderPopularMovie = data.results.slice(0, 4);
			setSliderMain(sliderPopularMovie);
			setPopularMovies(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingFavorites(false);
		}
	}, [language]);

	useEffect(() => {
		fetchingDataMoviesList();
		fetchingDataPopularMovies();
	}, [fetchingDataPopularMovies, fetchingDataMoviesList]);

	return (
		<>
			<Head title={language === 'pt-BR' ? 'Início' : 'Home'} />

			<S.Container>
				{!loadingFavorites ? (
					<SliderHome sliderMain={sliderMain} />
				) : (
					<div className='loading-banner' />
				)}
			</S.Container>

			{!!listMovie.length && (
				<S.MyListContainer>
					<S.Wrapper>
						<S.Subtitle>{translations?.myList}</S.Subtitle>

						<Slider {...settings}>
							{listMovie.map((video) => (
								<SkeletonTheme
									key={video.id}
									baseColor='#08293b'
									highlightColor='rgba(0, 0, 0, .07)'
								>
									{!loadingFavorites ? (
										<CardVideo {...video} />
									) : (
										<Skeleton count={1} height={150} />
									)}
								</SkeletonTheme>
							))}
						</Slider>
					</S.Wrapper>
				</S.MyListContainer>
			)}

			<S.Wrapper className='rowWrapper'>
				<S.Subtitle>{translations?.carousel_1}</S.Subtitle>
				<CarouselMovie
					movie={combinedListFavorites(popularMovies, listMovie, listAlreadyWatched)}
				/>
			</S.Wrapper>

			<S.Wrapper className='rowWrapper'>
				<S.Subtitle>{translations?.carousel_2}</S.Subtitle>
				<CarouselMovie
					movie={combinedListFavorites(listCreatedCritics?.items, listMovie, listAlreadyWatched)}
				/>
			</S.Wrapper>

			<S.Wrapper className='rowWrapper'>
				<S.Subtitle>{translations?.carousel_3}</S.Subtitle>
				<CarouselMovie
					movie={combinedListFavorites(
						listCreatedCriticsRowTwo?.items,
						listMovie,
						listAlreadyWatched
					)}
				/>
			</S.Wrapper>

			<S.Wrapper className='rowWrapper'>
				<S.Subtitle>{translations?.carousel_4}</S.Subtitle>
				<CarouselMovie
					movie={combinedListFavorites(byGender.results, listMovie, listAlreadyWatched)}
				/>
			</S.Wrapper>
		</>
	);
};

export default Home;
