import styled from 'styled-components';

export const StyledContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	min-height: calc(100vh - 317px);
	padding-top: 90px;
	position: relative;
	width: 100%;
`;

export const StyledGrid = styled.div`
	display: grid;
	height: 100%;
	margin: 0 auto;
	max-width: 1400px;
	width: 100%;

	@media (min-width: 375px) {
		grid-template-areas:
			'aside'
			'content';
		gap: 3rem;
		grid-template-columns: 1fr;
		padding: 1.325rem;
	}

	@media (min-width: 768px) {
		grid-template-areas: 'aside content';
		grid-template-columns: 260px 1fr;
		gap: 2rem;
		padding: 1.6rem;
		padding-bottom: 2rem;
	}

	@media (min-width: 1000px) {
		grid-template-columns: 320px 1fr;
		padding: 2rem 3rem;
	}
`;

export const StyledAside = styled.aside`
	grid-area: 'aside';
`;

export const StyledImageProfile = styled.figure`
	& > img {
		border-radius: 1rem;
		display: block;
		height: 100%;
		object-fit: center;
		width: 100%;
	}

	@media (min-width: 375px) {
		height: 280px;
		width: 100%;
	}

	@media (min-width: 768px) {
		height: 300px;
		width: 100%;
	}

	@media (min-width: 1000px) {
		height: 400px;
		width: 100%;
	}
`;

export const StyledContent = styled.article`
	grid-area: 'content';
	width: 100%;
	overflow: hidden;
	position: relative;
`;

export const StyledDisplayContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
	width: 100%;
`;

export const StyledSocialNetworks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.775rem;
	margin-top: 1.325rem;
	margin-left: 0.6rem;
	width: fit-content;

	& > a {
		align-items: center;
		border-radius: 20px;
		border: 2px solid transparent;
		background: linear-gradient(#fff, #fff) padding-box,
			linear-gradient(to right, #09a4e2, #097aeb) border-box;
		color: ${({ theme }) => theme.font.color[200]};
		display: flex;
		height: 40px;
		justify-content: center;
		outline: none;
		opacity: 0.6;
		transition: all 0.3s ease-in-out;
		width: 40px;

		&:focus,
		&:hover {
			opacity: 1;
		}
	}

	& .icon-social {
		color: ${({ theme }) => theme.colors.main};
		font-size: 1.325rem;
	}
`;

export const StyledInfoContent = styled.section`
	& > header {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	& > article {
		display: flex;
		flex-direction: column;
		margin-top: 0.875rem;

		& p {
			margin-left: 0.175rem;
		}
	}

	@media (min-width: 768px) {
		& > header {
			margin-top: 1.5rem;
		}

		& > article {
			margin-top: 1.325rem;
		}
	}
`;
