import { memo } from 'react';

import Slider from 'react-slick';


import { IMovie } from 'data/@types/Movie';
import { Container, Image } from './SliderHome';

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
	sliderMain: IMovie[]
}

const SliderHome = ({ sliderMain }: IProps) => {
	return (
		<Slider {...settings} >
			{sliderMain.map(item => (
				<Container key={item.id}>
					<Image
						src={`${IMAGE}${item.backdrop_path}`}
						alt={item.title}
					/>
				</Container>
			))}
		</Slider>
	);
};

export default memo(SliderHome);