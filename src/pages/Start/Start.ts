import styled from 'styled-components';

import image from 'assets/images/banner-signup-large.png';
import download from 'assets/images/download-icon.gif';

export const BannerMain = styled.section`
	height: 100%;
	position: relative;

	&::before {
		background-image: linear-gradient(84deg, rgba(0, 0, 0, 0.96) 12%, rgba(0, 0, 0, 0) 100%);
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	@media (min-width: 375px) {
		background-size: cover;
		background: top url(${image}) no-repeat;
	}

	@media (min-width: 768px) {
		background: center 90px url(${image}) no-repeat;
		background-size: cover;
		height: 100vh;
		padding-top: 90px;
	}

	@media (min-width: 1024px) {
		height: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;

	@media (min-width: 375px) {
		height: 100vh;
		justify-content: space-evenly;
		padding: 1rem;
		padding-top: 5rem;
	}

	@media (min-width: 768px) {
		height: 65vh;
		justify-content: center;
		min-width: 380px;
		max-width: 70vw;
		padding-left: 4rem;
	}

	@media (min-width: 1024px) {
		max-width: 60vw;
		padding: 3rem;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.main};

	@media (min-width: 375px) {
		font-size: 1.8rem;
		margin-bottom: 0.825rem;
		text-align: center;

		> span {
			color: ${({ theme }) => theme.font.color[100]};
			margin-left: 1rem;
			white-space: nowrap;
		}
	}

	@media (min-width: 768px) {
		color: ${({ theme }) => theme.colors.main};
		font-size: 2.375rem;
		text-align: left;
	}
`;

export const Paragraph = styled.p`
	@media (min-width: 375px) {
		color: ${({ theme }) => theme.font.color[200]};
		font-size: 0.8rem;
		line-height: 1.6;
		text-align: center;

		&.politic {
			font-size: 0.775rem;
			width: 100%;
		}
	}

	@media (min-width: 768px) {
		font-size: 1.25rem;
		text-align: left;

		&.politic {
			max-width: 500px;
		}
	}
`;

export const Plan = styled.div`
	@media (min-width: 375px) {
		display: flex;
		flex-direction: column;
		margin: 3rem auto;
	}

	@media (min-width: 768px) {
		margin: 2rem 0;
		margin-right: 40%;
	}
`;

export const Separate = styled.span`
	align-items: center;
	color: ${({ theme }) => theme.font.color[200]};
	display: flex;
	font-weight: 600;
	font-size: 1rem;
	justify-content: space-between;
	line-height: 18px;
	margin: 1rem 0;
	text-align: center;

	&::before,
	&::after {
		background-color: ${({ theme }) => theme.font.color[200]};
		content: '';
		height: 2px;
		width: 42%;
	}
`;

export const Section = styled.section`
	border-top: 4px solid #0390c8;
	background-color: ${({ theme }) => theme.body};
	height: 100%;
	width: 100%;
`;

export const Wrapper = styled.div`
	color: ${({ theme }) => theme.font.color[100]};
	display: flex;
	position: relative;
	width: 100%;

	&::after {
		bottom: 0;
		background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
		content: '';
		height: 60%;
		left: 0;
		position: absolute;
		width: 100%;
	}

	@media (min-width: 375px) {
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		align-items: center;
		flex-direction: row;
		gap: 3rem;
		height: 500px;
		justify-content: space-evenly;
		padding: 0 4rem;
	}
`;

export const WrapperDescription = styled.div`
	position: relative;
	width: 100%;
	z-index: 500;

	&.reverse-columns {
		order: 2;
	}
`;

export const Subtitle = styled.h2`
	@media (min-width: 375px) {
		font-size: 1.125rem;
		margin-bottom: 0.675rem;
		text-align: center;
	}

	@media (min-width: 768px) {
		font-size: 1.75rem;
		margin-bottom: 1.375rem;
		text-align: left;
	}

	&.modify {
		color: ${({ theme }) => theme.colors.main};
		text-align: center;
	}
`;

export const Figure = styled.figure`
	position: relative;

	@media (min-width: 375px) {
		height: 150px;
		margin: 0 auto;
		padding: 0.625rem;
		width: 60%;

		&.reverse-columns {
			order: 1;
		}
	}

	@media (min-width: 768px) {
		height: 100%;
		padding: 4rem 0;
		width: 100%;

		&.reverse-columns {
			order: 1;
		}
	}
`;

export const Image = styled.img`
	display: block;
	filter: drop-shadow(0 0 0.85rem #000) brightness(87%);
	height: 100%;
	margin: 0 auto;
	object-position: center;
	width: 100%;

	@media (min-width: 375px) {
		object-fit: cover;
	}

	@media (min-width: 768px) {
		object-fit: contain;
	}
`;

export const WatchOffline = styled.div`
	@media (min-width: 375px) {
		display: none;
	}

	@media (min-width: 768px) {
		align-items: center;
		border-radius: 0.325rem;
		border: 2px solid rgba(255, 255, 255, 0.2);
		background-color: #000;
		box-shadow: 0 0 2em 0 rgba(0, 0, 0, 1);
		bottom: 90px;
		display: grid;
		max-width: 360px;
		gap: 1rem;
		grid-template-columns: 60px auto 60px;
		height: 100%;
		left: 50%;
		max-height: 90px;
		position: absolute;
		padding: 0.8rem 0rem 0.8rem 0.8rem;
		transform: translateX(-50%);
		width: 100%;
		z-index: 500;
	}
`;

export const Description = styled.div`
	@media (min-width: 768px) {
		align-self: flex-start;
		font-size: 0.9rem;
		font-weight: 600;
		min-width: 100px;
		width: 100%;
	}

	@media (min-width: 1024px) {
		min-width: 180px;
	}

	> p {
		color: ${({ theme }) => theme.font.color[100]};
		font-size: 0.825rem;
	}

	> span {
		color: ${({ theme }) => theme.colors.main};
		display: block;
		font-size: 0.75rem;
	}
`;

export const DownloadGif = styled.div`
	background: center / contain no-repeat url(${download});
	height: 100%;
	width: 100%;
`;

export const Statistics = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	padding: 3rem 0;
	width: 100%;
`;

export const GridStatistics = styled.div`
	display: grid;
	width: 100%;

	@media (min-width: 375px) {
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 0 2rem;
	}
`;

export const WrapStatistics = styled.div`
	text-align: center;
	width: 100%;

	@media (min-width: 375px) {
		margin: 1rem 0;
	}

	@media (min-width: 768px) {
		margin: 3rem 0;

		& > p {
			text-align: center;
		}
	}
`;

export const Count = styled.span`
	color: ${({ theme }) => theme.colors.basic[300]};
	font-weight: 600;

	@media (min-width: 375px) {
		font-size: 3rem;
	}

	@media (min-width: 768px) {
		font-size: 4.5rem;
	}
`;
