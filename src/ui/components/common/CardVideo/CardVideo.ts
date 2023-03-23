import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	to {
		visibility: visible;
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	to {
		visibility: hidden;
		opacity: 0;
	}
`;

export const Figure = styled.figure`
	width: 100%;
	height: 150px;
	border-radius: .25rem;
	overflow: hidden;
	position: relative;

	&:hover::before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		background: linear-gradient(180deg, rgba(33, 212, 253, .0) 0%, rgba(0,0,0, .80) 93%);
		animation: ${fadeIn} .5s ease forwards;
	}

	&:hover figcaption {
		animation: ${fadeIn} .5s ease forwards;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: fill;
	object-position: center;
`;

export const Legend = styled.figcaption`
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: right;
	padding: .2rem .5rem;
	color: white;
	animation: ${fadeOut} .5s ease forwards;
`;
