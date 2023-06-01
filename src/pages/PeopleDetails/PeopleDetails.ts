import styled from 'styled-components';

export const StyledContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	min-height: calc(100vh - 317px);
	padding-top: 90px;
	width: 100%;
	position: relative;
`;


export const StyledGrid = styled.div`
	display: grid;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 3rem;
	grid-template-areas:
		'aside content';
	height: 100%;
	grid-template-columns: 320px 1fr;
	gap: 2rem;
`;


export const StyledAside = styled.aside`
	grid-area: 'aside';
`;


export const StyledImageProfile = styled.figure`
	height: 400px;
	width: 100%;

	& > img {
		height: 100%;
		width: 100%;
		display: block;
		object-fit: center;
		border-radius: 1rem;
	}
`;


export const StyledContent = styled.article`
	grid-area: 'content';
	width: 100%;
	overflow: hidden;
	position: relative;
`;


export const StyledDisplayContent = styled.div`
	margin-top: 2rem;
	display: flex;
	width: 100%;
	flex-direction:column;
	gap: 1rem;
`;

export const StyledSocialNetworks = styled.div`
	margin-top: 1.325rem;
	margin-left: .6rem;
	width: fit-content;
	display: flex;
	flex-direction: row;
	gap: .775rem;

	& > a {
		height: 40px;
		width: 40px;
		color: ${({ theme }) => theme.font.color[200]};
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		transition: all .3s ease-in-out;
		border-radius: 20px;
		opacity: .6;
		background:
			linear-gradient( #FFF,  #FFF) padding-box,
			linear-gradient(to right, #09a4e2, #097aeb) border-box;
		border: 2px solid transparent;

		&:focus, &:hover {
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
		margin-top: 1.5rem;
		margin-bottom: 2rem;
	}

	& > article {
		display: flex;
		flex-direction: column;
		margin-top: 1.325rem;

		& p {
			margin-left: .175rem;
		}
	}
`;