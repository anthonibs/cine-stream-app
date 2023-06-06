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

export const StyledContainer = styled.div`
	position: relative;

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

export const StyledImageContent = styled.figure`
	border-radius: .25rem;
	height: 150px;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::before {
		animation: ${fadeOut} .8s ease forwards;
		background: linear-gradient(180deg, rgba(33, 212, 253, .0) 0%, rgba(0,0,0, .85) 89.78%);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		width: 100%;
	}
`;

export const StyledImage = styled.img`
	display: block;
	height: 100%;
	object-fit: cover;
	object-position: top;
	width: 100%;
`;

export const StyledLegend = styled.figcaption`
	animation: ${fadeOut} .8s ease-out forwards;
	bottom: 0;
	color: white;
	padding: .2rem .5rem;
	position: absolute;
	text-align: right;
	width: 100%;
`;

export const StyledButtonFavorite = styled.button`
	align-items: center;
	animation: ${fadeOut} .8s ease-out forwards;
	background: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
	left: 5px;
	padding: .25rem;
	position: absolute;
	top: 5px;
	z-index: 1000;

	> svg {
		color: ${({theme}) => theme.colors.basic[400]};
		font-size: 1.3rem;
		pointer-events: none;
		transition: color .3s ease-in-out;
	}

	&.active > svg {
		color: ${({theme}) => theme.colors.main};
	}

	&:hover:not(.active) > svg {
		color: ${({ theme }) => theme.colors.main};
	}
`;