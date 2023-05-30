import styled from 'styled-components';

export const StyledSectionContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	min-height: calc(100vh - 317px);
	padding-top: 90px;
	width: 100%;
`;

export const StyledHeader = styled.header`
	background-color:  ${({ theme }) => theme.body};
	height: 120px;
	padding: 1rem 3rem;
`;

export const StyledHeaderWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
	height: 100%;
	max-width: 1400px;
	margin: 0 auto;
`;

export const StyledImage = styled.figure`
	border-radius: .225rem;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
	user-select: none;
	width: 70px;

	& img {
		display: block;
		height: 100%;
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
	font-size: ${({ theme }) => theme.font.sizes.h.sm};

	& > span {
		color: ${({ theme }) => theme.font.color[200]};
		font-weight: ${({ theme }) => theme.font.weight[200]};
	}
`;

export const StyledGoBackButton = styled.button`
	align-items: center;
	background-color: transparent;
	color: ${({ theme }) => theme.font.color[200]};
	cursor: pointer;
	display: flex;
	font-size: 1rem;
	gap: .6rem;
	margin-top: .325rem;
	transition: opacity .3s;

	&:hover {
		opacity: .85;
	}

	& > svg {
		font-size: .725rem;
	}
`;

export const StyledContent = styled.div`
	display: flex;
	justify-content: flex-start;
	min-height: 450px;
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 3rem;
	position: relative;
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
	margin-left: .375rem;
`;

export const StyledDepartmentCategory = styled.div`
	flex: 1;

	& > header {
		margin-bottom: .775rem;
	}

	&:not(:nth-child(2)) > header {
		margin-top: 2rem;
	}
`;

export const StyledList = styled.ul`
	display:flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledListItem = styled.li`
	align-items: center;
	display: flex;
	gap: .725rem;
	height: 70px;
	width: 100%;

	& > a {
		color: ${({theme}) => theme.colors.basic[100]};
		height: 100%;
	}
`;

export const StyledImageInfo = styled.figure`
	height: 70px;
	width: 70px;

	& > img {
		border-radius: .5rem;
		display: block;
		height: 100%;
		overflow: hidden;
		object-fit: cover;
		object-position: center;
		width: 100%;
	}
`;

export const StyledInformation = styled.div`
	display: flex;
	flex-direction: column;

	& > a > h4 {
		color: ${({theme}) => theme.colors.basic[400]};
		font-size: ${({theme}) => theme.font.sizes.b.md};
	}

	& > p {
		color: ${({theme}) => theme.colors.basic[200]};
		font-size: ${({theme}) => theme.font.sizes.b.xsm};
		font-weight: ${({theme}) => theme.font.weight[300]};
	}
`;