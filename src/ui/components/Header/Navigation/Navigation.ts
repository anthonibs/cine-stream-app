import styled from 'styled-components';

export const Navbar = styled.nav`
	width: fit-content;
	height: 100%;
`;

export const NavbarItems = styled.ul`
	display: flex;
	gap: 1rem;
	height: inherit;
	width: 100%;
`;

export const NavbarItem = styled.li`
	height: 100%;
	width: 100%;

	> a {
		position: relative;
		white-space: nowrap;
		display: block;
		height: 100%;
		color: ${({ theme }) => theme.font.color[200]};
		font-size: 1rem;
		font-weight: 600;
		padding: .4rem .9rem;
	}

	.active {
		color: ${({ theme }) => theme.font.color[100]};

		&::before {
			content: '';
			position: absolute;
			bottom: -10px;
			width: 12px;
			height: 12px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 12px;
			background: linear-gradient(180deg, #0586b9ed 10%, rgba(71, 71, 71, .06) 93%);
		}
	}

	/* Teste de como funciona pending NavLink */
	.pending {
		background: #0586b9ed;
		background: linear-gradient(180deg, #0586b9ed 10%, rgba(71, 71, 71, .06) 93%);
	}
`;