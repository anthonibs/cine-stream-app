import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	@media (min-width: 375px) {
		height: fit-content;
		padding: 0.3rem 1.6rem 0;
		width: fit-content;
	}

	@media (min-width: 968px) {
		height: 100%;
		padding: 0;
	}
`;

export const StyledNavbarItems = styled.ul`
	display: flex;
	gap: 0.3rem;
	width: 100%;

	@media (min-width: 375px) {
		flex-direction: column;
	}

	@media (min-width: 968px) {
		flex-direction: row;
		gap: 0.5rem;
		height: inherit;
	}

	@media (min-width: 1200px) {
		gap: 1rem;
	}
`;

export const StyledNavbarItem = styled.li`
	height: 100%;
	width: 100%;

	> a {
		color: ${({ theme }) => theme.font.color[200]};
		display: block;
		font-size: 0.775rem;
		font-weight: 600;
		height: 100%;
		outline: none;
		position: relative;
		padding: 0.2rem;
		white-space: nowrap;

		&:hover {
			color: ${({ theme }) => theme.font.color[100]};
			opacity: 0.9;
		}
	}

	@media (min-width: 375px) {
		.active {
			color: ${({ theme }) => theme.font.color[100]};
		}
	}

	@media (min-width: 968px) {
		> a:focus,
		.active {
			&::before {
				content: '';
				bottom: -10px;
				border-radius: 12px;
				background: linear-gradient(180deg, #0586b9ed 10%, rgba(71, 71, 71, 0.06) 93%);
				height: 12px;
				left: 50%;
				position: absolute;
				transform: translateX(-50%);
				width: 12px;
			}
		}
	}

	@media (min-width: 1200px) {
		> a {
			font-size: 1rem;
			padding: 0.4rem;
		}
	}
`;
