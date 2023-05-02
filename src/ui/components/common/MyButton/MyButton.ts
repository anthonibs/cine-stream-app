import styled, { css } from 'styled-components';

interface IButtonProps {
	variant?: string;
	direction?: string;
	isIcon: boolean;
}

export const Button = styled.button<IButtonProps>`
	appearance: none;
	background: ${({ theme }) => theme.colors.basic[400]};
	cursor: pointer;
	outline: none;
	transition: all .3s ease-in-out;
	padding: 1rem;
	border-radius: 50px;
	width: fit-content;

	${({ isIcon }) => (
		isIcon && css`
			display: flex;
			align-items: center;
			justify-content: center;
			gap: .4rem;
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
		opacity: .9;
		filter: drop-shadow(0 0 .45rem  ${({ theme }) => theme.colors.main});
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
	}

	& > svg {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: 22px;
		pointer-events: none;
	}
`;