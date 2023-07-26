import styled from 'styled-components';
import { convertPixelsToREM } from 'utils';

export const NotificationButton = styled.button`
	cursor: pointer;
	appearance: none;

	background-color: transparent;

	outline: none;
	border-radius: 50%;

	width: 34px;
	height: 34px;

	position: relative;

	&:hover,
	&:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 0.45rem ${({ theme }) => theme.colors.main});
	}

	.icons-configuration {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: ${convertPixelsToREM(18)};
	}

	@media (min-width: 1200px) {
		gap: 2rem;

		.icons-configuration {
			font-size: ${convertPixelsToREM(24)};
		}
	}
`;

export const Amount = styled.span`
	color: ${({ theme }) => theme.colors.basic[100]};

	background: #00b4db;
	background: -webkit-linear-gradient(to bottom, #0083b0, #00b4db);

	opacity: 0;
	visibility: hidden;

	transition: opacity 0.1s linear;

	&.active {
		opacity: 1;
		visibility: visible;
	}

	@media (min-width: 968px) {
		line-height: ${convertPixelsToREM(18)};
		font-size: ${convertPixelsToREM(10)};

		height: ${convertPixelsToREM(15)};
		width: ${convertPixelsToREM(15)};

		border-radius: ${convertPixelsToREM(9)};

		position: absolute;
		right: -1px;
		top: -5px;
	}

	@media (min-width: 1200px) {
		font-size: ${convertPixelsToREM(11)};

		height: ${convertPixelsToREM(18)};
		width: ${convertPixelsToREM(18)};

		right: -3px;
		top: -9px;
	}
`;
