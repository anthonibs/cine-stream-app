import Slider from 'react-slick';

import { IMovie } from 'data/interfaces/Movie';

import { StyledContainer } from './CarouselMovie';
import CardPoster from '../CardPoster';
import SkeletonCustom from '../SkeletonCustom';

interface ICarouselMovie {
	movie: IMovie[];
}

const CarouselMovie = ({ movie }: ICarouselMovie) => {
	// Configuração Slider: react-slick
	const settings = {
		initialSlide: 1,
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 8,
		slidesToScroll: 7,
		dots: false,
		swipeToSlide: false,
		draggable: false,
		touchMove: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					dots: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 4,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					variableWidth: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
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

	return (
		<StyledContainer>
			<Slider {...settings} accessibility>
				{movie
					? movie?.map((video) => <CardPoster key={video.id} poster={video} />)
					: Array(12)
							.fill(12)
							.map((item, index) => (
								<div key={index}>
									<SkeletonCustom count={1} height={250} width={200} />
									<SkeletonCustom count={1} />
									<SkeletonCustom count={1} width={120} />
								</div>
							))}
			</Slider>
		</StyledContainer>
	);
};

export default CarouselMovie;
