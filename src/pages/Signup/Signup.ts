import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';
import image from 'assets/images/banner-signup-large.png';

export const BannerMain = styled.section`
	padding-top: 90px;
	position: relative;
	height: 100%;
	background: center 90px url(${image}) no-repeat;

	&::before {
		content: '';
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		position: absolute;
		background-image: linear-gradient(84deg, rgba(0,0,0, .96) 12%, rgba(0,0,0,0) 100%);
	}
`;


export const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	height: 67vh;
	overflow: hidden;
	width: 100vw;
	min-width: ${convertPixelsToREM(380)};
	max-width: 50vw;
	padding-left: ${convertPixelsToREM(64)};
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.main};
	font-size: ${convertPixelsToREM(38)};
	margin-bottom: ${convertPixelsToREM(10)};

	> span {
		margin-left: 1rem;
		white-space: nowrap;
		color: ${({ theme }) => theme.font.color[100]};
	}
`;


export const Paragraph = styled.p`
	font-size: 18px;
	line-height: 1.6;
	color: ${({ theme }) => theme.font.color[200]};

	&.politic	{
		font-size: 14px;
		width: 100%;
		max-width: 500px;
	}
`;


export const Plan = styled.div`
	display: flex;
	margin: 2rem 0;
	margin-right: 40%;
	flex-direction: column;
`;


export const Separate = styled.span`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;
	margin: 16px 0;
	line-height: 18px;
	font-size: 18px;
	color: ${({ theme }) => theme.font.color[200]};

	&::before {
		content: '';
		height: 2px;
		width: 42%;
		background-color: ${({ theme }) => theme.font.color[200]};
	}

	&::after {
		content: '';
		height: 2px;
		width: 42%;
		background-color: ${({ theme }) => theme.font.color[200]};
	}
`;


export const Section = styled.section`
	width: 100%;
	height: 100%;
	border-top: 6px solid #0390C8;
	background-color: ${({ theme }) => theme.body};
`;

export const Wrapper = styled.div`
	padding: 0 4rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
	width: 100%;
	height: 500px;
	gap: 3rem;
`;

export const WrapperDescription = styled.div`
	width: 100%;
	max-width: 40%;
`;

export const Subtitle = styled.h2`
	font-size: 28px;
	margin-bottom: 10px;
`;


export const Figure = styled.figure`
	width: 100%;
	height: 100%;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
	padding: 4rem 0;
	margin: 0 auto;
	filter: grayscale(47%);
`;