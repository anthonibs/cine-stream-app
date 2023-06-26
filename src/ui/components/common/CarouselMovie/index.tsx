import Slider, { Settings } from 'react-slick';

import { IMovie } from 'data/interfaces/Movie';

import * as S from './CarouselMovie';

import CardPoster from '../CardPoster';
import SkeletonCustom from '../SkeletonCustom';

interface ICarouselMovie {
	movie: IMovie[];
}

const CarouselMovie = ({ movie }: ICarouselMovie) => {
	// Configuração Slider: react-slick
	const settings: Settings = {
		initialSlide: 0,
		infinite: true,
		speed: 1000,
		slidesToShow: 8,
		slidesToScroll: 4,
		variableWidth: true,
		arrows: true,
		dots: true,
		accessibility: true,
		centerMode: false,
		touchMove: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 4,
					arrows: false,
					variableWidth: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
					variableWidth: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					arrows: false,
					variableWidth: false,
				},
			},
		],
	};

	return (
		<S.Container>
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
		</S.Container>
	);
};

export default CarouselMovie;
