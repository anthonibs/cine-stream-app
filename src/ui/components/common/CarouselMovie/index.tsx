import { IMovie } from 'data/@types/Movie';
import Slider from 'react-slick';
import CardPoster from '../CardPoster';
import { Container } from './CarouselMovie';

// Configuração Slider: react-slick
const settings = {
	initialSlide: 0,
	infinite: true,
	speed: 1000,
	slidesToShow: 6,
	slidesToScroll: 6,
	arrows: true,
	dots: true,
	className: 'slider-container-size',
	swipeToSlide: false,
	draggable: false,
	touchMove: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 0
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
};

interface ICarouselMovie {
	movie: IMovie[];
}

const CarouselMovie = ({ movie }: ICarouselMovie) => {

	return (
		<Container>
			<Slider {...settings}>
				{movie.map(video => {
					return <div key={video.id} >
						<CardPoster poster={video} />
					</div>;
				})}
			</Slider>
		</Container>
	);
};

export default CarouselMovie;

