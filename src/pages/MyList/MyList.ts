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

export const Container = styled.div`
	min-height: calc(100vh - 317px);
	height: 100%;
	width: 100%;

	padding-top: 90px;

	overflow-x: hidden;
`;

export const SectionMyFavorites = styled.section`
	margin: 1.5rem auto 5rem;

	width: 85%;

	@media (min-width: 768px) {
		margin: 2rem auto 5rem;

		width: 90%;
	}

	@media (min-width: 1024px) {
		width: 95%;
	}
`;

export const SectionGrid = styled.section`
	display: grid;

	position: relative;
	opacity: 1;

	width: 100%;

	&.serie {
		animation: ${fadeInSerie} 1s;
	}

	&.movie {
		animation: ${fadeInMovie} 1s alternate-reverse;
	}

	& article {
		min-width: 100%;
	}

	@media (min-width: 375px) {
		gap: 3rem 0.6rem;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));

		margin-top: 1.6rem;
		padding-top: 4rem;
	}

	@media (min-width: 600px) {
		gap: 3rem 1rem;

		padding-top: 3rem;
	}

	@media (min-width: 968px) {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}
`;

export const HeaderFilter = styled.header`
	display: flex;
	align-items: flex-end;

	height: calc(90px + 75px);
	width: 100%;

	padding-bottom: 1rem;

	background-color: ${({ theme }) => theme.body};

	position: fixed;
	top: 0;
	left: 0;

	z-index: 100;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		position: relative;
		bottom: 0px;
		left: 50%;

		transform: translateX(-50%);

		@media (min-width: 375px) {
			width: 85%;
		}

		@media (min-width: 768px) {
			width: 90%;
		}

		@media (min-width: 1024px) {
			width: 95%;
		}
	}
`;

export const MessageContent = styled.span`
	display: block;

	user-select: none;
	pointer-events: none;

	height: 100%;

	margin-top: 5rem;

	text-align: center;

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

		color: ${({ theme }) => theme.font.color[100]};

		margin-top: 0.325rem;
	}
`;
