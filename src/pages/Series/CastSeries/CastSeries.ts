import styled from 'styled-components';

export const StyledSectionContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	min-height: calc(100vh - 317px);
	padding-top: 90px;
	width: 100%;
`;

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.body};
	height: 120px;

	@media (min-width: 375px) {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		padding: 1rem 3rem;
	}
`;

export const StyledHeaderWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
	height: 100%;
	max-width: 1400px;
	margin: 0 auto;
`;

export const StyledImage = styled.figure`
	border-radius: 0.225rem;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
	user-select: none;
	width: 90px;

	& img {
		display: block;
		height: 100%;
		object-fit: contain;
		width: 100%;
	}
`;

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const StyledTitle = styled.h1`
	color: ${({ theme }) => theme.font.color[100]};

	& > span {
		color: ${({ theme }) => theme.font.color[200]};
		font-weight: ${({ theme }) => theme.font.weight[200]};
	}

	@media (min-width: 375px) {
		font-size: ${({ theme }) => theme.font.sizes.h.xsm};
	}

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.sizes.h.sm};
	}
`;

export const StyledGoBackButton = styled.button`
	align-items: center;
	background-color: transparent;
	cursor: pointer;
	color: ${({ theme }) => theme.font.color[200]};
	display: flex;
	font-size: 0.9rem;
	gap: 0.6rem;
	margin-top: 0.325rem;
	transition: opacity 0.3s;

	&:hover {
		opacity: 0.85;
	}

	& > svg {
		font-size: 0.725rem;
	}
`;

export const StyledContent = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 0 auto;
	min-height: 450px;
	max-width: 1400px;
	position: relative;

	@media (min-width: 375px) {
		flex-direction: column;
		padding: 1rem 1rem 2rem;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		padding: 2rem 3rem;
	}

	@media (min-width: 1000px) {
		flex-direction: row;
		padding: 2rem 3rem;
	}
`;

export const StyledColumnLayout = styled.section`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
`;

export const StyledCastNumber = styled.span`
	color: ${({ theme }) => theme.font.color[200]};
	margin-left: 0.375rem;
`;

export const StyledDepartmentCategory = styled.div`
	flex: 1;

	& > header {
		margin-bottom: 0.775rem;
	}

	&:not(:nth-child(2)) > header {
		margin-top: 2rem;
	}
`;

export const StyledList = styled.ul`
	@media (min-width: 375px) {
		display: grid;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.6rem;
		width: 100%;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1000px) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

export const StyledListItem = styled.li`
	@media (min-width: 375px) {
		display: flex;
		gap: 0.325rem;
		height: 100%;

		& > a {
			color: ${({ theme }) => theme.colors.basic[100]};
			height: 100%;
		}
	}

	@media (min-width: 768px) {
		align-items: center;
		gap: 0.725rem;
		height: 70px;
	}
`;

export const StyledImageInfo = styled.figure`
	height: 50px;
	width: 50px;

	& > img {
		border-radius: 0.5rem;
		display: block;
		height: 100%;
		overflow: hidden;
		object-fit: cover;
		object-position: center;
		width: 100%;
	}

	@media (min-width: 768px) {
		height: 70px;
		width: 70px;
	}
`;

export const StyledInformation = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 375px) {
		& > a > h4 {
			color: ${({ theme }) => theme.colors.basic[400]};
			font-size: ${({ theme }) => theme.font.sizes.b.sm};
		}

		& > p {
			color: ${({ theme }) => theme.colors.basic[200]};
			font-size: ${({ theme }) => theme.font.sizes.b.xsm};
			font-weight: ${({ theme }) => theme.font.weight[300]};
		}
	}

	@media (min-width: 768px) {
		& > a > h4 {
			font-size: ${({ theme }) => theme.font.sizes.b.md};
		}
	}
`;
