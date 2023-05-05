import { Link } from 'react-router-dom';
import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const Button = styled.button`
	color: ${({ theme }) => theme.font.color[100]};
	border-radius: .125rem;
	font-weight: 700;
	font-size: ${convertPixelsToREM(16)};
	text-align: center;
	display: block;
	width: 100%;
	line-height: 2;
	padding: ${convertPixelsToREM(16)};
	background-color: ${({ theme }) => theme.colors.main};
	transition: all .3s ease-in-out;
	cursor: pointer;

	&:hover {
		transition: all .3s ease-in-out;
		background-color: ${({ theme }) => theme.colors.mainHover};
	}

	&.outline {
		background-color: transparent;
		outline: 3px solid ${({ theme }) => theme.colors.main};

		&:hover {
			outline: 3px solid ${({ theme }) => theme.colors.mainHover};
		}
	}

	&:hover:disabled, &:disabled {
		cursor: default;
		opacity: .3;
		background-color: ${({ theme }) => theme.colors.main};
	}
`;


export const LinkCustom = styled(Link)`
	color: ${({ theme }) => theme.font.color[100]};
	border-radius: .125rem;
	font-weight: 700;
	font-size: ${convertPixelsToREM(16)};
	text-align: center;
	display: block;
	width: 100%;
	line-height: 2;
	padding: ${convertPixelsToREM(16)};
	background-color: ${({ theme }) => theme.colors.main};
	transition: all .3s ease-in-out;


	&:hover {
		transition: all .3s ease-in-out;
		background-color: ${({ theme }) => theme.colors.mainHover};
		cursor: pointer;
	}

	&.outline {
		background-color: transparent;
		outline: 3px solid ${({ theme }) => theme.colors.main};

		&:hover {
			outline: 3px solid ${({ theme }) => theme.colors.mainHover};
		}
	}
`;