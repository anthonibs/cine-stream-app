import styled, { css } from 'styled-components';

interface IButtonProps {
	variant?: string;
	direction?: string;
	isIcon: boolean;
	modes: string;
}

export const StyledButton = styled.button<IButtonProps>`
	appearance: none;
	background: ${({ theme }) => theme.colors.basic[600]};
	cursor: pointer;
	outline: none;
	transition: all .3s ease-in-out;

	@media (min-width: 375px) {
		padding: .475rem;

		& > svg {
			color: ${({ theme }) => theme.colors.basic[100]};
			font-size: 1rem;
			pointer-events: none;
		}
	}

	@media (min-width: 768px) {
		padding: .875rem;

		& > svg {
			font-size: 1.25rem;
		}
	}

	${({ modes }) => (
		modes === 'square' && css`
			border-radius: .125rem;
			width: 100%;
		`
	)}

	${({ modes }) => (
		modes === 'round' && css`
			border-radius: 50px;
			width: fit-content;
		`
	)}

	${({ isIcon }) => (
		isIcon && css`
			align-items: center;
			display: flex;
			gap: .4rem;
			justify-content: center;
			user-select: none;
		`
	)}

	${({ direction }) => (
		direction === 'ltr' && css`
			flex-direction: row-reverse;
		`
	)}

	${({ direction }) => (
		direction === 'rtl' && css`
			flex-direction: row;
		`
	)}

	&.primary {
		background: ${({ theme }) => theme.colors.main};
	}

	&:hover, &:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 .45rem  ${({ theme }) => theme.colors.main});
		opacity: .9;
	}

	&:disabled {
		box-shadow: none;
		background-color: ${({ theme }) => theme.colors.basic[600]};
		cursor: default;
		filter: none;
		opacity: .25;
	}
`;