import styled from 'styled-components';

export const KnownForScroll = styled.div`
	width: 100%;
	position: relative;
	height: 100%;

	&::after {
		content: '';
		position: absolute;
		height: 95%;
		width: 60px;
		background-image: linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 1) 80%
		);
		top: 0;
		right: 0;
		transition: opacity 1s;
	}

	&.is-fading-scroll::after {
		opacity: 0;
	}
`;

export const TargetScroll = styled.span`
	position: absolute;
	height: 100%;
	width: 50px;
	left: 0;
	top: 0;
	visibility: hidden;
	opacity: 0;
`;

export const ListKnowFor = styled.ul`
	display: flex;
	gap: 0.5rem;
	height: 300px;
	position: relative;
	overflow-y: hidden;
	overflow-x: scroll;
	flex-wrap: nowrap;
	width: auto;

	&::-webkit-scrollbar {
		width: 6px;
		height: 12px;
		scroll-behavior: smooth;
	}

	&::-webkit-scrollbar-track {
		background-color: #e0dede;
		border-radius: 9px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 9px;
		background-color: ${({ theme }) => theme.colors.main};
	}
`;

export const ItemKnowFor = styled.li`
	height: 100%;
	display: block;
	min-width: 170px;
	text-align: center;
	user-select: none;

	& > figure {
		pointer-events: none;
		height: 230px;
		width: 100%;
		margin-bottom: 0.225rem;

		& > img {
			display: block;
			height: 100%;
			width: 100%;
			border-radius: 0.625rem;
		}
	}
`;
