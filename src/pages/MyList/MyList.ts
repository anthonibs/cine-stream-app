import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const Container = styled.div`
	@media (min-width: 375px) {
		height: 100%;
		padding-top: 90px;
		width: 100%;
	}

	@media (min-width: 1024px) {
		min-height: calc(100vh - 321px);
	}
`;

export const Title = styled.h1`
	@media (min-width: 375px) {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: ${convertPixelsToREM(24)};
	}

	@media (min-width: 768px) {
		font-size: ${convertPixelsToREM(32)};
	}
`;

export const SectionMyFavorites = styled.section`
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

export const Grid = styled.div`
	display: grid;
	position: relative;
	width: 100%;

	@media (min-width: 375px) {
		gap: 3rem .6rem;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		margin-top: 1.6rem;

		& > .card-hover:hover {
			border-radius: .45rem .45rem 0 0;
			background-color:#131313;
			box-shadow: 6px 6px 6px rgba(0, 0, 0, .2);
			transform: scale(1.05);
			z-index: 200;
		}
	}

	@media (min-width: 600px) {
		gap: 3rem 1rem;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}

	@media (min-width: 968px) {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

		& > .card-hover:hover {
			transform: scale(1.2);
		}
	}
`;