import styled, { css } from 'styled-components';

type IType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle'

interface IHeadingProps {
	component: IType;
	variant: IType;
	color?: 'primary'
}

const Heading = styled.h1.attrs<IHeadingProps>(({ component }) => ({
	as: `${component}`
})) <IHeadingProps>`
	${({ variant, color }) => css`
		font-family:  ${({ theme }) => theme.font.family};
		color: ${({ theme }) => theme.colors.basic[100]};
		line-height: 1;

		${variant === 'h1' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.xxl};
		`}

		${variant === 'h2' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.xl};
		`}

		${variant === 'h3' && css`
			font-size:${({ theme }) => theme.font.sizes.h.lg};
		`}

		${variant === 'h4' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.md};
		`}

		${variant === 'h5' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.sm};
		`}

		${variant === 'h6' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.xsm};
		`}

		${variant === 'subtitle' && css`
			font-size: ${({ theme }) => theme.font.sizes.h.subtitle};
		`}


		${color && css`
			color: ${({ theme }) => theme.colors.main};
		`}
	`}
`;


export default Heading;