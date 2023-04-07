import styled from 'styled-components';

export const Navbar = styled.nav`
	@media (min-width: 375px) {
		width: fit-content;
		height: fit-content;
		padding: .3rem 1.6rem 0;
	}

	@media (min-width: 968px) {
		height: 100%;
		padding: 0;
	}
`;

export const NavbarItems = styled.ul`
	display: flex;
	width: 100%;
	gap: .3rem;

	@media (min-width: 375px) {
		flex-direction: column;
	}

	@media (min-width: 968px) {
		flex-direction: row;
		height: inherit;
		gap: .5rem;
	}

	@media (min-width: 1200px) {
		gap: 1rem;
	}
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
		font-size: .775rem;
		font-weight: 600;
		padding: .2rem;
	}

	@media (min-width: 375px) {
		.active {
			color: ${({ theme }) => theme.font.color[100]};
		}
	}

	@media (min-width: 968px) {
		.active {

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
	}

	@media (min-width: 1200px) {
		> a {
			font-size: 1rem;
			padding: .4rem;
		}
	}

	/* Teste de como funciona pending NavLink */
	.pending {
		background: #0586b9ed;
		background: linear-gradient(180deg, #0586b9ed 10%, rgba(71, 71, 71, .06) 93%);
	}
`;