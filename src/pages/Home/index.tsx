// Hooks React e React Router
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Tipagem
import { IList } from 'data/@types/ListMovie';
import { IMovie } from 'data/@types/Movie';

// Chamada de API Externa
import ListServer from 'data/services/ListServer';
import MoviePopularityServer from 'data/services/MoviePopularityServer';

// Componentes de terceiros
import Slider from 'react-slick';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

// Componentes
import SliderHome from 'ui/components/SliderHome';
import CardVideo from 'ui/components/common/CardVideo';

// Estilização dos componentes
import { MyListContainer, Subtitle, Wrapper } from './Home';


// Configuração Slider: react-slick
const settings = {
	initialSlide: 0,
	infinite: true,
	speed: 1000,
	slidesToShow: 5,
	slidesToScroll: 5,
	arrows: true,
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	],
	nextArrow: <SlArrowRight />,
	prevArrow: <SlArrowLeft />,
};

const Home = () => {

	const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
	const [sliderMain, setSliderMain] = useState<IMovie[]>([]);
	const [listCreatedCritics, setListCreatedCritics] = useState<IList>({} as IList);

	const [numberList, setNumberList] = useState(1);
	const [language, setLanguage] = useState('pt-BR'); // Seta a linguagem dos nomes dos filmes inicial

	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(true);


	const loadingMoviesList = useCallback(async () => {
		try {
			setLoading(true);
			const data = await ListServer.getList(numberList);
			setHasError(false);
			setListCreatedCritics(data);
		} catch (error) {
			setHasError(true);
		} finally {
			setLoading(false);
		}
	}, [numberList]);



	const loadingPopularMovies = useCallback(async () => {
		try {
			setLoading(true);
			const data = await MoviePopularityServer.getMoviePopularity(language);
			/* Pegue os três primeiros filmes da lista e insira no estado 'popularMovies'
			para que seja enviado um array e criado um slider a partir desta lista. */
			setHasError(false);
			const sliderPopularMovie = data.results.slice(0, 4);
			setSliderMain(sliderPopularMovie);
			setPopularMovies(data.results);
		} catch (error) {
			setHasError(true);
		} finally {
			setLoading(false);
		}
	}, [language]);



	useEffect(() => {
		loadingMoviesList();
		loadingPopularMovies();
	}, [loadingPopularMovies, loadingMoviesList]);


	return (
		<>
			<SliderHome sliderMain={sliderMain} />

			<MyListContainer>
				<Wrapper>
					<Subtitle>Minha lista</Subtitle>
					<Slider {...settings} touchMove={false} >
						{popularMovies.map(movie => (
							<Link to={'#'} key={movie.id}>
								<CardVideo {...movie} />
							</Link>
						))}
					</Slider>
				</Wrapper>
			</MyListContainer>
		</>
	);
};

export default Home;