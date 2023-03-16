import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

import image from 'assets/images/banner-signup-large.png';
import download from 'assets/images/download-icon.gif';

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
	border-top: 4px solid #0390C8;
	background-color: ${({ theme }) => theme.body};
`;

export const Wrapper = styled.div`
	padding: 0 4rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
	width: 100%;
	position: relative;
	height: 500px;
	gap: 3rem;

	&::after {
		content: '';
		background-image: linear-gradient(180deg , rgba(255,255,255, .0) 0%, rgba(0, 0, 0, .9) 100%);
		position: absolute;
		height: 60%;
		width: 100%;
		bottom: 0;
	}
`;

export const WrapperDescription = styled.div`
	width: 100%;
	max-width: 40%;
	position: relative;
	z-index: 500;

	&.reverse-columns {
		order: 2;
	}
`;

export const Subtitle = styled.h2`
	font-size: 28px;
	margin-bottom: 10px;

	&.modify {
		color: ${({ theme }) => theme.colors.main};
		text-align: center;
	}
`;


export const Figure = styled.figure`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 4rem 0;

	&.reverse-columns {
		order: 1;
	}
`;

export const Image = styled.img`
	display: block;
	width: fit-content;
	height: 100%;
	object-fit: contain;
	object-position: center;
	margin: 0 auto;
	filter: drop-shadow(0 0 0.85rem #000)  brightness(87%);
`;

export const WatchOffline = styled.div`
	width: 100%;
	max-width: 360px;
	position: absolute;
	padding: .8rem 0rem .8rem .8rem;
	gap: 1rem;
	background-color: #000;
	display: flex;
	height: 100%;
	max-height: 90px;
	bottom: 90px;
	left: 50%;
	transform: translateX(-50%);
	align-items: center;
	border-radius: .325rem;
	border: 2px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 2em 0 rgba(0, 0, 0, 1);
	z-index: 500;
`;

export const Description = styled.div`
	width: 100%;
	align-self: flex-start;
	font-size: .9rem;
	font-weight: 600;

	> p {
		font-size: 14px;
		color: ${({ theme }) => theme.font.color[100]};
	}

	> span {
		display: block;
		font-size: 12px;
		color: ${({ theme }) => theme.colors.main};
	}
`;


export const DownloadGif = styled.div`
	width: 30%;
	height: 100%;
	background: center / contain no-repeat url(${download});
`;


export const Statistics = styled.section`
	height: 100%;
	width: 100%;
	padding: 3rem 0;
	background-color: ${({ theme }) => theme.colors.basic[100]};
`;

export const GridStatistics = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
`;

export const WrapStatistics = styled.div`
	width: 100%;
	margin: 3rem 0;
	text-align: center;
`;

export const Count = styled.span`
	font-size: 72px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.basic[300]};;
`;