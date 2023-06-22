import styled, { css } from 'styled-components';

interface IOption {
	focoAtivo?: boolean;
}

interface ISelect {
	position?: string;
}

export const StyledContainer = styled.div`
	min-width: 100px;
	position: relative;
`;

export const StyledButton = styled.button`
	appearance: none;
	align-items: center;
	border-radius: 0.4rem;
	background-color: ${({ theme }) => theme.colors.basic[500]};
	cursor: pointer;
	color: ${({ theme }) => theme.colors.basic[600]};
	display: flex;
	font-size: ${({ theme }) => theme.font.sizes.b.sm};
	justify-content: space-between;
	outline: 1px solid ${({ theme }) => theme.colors.basic[500]};
	padding: 0.6rem 0.4rem;
	width: 100%;

	& > svg {
		font-size: 1rem;
		pointer-events: none;
		transition: transform 0.3s ease;
		transform: rotate(0deg);
	}

	&.rotate-arrow > svg {
		transform: rotate(90deg);
	}

	&.rotate-arrow {
		border-radius: 0.4rem 0.4rem 0 0;
	}
`;

export const StyledSelect = styled.div<ISelect>`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	display: none;
	outline: 1px solid ${({ theme }) => theme.colors.basic[500]};
	position: ${({ position }) => (position ? position : 'relative')};
	width: 100%;
	z-index: 200;

	&.open-item-list {
		border-radius: 0 0 0.4rem 0.4rem;
		display: block;
	}
`;

export const StyledOption = styled.span<IOption>`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.basic[600]};
	display: block;
	font-size: ${({ theme }) => theme.font.sizes.b.sm};
	padding: 0.4rem;
	user-select: none;

	&:not(.selected):hover {
		background-color: ${({ theme }) => theme.colors.basic[500]};
		opacity: 0.5;
	}

	${({ focoAtivo }) =>
		focoAtivo &&
		css`
			background-color: ${({ theme }) => theme.colors.basic[500]};
		`}

	&.selected {
		background-color: ${({ theme }) => theme.colors.basic[500]};
	}
`;
