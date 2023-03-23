import styled from 'styled-components';

export const MyListContainer = styled.section`
	width: 100%;
	position: relative;
	top: -100px;
	margin-bottom: -5rem;
	height: fit-content;
	backdrop-filter: blur(1px);
	padding: .6rem 0;
	background-image: linear-gradient(180deg,  rgba(0, 29, 45, .28) 0%, rgba(0, 29, 45, 1)  43%);
	box-shadow: 0px -8px 15px rgba(0, 29, 45, .3);
`;

export const Wrapper = styled.div`
	width: 93%;
	margin: 0rem auto 0 2.3rem;

	/* Alterando o estilo padrão do React-Slick  */
	.slick-slider {
		margin-top: .8rem;
		height: 150px;

		&:hover .slick-arrow, &:hover .slick-dots {
			opacity: 1;
			transition: opacity .6s ease;
		}

		> svg {
			width: 30px;
			color: ${({theme}) => theme.colors.basic[300]};
		}
	}

	.slick-list {
		position: relative;
		z-index: 100;
	}

	.slick-track {
		display: flex;
		gap: .8rem;
	}

	.slick-arrow {
		height: 100%;
		width: 50px;
		opacity: 0;
		transition: opacity .6s ease;
	}

	.slick-prev {
		left: -25px;
		background-image: linear-gradient(-90deg, #001825 0%, rgba(0, 0, 0, 0) 100%);
	}

	.slick-next {
		right: -30px;
		background-image: linear-gradient(90deg, #001825 0%, rgba(0, 0, 0, 0) 100%);
	}

	.slick-dots {
		position: absolute;
		right: 0;
		height: 30px;
		opacity: 0;
		width: fit-content;
		top: -25px;
		transition: opacity .6s ease;
		display: flex !important;
		gap: 10px;

		& li {
			margin: 0;
			width: 1.4rem;
			height: .22rem;
		}

		& li.slick-active button {
			background-color: ${({ theme }) => theme.colors.main};
		}

		& li button {
			width: 100%;
			height: 100%;
			padding: 0;
			transition: all .3s ease-in-out;
			background-color: ${({ theme }) => theme.colors.basic[300]};

			&::before {
				content: "";
			}
		}

		& li:not(.slick-active) button:hover {
			opacity: .8;
			background-color: ${({ theme }) => theme.colors.mainHover};
		}
	}
	/* Final do Estilo React-Slick */
`;

export const Subtitle = styled.h2`
	font-size: 1.325rem;
	margin-left: .5rem;
	color: ${({ theme }) => theme.colors.basic[100]}
`;