import styled from 'styled-components';

const IMAGE_BACKGROUND = '/assets/images/not-picture.png';

export const Container = styled.article`
	display: flex;
	flex-direction: column;
	height: 320px;
	justify-content: space-evenly;
	transition: all .4s linear;
	box-shadow: 6px 6px 6px rgba(0, 0, 0, .12);
	border-radius: .45rem;
	overflow: hidden;
	outline: 2px solid transparent;

	&:hover {
		background-color: rgba(0, 0, 0, .2);
		border-radius: .45rem;
	}

	&:focus {
		outline: 2px solid rgb(9, 164, 226);
		box-shadow: rgb(9, 164, 226) 0px 3px 9px 3px;
	}

	& > a {
		outline: none;
	}
`;

export const ImageContainer = styled.figure`
	height: 237px;
	width: 100%;

	&.not-image {
		position: relative;

		&::before {
			content: '';
			background: center / cover no-repeat;
			background-image: linear-gradient(rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, .78) 78%), url(${IMAGE_BACKGROUND});
			display: block;
			height: 100%;
			width: 100%;
		}
	}
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	pointer-events: none;
	user-select: none;
	width: 100%;
`;

export const Wrapper = styled.div`
	padding: 0 .325rem .8rem;
`;

export const SubTitle = styled.h3`
	color: ${({ theme }) => theme.font.color[100]};
	font-weight: 700;
	font-size: 16px;
	max-width: 15ch;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Year = styled.span`
	color: ${({ theme }) => theme.font.color[200]};
	font-weight: 700;
	font-size: 11px;
`;

export const Wrap = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const Group = styled.figure`
	align-items: center;
	display: flex;
	gap: .3rem;
	height: 14px;
	width: auto;
`;

export const VoteAverage = styled.figcaption`
	color: #8B7424;
	font-size: 11px;
	font-weight: 700;
`;

export const ActionControl = styled.div`
	display: flex;
	gap: 5px;
`;

export const Button = styled.button`
	all: unset;
	cursor: pointer;
	display: flex;
	padding: .1rem;

	> svg {
		color: rgb(41, 41, 41);
		font-size: 1.2rem;
		pointer-events: none;
		transition: color .3s ease-in-out;
	}

	&:focus {
		border-radius: .1325rem;
		outline: 1px solid rgb(9, 164, 226);
		filter: drop-shadow(rgb(9, 164, 226) 0px 0px 0.45rem);
	}

	&.active > svg {
		color: ${({ theme }) => theme.colors.main};
	}

	&.active > svg {
		color: ${({ theme }) => theme.colors.main};
	}

	&:hover:not(.active)> svg {
		color: ${({ theme }) => theme.colors.main};
	}
`;