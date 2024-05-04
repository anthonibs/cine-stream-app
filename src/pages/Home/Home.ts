import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const MyListContainer = styled.section`
	backdrop-filter: blur(1px);
	box-shadow: 0px -8px 15px rgba(0, 29, 45, 0.3);
	background-image: linear-gradient(180deg, rgba(0, 29, 45, 0.28) 0%, rgba(0, 29, 45, 1) 43%);
	height: fit-content;
	margin-bottom: -13rem;
	padding: 0.6rem 0;
	position: relative;
	top: -200px;
	width: 100%;

	@media (min-width: 768px) {
		margin-bottom: -6rem;
		top: -100px;
	}
`;

export const Container = styled.section`
	height: 100%;
	padding-top: 90px;

	.loading-banner {
		animation: ${fade} 1s ease;
		background: #02111a;
		height: 70vh;
		opacity: 0;
		width: 100%;
	}

	@media (min-width: 768px) {
		padding-top: 0;

		.loading-banner {
			height: 100vh;
		}
	}
`;

export const Wrapper = styled.section`
	margin: 0 auto;
	max-width: 1400px;
	width: 85%;

	@media (min-width: 500px) {
		width: 85%;
	}

	@media (min-width: 728px) {
		width: 90%;
	}

	@media (min-width: 968px) {
		width: 93%;
	}

	&.rowWrapper {
		margin: 3rem auto;
	}

	/* Alterando o estilo padrão do React-Slick  */
	.slick-slider {
		height: 100%;
		margin-top: 1rem;
		width: 100%;

		&:hover .slick-arrow,
		&:hover .slick-dots {
			opacity: 1;
			transition: opacity 0.6s ease;
		}

		> svg {
			color: ${({ theme }) => theme.colors.basic[300]};
			width: 30px;
		}
	}

	.slick-list {
		position: relative;
		z-index: 100;
	}

	.slick-track {
		display: flex;
		gap: 0.8rem;
		margin-left: 0;
		margin-right: 0;
	}

	.slick-dots {
		display: flex !important;
		gap: 0.2rem;
		height: 20px;
		justify-content: flex-end;
		opacity: 0;
		position: absolute;
		right: 0;
		top: -15px;
		transition: opacity 0.6s ease;
		width: 150px;

		& li {
			flex-grow: 2;
			height: 0.2rem;
			margin: 0;
			max-width: 1.2rem;
		}

		& li.slick-active button {
			background-color: ${({ theme }) => theme.colors.main};
		}

		& li button {
			background-color: ${({ theme }) => theme.colors.basic[300]};
			height: 100%;
			padding: 0;
			transition: all 0.3s ease-in-out;
			width: 100%;

			&::before {
				content: '';
			}
		}

		& li:not(.slick-active) button:hover {
			background-color: ${({ theme }) => theme.colors.main};
			opacity: 0.8;
		}
	}
	/* Final do Estilo React-Slick */
`;

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.colors.basic[100]};
	font-size: 1.325rem;
	margin-left: 0.5rem;
`;
