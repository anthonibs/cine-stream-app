import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.3) 0px 6px 6px;

	padding: 0 1.6rem;

	height: 90px;
	width: 100%;

	position: fixed;

	z-index: 999;

	@media (min-width: 375px) {
		background-color: rgba(0, 10, 22, 1);
	}

	@media (min-width: 968px) {
		background: ${({ theme }) => theme.header};
	}

	@media (min-width: 1200px) {
		padding: 0 4rem;
	}
`;

export const NavigationGroup = styled.div`
	display: flex;
	align-items: center;

	> a {
		outline: none;
	}

	@media (min-width: 375px) {
		gap: 1.5rem;
	}

	@media (min-width: 968px) {
		gap: 2rem;
	}

	@media (min-width: 1200px) {
		gap: 4rem;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	height: 100%;
`;
