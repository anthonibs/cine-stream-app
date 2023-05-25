import styled, { keyframes } from 'styled-components';

const fadeInSerie = keyframes`
	to {
		opacity: 1;
	}
	from{
		opacity: 0;
	}
`;

const fadeInMovie = keyframes`
	to {
		opacity: 0;
	}
	from{
		opacity: 1;
	}
`;


export const StyledContainer = styled.div`
	height: 100%;
	min-height: calc(100vh - 317px);
	padding-top: 90px;
	width: 100%;
`;


export const StyledSectionMyFavorites = styled.section`
	@media (min-width: 375px) {
		margin: 1.5rem auto 5rem;
		width: 85%;
	}

	@media (min-width: 768px) {
		margin: 2rem auto 5rem;
		width: 90%;
	}

	@media (min-width: 1024px) {
		width: 95%;
	}
`;


export const StyledGrid = styled.div`
	display: grid;
	position: relative;
	width: 100%;
	opacity: 1;

	&.serie {
		animation: ${fadeInSerie} 1s;
	}

	&.movie {
		animation: ${fadeInMovie} 1s alternate-reverse;
	}

	@media (min-width: 375px) {
		gap: 3rem .6rem;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		margin-top: 1.6rem;
	}

	@media (min-width: 600px) {
		gap: 3rem 1rem;
	}

	@media (min-width: 968px) {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}
`;


export const StyledHeaderColumn = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;


export const StyledMessageContainer = styled.span`
	text-align: center;
	display: block;
	margin-top: 4rem;
	pointer-events: none;
	user-select: none;
	height: 100%;

	&.serie {
			animation: ${fadeInSerie} 2s;
		}

	&.movie {
		animation: ${fadeInMovie} 2s alternate-reverse;
	}

	& > svg {
		font-size: 6rem;
		color: ${({ theme }) => theme.font.color[100]};
		margin-bottom: 1rem;
	}

	& > span {
		display: block;
		margin-top: .325rem;
		color:  ${({ theme }) => theme.font.color[100]};
	}
`;