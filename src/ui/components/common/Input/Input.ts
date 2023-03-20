import styled from 'styled-components';

export const InputCustom = styled.input`
	width: 100%;
	padding: .6rem 2.5rem .6rem .6rem;
	border-radius: .325rem;
	font-size: 1rem;
	color: ${({ theme }) => theme.font.color[200]};
	border: 2px solid transparent;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.font.color[200]};
		opacity: .7;
	}

	&:focus  {
		outline: 2px solid transparent;
		background: linear-gradient(#FFF, #FFF) padding-box, linear-gradient(to right, #00c1fc, #00d9ff) border-box;
		box-shadow: 0 0 4px 1px rgba(0,189, 252, 45%);
	}

`;

export const ButtonDisplayPass = styled.button`
	position: absolute;
	display: flex;
	top: 27px;
	right: 5px;
	padding: .3rem;
	cursor: pointer;
	background: transparent;

	> svg {
		pointer-events: none;
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.main};

		&:hover {
			color: ${({ theme }) => theme.colors.mainHover};
		}
	}
`;