// Hooks React e React Router
import { useCallback, useEffect, useState } from 'react';

// Hooks Personalizados
import useLanguage from 'data/hooks/useLanguage';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

// Tipagem
import { IList } from 'data/@types/ListMovie';
import { IMovie } from 'data/@types/Movie';
import { ITotalPage } from 'data/@types/TotalPage';

// Chamada de API Externa
import ListServer from 'data/services/ListServer';
import MoviePopularityServer from 'data/services/MoviePopularityServer';
import ByGenderServer from 'data/services/ByGenderServer';

// Componentes de terceiros
import Slider from 'react-slick';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Componentes
import SliderHome from 'ui/components/SliderHome';
import CardVideo from 'ui/components/common/CardVideo';
import CarouselMovie from 'ui/components/common/CarouselMovie';

// Estilização dos componentes
import { Container, MyListContainer, Subtitle, Wrapper } from './Home';


const Home = () => {
	const { language } = useLanguage();
	const { myFavoritesList } = useMyFavoritesList();

	// Configuração Slider: react-slick
	const settings = {
		initialSlide: 0,
		infinite: true,
		speed: 1000,
		slidesToShow: myFavoritesList.length > 5 ? 5 : myFavoritesList.length,
		slidesToScroll: 5,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: myFavoritesList.length > 4 ? 4 : myFavoritesList.length,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: myFavoritesList.length > 2 ? 2 : myFavoritesList.length,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: myFavoritesList.length > 1 ? 1 : myFavoritesList.length,
					slidesToScroll: 1
				}
			}
		],
	};

	const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
	const [sliderMain, setSliderMain] = useState<IMovie[]>([]);
	const [listCreatedCritics, setListCreatedCritics] = useState<IList>({} as IList);
	const [listCreatedCriticsRowTwo, setListCreatedCriticsRowTwo] = useState<IList>({} as IList);
	const [byGender, setByGender] = useState<ITotalPage>({} as ITotalPage);

	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [loadingFavorites, setLoadingFavorites] = useState(false);

	const loadingMoviesList = useCallback(async () => {
		try {
			setLoading(true);
			const movieListMarvel = await ListServer.getList<IList>(1, language);
			const movieListDC = await ListServer.getList<IList>(3, language);
			const byGender = await ByGenderServer.getByGender<ITotalPage>(1, language, [37, 28]);

			setHasError(false);
			setListCreatedCritics(movieListMarvel);
			setListCreatedCriticsRowTwo(movieListDC);
			setByGender(byGender);

		} catch (error) {
			setHasError(true);
		} finally {
			setLoading(false);
		}
	}, [language]);

	const loadingPopularMovies = useCallback(async () => {
		try {
			setLoadingFavorites(true);
			const data = await MoviePopularityServer.getMoviePopularity<ITotalPage>(language);
			/* Pegue os três primeiros filmes da lista e insira no estado 'popularMovies'
			para que seja enviado um array e criado um slider a partir desta lista. */
			setHasError(false);
			const sliderPopularMovie = data.results.slice(0, 4);
			setSliderMain(sliderPopularMovie);
			setPopularMovies(data.results);
		} catch (error) {
			setHasError(true);
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

			{myFavoritesList.length > 0
				&&
				<MyListContainer>
					<Wrapper>
						<Subtitle>Minha lista</Subtitle>

						<Slider
							{...settings}
							variableWidth={myFavoritesList.length >= 5 ? false : true}
							touchMove={false}
						>
							{myFavoritesList.map(video => (
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
				<Subtitle>Os filmes mais populares</Subtitle>
				<SkeletonTheme
					baseColor="#08293b"
					highlightColor="rgba(0, 0, 0, .07)"
				>
					{!loading
						? <CarouselMovie
							movie={popularMovies}
							path='films'
						/>
						: <Skeleton count={1} height={150} />
					}
				</SkeletonTheme>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>O Universo Cinematográfico Marvel</Subtitle>
				<SkeletonTheme
					baseColor="#08293b"
					highlightColor="rgba(0, 0, 0, .07)"
				>
					{!loading
						? <CarouselMovie
							movie={listCreatedCritics.items}
							path='films'
						/>
						: <Skeleton count={1} height={150} />}
				</SkeletonTheme>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>Filmes da DC Comics</Subtitle>
				<SkeletonTheme
					baseColor="#08293b"
					highlightColor="rgba(0, 0, 0, .07)"
				>
					{!loading
						? <CarouselMovie
							movie={listCreatedCriticsRowTwo.items}
							path='films'
						/>
						: <Skeleton count={1} height={150} />}
				</SkeletonTheme>
			</Wrapper>

			<Wrapper className='rowWrapper'>
				<Subtitle>Faroeste, bang bang</Subtitle>
				<SkeletonTheme
					baseColor="#08293b"
					highlightColor="rgba(0, 0, 0, .07)"
				>
					{!loading
						? <CarouselMovie
							movie={byGender.results}
							path='films'
						/>
						:
						<Skeleton count={1} height={200} />
					}
				</SkeletonTheme>
			</Wrapper>
		</>
	);
};


export default Home;