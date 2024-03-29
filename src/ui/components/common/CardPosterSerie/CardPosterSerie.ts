import styled from 'styled-components';

const IMAGE_BACKGROUND = '/assets/images/not-picture.png';

export const Container = styled.article`
	border-radius: 0.45rem;
	box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.12);
	display: flex;
	flex-direction: column;
	height: 320px;
	justify-content: space-between;
	min-width: 200px;
	overflow: hidden;
	outline: 2px solid transparent;
	transition: all 0.4s linear;
	width: 100%;

	&:hover {
		border-radius: 0.45rem;
		background-color: rgba(0, 0, 0, 0.2);
	}

	&:focus {
		box-shadow: rgb(9, 164, 226) 0px 3px 9px 3px;
		outline: 2px solid rgb(9, 164, 226);
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
			background: center / cover no-repeat;
			background-image: linear-gradient(rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, 0.78) 78%),
				url(${IMAGE_BACKGROUND});
			content: '';
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

export const Content = styled.div`
	padding: 0 0.325rem 0.8rem;
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

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const AverageWrap = styled.figure`
	align-items: center;
	display: flex;
	gap: 0.3rem;
	height: 14px;
	width: auto;
`;

export const Average = styled.figcaption`
	color: #f6c700;
	font-size: 11px;
	font-weight: 700;
`;

export const Actions = styled.div`
	display: flex;
	gap: 5px;
`;

export const ButtonAction = styled.button`
	all: unset;
	cursor: pointer;
	display: flex;
	padding: 0.225rem;

	> svg {
		color: rgb(41, 41, 41);
		font-size: 1.2rem;
		pointer-events: none;
		transition: color 0.3s ease-in-out;
	}

	&:focus {
		border-radius: 0.1325rem;
		outline: 1px solid rgb(9, 164, 226);
		filter: drop-shadow(rgb(9, 164, 226) 0px 0px 0.45rem);
	}

	&.active > svg {
		color: ${({ theme }) => theme.colors.main};
	}

	&.active > svg {
		color: ${({ theme }) => theme.colors.main};
	}

	&:hover:not(.active) > svg {
		color: ${({ theme }) => theme.colors.main};
	}
`;
