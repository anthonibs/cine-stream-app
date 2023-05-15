import styled from 'styled-components';

export const StyledContainer = styled.div`
	margin: 0 auto;
	min-height: calc(100vh - 321px);
	padding-top: 120px;
	width: 90%;
`;


export const StyledWrapper = styled.div`
	display: flex;
`;


export const StyledGoBack = styled.div`
	min-width: 160px;
	margin-top: 5rem;
	width: fit-content;
`;

export const StyledFigure = styled.figure`
	height: 100%;
	width: 100%;
`;

export const Image = styled.img`
	display: block;
	height: inherit;
	pointer-events: none;
	user-select: none;
	width: inherit;
`;