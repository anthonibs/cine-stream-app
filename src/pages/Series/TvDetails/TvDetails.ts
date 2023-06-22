import styled from 'styled-components';
import { convertPixelsToREM } from 'utils';

interface IVoteAverageProps {
	imageSrc: string;
}

export const StyledSectionHero = styled.section`
	position: relative;
	width: 100%;

	&::before {
		background-image: linear-gradient(180deg, rgba(0, 29, 45, 0.2) 0%, rgb(0, 29, 45) 87%);
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}

	@media (min-width: 375px) {
		height: 100vh;
	}

	@media (min-width: 1000px) {
		height: 90vh;
	}
`;

export const StyledContainerAbout = styled.div`
	max-width: 520px;
	position: absolute;
	width: 100%;
	z-index: 10;

	@media (min-width: 375px) {
		padding: 0 1.2rem;
		top: ${convertPixelsToREM(100)};
	}

	@media (min-width: 768px) {
		left: 1rem;
		top: ${convertPixelsToREM(100)};
	}

	@media (min-width: 1100px) {
		top: ${convertPixelsToREM(120)};
	}
`;

export const StyledImageHeading = styled.img`
	display: block;
	height: 80px;
	width: 100%;
	object-position: center;
	object-fit: contain;

	@media (min-width: 768px) {
		height: 100px;
		object-position: left;
	}

	@media (min-width: 1000px) {
		object-position: center;
	}

	@media (min-width: 1100px) {
		height: 120px;
	}
`;

export const StyledWrapperParagraph = styled.div`
	display: flexbox;
	margin-top: 2.3rem;
	overflow: hidden;
	width: 100%;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	@media (min-width: 768px) {
		margin-top: 2rem;
		-webkit-line-clamp: 3;
	}
`;

export const StyledContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	margin-top: 1rem;
`;

export const StyledContainerFeature = styled.div`
	align-items: center;
	display: flex;
	gap: 0.8rem;
`;

export const StyledVoteAverage = styled.span<IVoteAverageProps>`
	align-items: center;
	color: #f6c700;
	display: flex;
	font-size: 1rem;
	font-weight: 700;

	&::before {
		background: center / contain no-repeat url(${({ imageSrc }) => imageSrc});
		content: '';
		display: block;
		height: 1rem;
		margin-right: 0.6rem;
		width: 2.3rem;
	}

	@media (min-width: 768px) {
		font-size: 1.2rem;

		&::before {
			height: 1.725rem;
			margin-right: 0.8rem;
			width: 3rem;
		}
	}
`;

export const StyledYear = styled.span`
	color: ${({ theme }) => theme.colors.basic[300]};
	font-size: 1rem;
	font-weight: 700;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

export const StyledGroupActions = styled.div`
	display: flex;
	gap: 0.8rem;
	margin: 25px 0;

	@media (min-width: 768px) {
		gap: 1.2rem;
	}
`;
