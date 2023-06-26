import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 0.3rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: fit-content;
	overflow: hidden;
	outline: 1px solid ${({ theme }) => theme.colors.basic[500]};

	&.collapse-open fieldset {
		display: block;
	}

	&.collapse-open svg {
		pointer-events: none;
		transform: rotate(90deg);
	}
`;

export const ToggleFilter = styled.button`
	background-color: transparent;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	outline: none;
	padding: 1rem;
	transition: background 0.2s linear;
	width: 100%;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => darken(0.1, theme.colors.basic[100])};
	}

	> svg {
		color: ${({ theme }) => theme.colors.basic[400]};
		font-size: 1.3rem;
		transition: transform 0.3s ease;
	}
`;

export const SubTitle = styled.h2`
	color: ${({ theme }) => theme.colors.basic[400]};
	font-size: 1.1rem;
	letter-spacing: 1px;
`;
