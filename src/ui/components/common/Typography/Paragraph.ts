import styled, { css } from 'styled-components';

type IType = 'xxlg' | 'xlg' | 'lg' | 'xmd' | 'md' | 'sm' | 'xsm';

interface IParagraphProps {
	size?: IType;
	color?: 'primary' | 'secondary';
}

const Paragraph = styled.p<IParagraphProps>`${({ size, color }) => css`
		color: ${({ theme }) => theme.colors.basic[100]};
		font-weight: 600;
		font-size: ${({ theme }) => theme.font.sizes.b.md};
		font-family: ${({ theme }) => theme.font.family};
		line-height: normal;

		${size === 'xxlg' && css`
			font-size:${({ theme }) => theme.font.sizes.b.xxlg};
		`}

		${size === 'xlg' && css`
			font-size:${({ theme }) => theme.font.sizes.b.xlg};
		`}

		${size === 'lg' && css`
			font-size:${({ theme }) => theme.font.sizes.b.lg};
		`}

		${size === 'xmd' && css`
			font-size: ${({ theme }) => theme.font.sizes.b.xmd};
		`}

		${size === 'sm' && css`
			font-size: ${({ theme }) => theme.font.sizes.b.md};
		`}

		${size === 'sm' && css`
			font-size: ${({ theme }) => theme.font.sizes.b.sm};
		`}

		${size === 'xsm' && css`
			font-size: ${({ theme }) => theme.font.sizes.b.xsm};
		`}

		${color === 'primary' && css`
			color: ${({ theme }) => theme.colors.main};
		`}

		${color === 'secondary' && css`
			color: ${({ theme }) => theme.font.color[200]};
		`}
  `}
`;


export default Paragraph;