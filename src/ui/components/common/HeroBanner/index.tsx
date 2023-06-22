import { ReactNode } from 'react';
import { StyledHero } from './HeroBanner';

const IMAGE = process.env.REACT_APP_IMG_ORIGINAL;

interface IHeroBannerProps {
	image: string;
	children?: ReactNode;
}

const HeroBanner = ({ image, children }: IHeroBannerProps) => {
	return <StyledHero backgroundImage={image ? `${IMAGE}${image}` : ''}>{children}</StyledHero>;
};

export default HeroBanner;
