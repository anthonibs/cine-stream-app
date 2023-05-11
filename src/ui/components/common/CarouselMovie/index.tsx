import { IMovie } from 'data/interfaces/Movie';

import Slider from 'react-slick';

import CardPoster from '../CardPoster';

import { Container } from './CarouselMovie';
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
		slidesToShow: 8,
		slidesToScroll: 8,
		arrows: true,
		dots: true,
		className: 'slider-container-size',
		swipeToSlide: false,
		draggable: false,
		touchMove: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
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

	return (
		<Container>
			<Slider {...settings}>
				{movie ? movie?.map(video =>
					<CardPoster
						key={video.id}
						poster={video}
					/>
				)
					: Array(12).fill(12).map((item, index) =>
						<div key={index}>
							<SkeletonCustom count={1} height={250} />
							<SkeletonCustom count={1} />
							<SkeletonCustom count={1} width={100} />
						</div>)
				}
			</Slider>
		</Container>
	);
};


export default CarouselMovie;

