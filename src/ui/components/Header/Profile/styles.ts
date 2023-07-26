import styled from 'styled-components';
import { lighten } from 'polished';

export const Settings = styled.div`
	display: flex;
	flex-direction: column;

	height: 100%;

	position: relative;

	& > .menu-settings {
		margin-top: 0.775rem;
		padding: 0.2rem;

		z-index: 100;

		& > a {
			display: block;

			margin-bottom: 0.325rem;

			color: ${({ theme }) => theme.colors.basic[100]};
			font-size: 0.925rem;
		}
	}

	@media (min-width: 965px) {
		align-items: center;
		flex-direction: row;

		& > .menu-settings {
			height: fit-content;
			min-height: 6rem;
			width: 12rem;

			background: ${({ theme }) => lighten(0.09, theme.body)};
			box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 10px -2px, rgba(0, 0, 0, 0.5) 0px 4px 8px -4px;

			padding: 0.825rem;
			border-radius: 0.2rem;

			opacity: 0;
			visibility: hidden;
			transition: all 0.5s linear;

			position: absolute;
			right: 10px;
			top: 70px;
			z-index: 100;

			& > a {
				font-weight: ${({ theme }) => theme.font.weight[200]};

				margin-bottom: 0.2rem;
			}
		}

		&:hover > .menu-settings {
			opacity: 1;
			visibility: visible;
			transition: opacity 0.5s linear;
		}
	}
`;
