import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
		visibility: hidden;
	}

	to {
		opacity: 1;
		visibility: visible;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
		visibility: visible;
	}

	to {
		opacity: 0;
		visibility: hidden;
	}
`;

export const Container = styled.div`
	position: relative;

	&:hover figure::before {
		animation: ${fadeIn} 0.5s ease-in forwards;
	}

	&:hover figcaption {
		animation: ${fadeIn} 0.5s ease-in forwards;
	}

	&:hover button {
		animation: ${fadeIn} 0.5s ease-in forwards;
	}
`;

export const ImageContent = styled.figure`
	border-radius: 0.25rem;
	height: 150px;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::before {
		animation: ${fadeOut} 0.8s ease forwards;
		background: linear-gradient(180deg, rgba(33, 212, 253, 0) 0%, rgba(0, 0, 0, 0.85) 89.78%);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		width: 100%;
	}
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	object-fit: cover;
	object-position: top;
	width: 100%;
`;

export const Legend = styled.figcaption`
	animation: ${fadeOut} 0.8s ease-out forwards;
	bottom: 0;
	color: white;
	padding: 0.2rem 0.5rem;
	position: absolute;
	text-align: right;
	width: 100%;
`;

export const ButtonFavorite = styled.button`
	align-items: center;
	animation: ${fadeOut} 0.8s ease-out forwards;
	background: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
	left: 5px;
	padding: 0.25rem;
	position: absolute;
	top: 5px;
	z-index: 1000;

	> svg {
		color: ${({ theme }) => theme.colors.basic[400]};
		font-size: 1.3rem;
		pointer-events: none;
		transition: color 0.3s ease-in-out;
	}

	&.active > svg {
		color: ${({ theme }) => theme.colors.main};
	}

	&:hover:not(.active) > svg {
		color: ${({ theme }) => theme.colors.main};
	}
`;
