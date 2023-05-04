import styled, { css } from 'styled-components';

interface IButtonProps {
	variant?: string;
	direction?: string;
	isIcon: boolean;
	modes: string;
}

export const Button = styled.button<IButtonProps>`
	appearance: none;
	background: ${({ theme }) => theme.colors.basic[400]};
	cursor: pointer;
	outline: none;
	padding: 1rem;
	transition: all .3s ease-in-out;

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
		direction === 'left' && css`
			flex-direction: row-reverse;
		`
	)}

	${({ direction }) => (
		direction === 'right' && css`
			flex-direction: row;
		`
	)}

	&.primary {
		background: ${({ theme }) => theme.colors.main};
	}

	&.secondary {
		background: ${({ theme }) => theme.menu};
	}

	&:hover, &:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 .45rem  ${({ theme }) => theme.colors.main});
		opacity: .9;
	}

	& > svg {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: 22px;
		pointer-events: none;
	}
`;