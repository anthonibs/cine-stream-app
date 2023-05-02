import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';


interface IVoteAverageProps {
	imageSrc: string;
}

export const StyledSectionHero = styled.section`
	height: 80vh;
	position: relative;
	width: 100%;

	&::before {
		background-image: linear-gradient(270deg, rgba(0, 29, 45, 0.28) 0%, rgb(0, 29, 45) 80%);
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
`;



export const StyledContainerAbout = styled.div`
	max-width: 520px;
	position: absolute;
	top: ${convertPixelsToREM(120)};
	width: 100%;
	z-index: 10;
`;

export const StyledImageHeading = styled.img`
	display: block;
	height: 160px;
	width: 100%;
	object-position: center;
	object-fit: contain;
`;

export const StyledWrapperParagraph = styled.div`
	display: flexbox;
	margin-top: 1rem;
  overflow: hidden;
	width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: .4rem;
	margin-top: 1rem;
`;

export const StyledContainerFeature = styled.div`
	align-items: center;
	display: flex;
	gap: .8rem;
`;

export const StyledVoteAverage = styled.span<IVoteAverageProps>`
	align-items: center;
	color: #F6C700;
	display: flex;
	font-size: 20px;
	font-weight: 700;

	&::before {
		content: '';
		background:  center / contain no-repeat url(${({ imageSrc }) => imageSrc});
		display: block;
		height: 27px;
		margin-right: .8rem;
		width: 50px;
	}
`;

export const StyledYear = styled.span`
	color: ${({ theme }) => theme.colors.basic[300]};
	font-size: 20px;
	font-weight: 700;
`;

export const StyledGroupActions = styled.div`
	display: flex;
	gap: 1.2rem;
	margin: 25px 0;
`;


export const StyledSectionSimilar = styled.section`
	width: 100%;
	height: fit-content;
	position: relative;
	z-index: 200;
`;

export const StyledContainerSimilar = styled.div`
	width: 95%;
	margin: 3rem auto 5rem;
`;

export const StyledListSimilar = styled.div`
	display: grid;
	margin: 1rem auto 2rem;
	gap: 1.6rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	width: 98%;
`;

