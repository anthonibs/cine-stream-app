import { ReactNode } from 'react';
import * as S from './HeroBanner';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;

interface IHeroBannerProps {
	image: string;
	children?: ReactNode;
}

const HeroBanner = ({ image, children }: IHeroBannerProps) => {
	return <S.Hero backgroundImage={image ? `${IMAGE}${image}` : ''}>{children}</S.Hero>;
};

export default HeroBanner;
