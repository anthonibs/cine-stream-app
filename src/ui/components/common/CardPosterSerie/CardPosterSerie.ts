import styled from 'styled-components';

export const Container = styled.article`
	display: flex;
	flex-direction: column;
	height: 302px;
	justify-content: space-between;
	transition: all .4s linear;
`;

export const ImageContainer = styled.figure`
	border-radius: .45rem;
	height: 237px;
	overflow: hidden;
	width: 100%;

	&.not-image {
		position: relative;

		&::before {
			content: '';
			background: center / cover no-repeat;
			background-image: linear-gradient(rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, .78) 78%), url("https://abravidro.org.br/wp-content/uploads/2015/04/sem-imagem7.jpg");
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
	padding: 0 .325rem;
`;

export const SubTitle = styled.h3`
	color: #FFFFFF;
	font-weight: 700;
	font-size: 16px;
	max-width: 15ch;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Year = styled.span`
	color: #AFAFAF;
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
		font-size: 1.3rem;
		pointer-events: none;
		transition: color .3s ease-in-out;
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