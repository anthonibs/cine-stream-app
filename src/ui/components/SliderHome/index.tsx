import { memo } from 'react';

import Slider from 'react-slick';

import { IMovie } from 'data/interfaces/Movie';

import * as S from './SliderHome';

import useRizesScreen from 'data/hooks/useRizesScreen';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;

// Configuração padrão dos Sliders
const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000,
	fade: true,
	swipe: false,
	pauseOnHover: false,
};

interface IProps {
	sliderMain: IMovie[];
}

const SliderHome = ({ sliderMain }: IProps) => {
	const { resizeScreen } = useRizesScreen();

	return (
		<Slider {...settings}>
			{sliderMain.map((item) => (
				<S.Container key={item.id}>
					<S.Image
						src={`${IMAGE}${resizeScreen >= 768 ? item.backdrop_path : item.poster_path}`}
						alt={item.title}
					/>
				</S.Container>
			))}
		</Slider>
	);
};

export default memo(SliderHome);
