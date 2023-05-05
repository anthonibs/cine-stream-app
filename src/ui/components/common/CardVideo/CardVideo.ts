import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		visibility: hidden;
		opacity: 0;
	}

	to {
		visibility: visible;
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	from {
		visibility: visible;
		opacity: 1;
	}

	to {
		visibility: hidden;
		opacity: 0;
	}
`;

export const Container = styled.div`
	position: relative;
	/* flex: 1; */

	&:hover figure::before {
		animation: ${fadeIn} .5s ease-in forwards;
	}

	&:hover figcaption {
		animation: ${fadeIn} .5s ease-in forwards;
	}

	&:hover button {
		animation: ${fadeIn} .5s ease-in forwards;
	}
`;

export const Figure = styled.figure`
	width: 100%;
	height: 150px;
	border-radius: .25rem;
	overflow: hidden;
	position: relative;

	&::before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		background: linear-gradient(180deg, rgba(33, 212, 253, .0) 0%, rgba(0,0,0, .85) 89.78%);
		animation: ${fadeOut} .8s ease forwards;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
`;

export const Legend = styled.figcaption`
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: right;
	padding: .2rem .5rem;
	color: white;
	animation: ${fadeOut} .8s ease-out forwards;
`;

export const FavoriteButton = styled.button`
	display: flex;
	position: absolute;
	z-index: 1000;
	top: 5px;
	left: 5px;
	padding: .25rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: transparent;
	animation: ${fadeOut} .8s ease-out forwards;

	> svg {
		pointer-events: none;
		font-size: 1.3rem;
		color: ${({theme}) => theme.colors.basic[400]};
		transition: color .3s ease-in-out;
	}

	&.active > svg {
		color: ${({theme}) => theme.colors.main};
	}

	&:hover:not(.active) > svg {
		color: ${({ theme }) => theme.colors.main};
	}
`;