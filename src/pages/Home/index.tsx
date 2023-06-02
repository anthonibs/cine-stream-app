// Hooks React e React Router
import { useCallback, useEffect, useMemo, useState } from 'react';

// Hooks Personalizados
import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import translationsHome from './translations.json';

// Tipagem
import { IList, IMovie, IPage } from 'data/interfaces';

// Chamada de API Externa
import ListServer from 'data/services/ListServer';
import DiscoverServer from 'data/services/DiscoverServer';

// Componentes de terceiros
import Slider from 'react-slick';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Componentes
import SliderHome from 'ui/components/SliderHome';
import CardVideo from 'ui/components/common/CardVideo';
import CarouselMovie from 'ui/components/common/CarouselMovie';

// Estilização dos componentes
import { Container, MyListContainer, Subtitle, Wrapper } from './Home';
import { Settings } from 'react-slick';


const Home = () => {
	const { language } = useLanguage();
	const { listMovie } = useMyFavoritesList();

	// Configuração Slider: react-slick
	const settings: Settings = {
		initialSlide: 0,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 5,
		variableWidth: false,
		arrows: true,
		dots: true,
		accessibility: true,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: listMovie.length > 4 ? 5 : listMovie.length,
					slidesToScroll: 4,
					infinite: true,
					dots: true,
					centerMode: false,
					variableWidth: listMovie.length > 4 ? false : true,
					touchMove: true,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: listMovie.length > 2 ? 3 : listMovie.length,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					centerMode: false,
					variableWidth: listMovie.length > 2 ? false : true,
					touchMove: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: listMovie.length > 2 ? 2 : listMovie.length,
					slidesToScroll: 2,
					initialSlide: 1,
					centerMode: true,
					variableWidth: true,
					touchMove: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: false,
					touchMove: true,
				}
			}
		],
	};

	const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
	const [sliderMain, setSliderMain] = useState<IMovie[]>([]);
	const [listCreatedCritics, setListCreatedCritics] = useState<IList>({} as IList);
	const [listCreatedCriticsRowTwo, setListCreatedCriticsRowTwo] = useState<IList>({} as IList);
	const [byGender, setByGender] = useState<IPage<IMovie>>({} as IPage<IMovie>);

	const [loadingFavorites, setLoadingFavorites] = useState(false);

	const translations = useMemo(() => {
		return translationsHome.translation.find(item => item.language === language);
	}, [language]);


	const loadingMoviesList = useCallback(async () => {
		try {
			const movieListMarvel = await ListServer.getList<IList>(1, language);
			const movieListDC = await ListServer.getList<IList>(3, language);
			const byGender = await DiscoverServer.getByGender<IPage<IMovie>>(1, language, [37, 28]);

			setListCreatedCritics(movieListMarvel);
			setListCreatedCriticsRowTwo(movieListDC);
			setByGender(byGender);

		} catch (error) {
			console.log(error);
		}
	}, [language]);


	const loadingPopularMovies = useCallback(async () => {
		try {
			setLoadingFavorites(true);
			const data = await DiscoverServer.getDiscoverMoviePopularity<IPage<IMovie>>(language);
			/* Pegue os três primeiros filmes da lista e insira no estado 'popularMovies'
			para que seja enviado um array e criado um slider a partir desta lista. */
			const sliderPopularMovie = data.results.slice(0, 4);
			setSliderMain(sliderPopularMovie);
			setPopularMovies(data.results);
		} catch (error) {
			console.log(error);
		} finally {
			setLoadingFavorites(false);
		}
	}, [language]);


	useEffect(() => {
		loadingMoviesList();
		loadingPopularMovies();
	}, [loadingPopularMovies, loadingMoviesList]);


	return (
		<>
			<Container>
				{!loadingFavorites ? <SliderHome sliderMain={sliderMain} /> : <div className='loading-banner' />}
			</Container>

			{listMovie.length > 0
				&&
				<MyListContainer>
					<Wrapper>
						<Subtitle>{translations?.myList}</Subtitle>
						<Slider
							{...settings}
						>
							{listMovie.map(video => (
								<SkeletonTheme
									baseColor="#08293b"
									highlightColor="rgba(0, 0, 0, .07)"
									key={video.id}
								>
									{!loadingFavorites
										? <CardVideo {...video} />
										: <Skeleton count={1} height={150}
										/>}
								</SkeletonTheme>
							))}
						</Slider>
					</Wrapper>
				</MyListContainer>
			}

			<Wrapper className='rowWrapper'>
				<Subtitle>{translations?.carousel_1}</Subtitle>
				<CarouselMovie
					movie={popularMovies}
				/>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>{translations?.carousel_2}</Subtitle>
				<CarouselMovie
					movie={listCreatedCritics.items}
				/>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>{translations?.carousel_3}</Subtitle>

				<CarouselMovie
					movie={listCreatedCriticsRowTwo.items}
				/>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>{translations?.carousel_4}</Subtitle>

				<CarouselMovie
					movie={byGender.results}
				/>
			</Wrapper>
		</>
	);
};


export default Home;